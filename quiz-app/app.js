/* =========================================================================
   Mobile HCI Exam Quiz — app logic
   - loads questions.json (falls back to window.QUESTIONS for file:// use)
   - reshuffles question order AND option order on every attempt
   ========================================================================= */

(() => {
  "use strict";

  const KEYS = ["A", "B", "C", "D"];
  const RING_CIRC = 327; // 2 * pi * 52

  const state = {
    all: [],            // full question bank
    config: { count: "all", mode: "instant", topics: new Set() },
    session: [],        // shuffled+sliced questions for this attempt (with displayOptions)
    index: 0,
    answers: [],        // per session question: { picked: <displayIdx|null>, correct: <bool> }
  };

  // ---------- helpers ----------
  const $ = (id) => document.getElementById(id);
  const el = (tag, cls, html) => {
    const n = document.createElement(tag);
    if (cls) n.className = cls;
    if (html != null) n.innerHTML = html;
    return n;
  };

  function shuffle(arr) {
    const a = arr.slice();
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  function showScreen(id) {
    document.querySelectorAll(".screen").forEach((s) => s.classList.remove("active"));
    $(id).classList.add("active");
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function bestScore() {
    const v = Number(localStorage.getItem("mhci_best"));
    return Number.isFinite(v) && v > 0 ? v : 0;
  }
  function saveBest(pct) {
    if (pct > bestScore()) localStorage.setItem("mhci_best", String(pct));
  }

  // ---------- load ----------
  async function loadQuestions() {
    // prefer fetched JSON (works when served over http)
    try {
      const res = await fetch("questions.json", { cache: "no-store" });
      if (res.ok) {
        const data = await res.json();
        const qs = Array.isArray(data) ? data : data.questions;
        if (Array.isArray(qs) && qs.length) return qs;
      }
    } catch (_) { /* file:// will throw — fall through */ }
    // fallback: embedded data from questions.js
    if (Array.isArray(window.QUESTIONS) && window.QUESTIONS.length) return window.QUESTIONS;
    return [];
  }

  // ---------- start screen ----------
  function catOf(q) { return q.category || q.topic; }

  function initStartScreen() {
    // preserve the order categories appear in the bank (it follows the syllabus)
    const topics = [...new Set(state.all.map(catOf))];
    topics.forEach((t) => state.config.topics.add(t));

    $("stat-total").textContent = state.all.length;
    $("stat-topics").textContent = topics.length;
    const best = bestScore();
    $("stat-best").textContent = best ? best + "%" : "—";

    // category chips
    const wrap = $("topic-chips");
    wrap.innerHTML = "";
    topics.forEach((t) => {
      const n = state.all.filter((q) => catOf(q) === t).length;
      const chip = el("button", "chip on", `${t}<span class="chip-count">${n}</span>`);
      chip.dataset.topic = t;
      chip.addEventListener("click", () => {
        chip.classList.toggle("on");
        if (chip.classList.contains("on")) state.config.topics.add(t);
        else state.config.topics.delete(t);
        refreshStartButton();
      });
      wrap.appendChild(chip);
    });

    // count segmented
    $("count-options").addEventListener("click", (e) => {
      const b = e.target.closest(".seg-btn");
      if (!b) return;
      $("count-options").querySelectorAll(".seg-btn").forEach((x) => x.classList.remove("active"));
      b.classList.add("active");
      state.config.count = b.dataset.count;
    });

    // mode segmented
    const hints = {
      instant: "See if you're right after each question, with an explanation.",
      exam: "Answer everything first; feedback and explanations come at the end.",
    };
    $("mode-options").addEventListener("click", (e) => {
      const b = e.target.closest(".seg-btn");
      if (!b) return;
      $("mode-options").querySelectorAll(".seg-btn").forEach((x) => x.classList.remove("active"));
      b.classList.add("active");
      state.config.mode = b.dataset.mode;
      $("mode-hint").textContent = hints[b.dataset.mode];
    });

    const startBtn = $("btn-start");
    startBtn.disabled = false;
    startBtn.textContent = "Start quiz →";
    startBtn.addEventListener("click", startQuiz);
    refreshStartButton();
  }

  function refreshStartButton() {
    const btn = $("btn-start");
    if (state.config.topics.size === 0) {
      btn.disabled = true;
      btn.textContent = "Select at least one topic";
    } else {
      btn.disabled = false;
      btn.textContent = "Start quiz →";
    }
  }

  // ---------- build a fresh (shuffled) session ----------
  function buildSession() {
    let pool = state.all.filter((q) => state.config.topics.has(catOf(q)));
    pool = shuffle(pool);
    if (state.config.count !== "all") {
      const n = parseInt(state.config.count, 10);
      if (Number.isFinite(n)) pool = pool.slice(0, n);
    }
    // shuffle options within each question, remember where the correct one landed
    state.session = pool.map((q) => {
      const opts = shuffle(q.options.map((text, i) => ({ text, orig: i })));
      const correctDisplayIndex = opts.findIndex((o) => o.orig === q.correctIndex);
      return { ...q, displayOptions: opts, correctDisplayIndex };
    });
    state.answers = state.session.map(() => ({ picked: null, correct: false }));
    state.index = 0;
  }

  function startQuiz() {
    buildSession();
    showScreen("screen-quiz");
    renderQuestion();
  }

  // ---------- render a question ----------
  function renderQuestion() {
    const i = state.index;
    const q = state.session[i];
    const ans = state.answers[i];
    const total = state.session.length;
    const instant = state.config.mode === "instant";

    $("q-counter").textContent = `Question ${i + 1} of ${total}`;
    $("progress-fill").style.width = `${(i / total) * 100}%`;

    const correctSoFar = state.answers.filter((a) => a.correct).length;
    const scorePill = $("q-score");
    scorePill.hidden = !instant;
    scorePill.textContent = `${correctSoFar} correct`;

    $("q-topic").textContent = q.topic;
    const diff = $("q-difficulty");
    diff.textContent = q.difficulty;
    diff.className = `tag diff-${q.difficulty}`;
    $("q-lecture").textContent = q.lecture;

    $("q-text").textContent = q.question;

    // options
    const box = $("options");
    box.innerHTML = "";
    const answered = ans.picked !== null;
    q.displayOptions.forEach((opt, di) => {
      const b = el("button", "option");
      b.dataset.di = di;
      b.innerHTML = `<span class="key">${KEYS[di]}</span><span class="opt-text">${escapeHtml(opt.text)}</span>`;
      b.addEventListener("click", () => onPick(di));
      box.appendChild(b);
    });

    // explanation panel hidden until revealed
    const exp = $("explanation");
    exp.hidden = true;

    // restore prior answer state (revisiting in exam mode, or already-answered instant)
    if (answered) {
      if (instant) revealInstant(i);
      else markSelectedExam(ans.picked);
    }

    // nav
    const prev = $("btn-prev");
    prev.hidden = !(state.config.mode === "exam" && i > 0);
    const next = $("btn-next");
    next.textContent = i === total - 1 ? "Finish ✓" : "Next →";
    // instant: next enabled only after answering. exam: enabled after a pick (but can also skip? require pick)
    next.disabled = ans.picked === null;
  }

  function escapeHtml(s) {
    return String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  }

  // ---------- answering ----------
  function onPick(di) {
    const i = state.index;
    const ans = state.answers[i];
    const instant = state.config.mode === "instant";

    if (instant) {
      if (ans.picked !== null) return; // locked
      ans.picked = di;
      ans.correct = di === state.session[i].correctDisplayIndex;
      revealInstant(i);
      $("btn-next").disabled = false;
    } else {
      ans.picked = di;
      ans.correct = di === state.session[i].correctDisplayIndex;
      markSelectedExam(di);
      $("btn-next").disabled = false;
    }
  }

  function markSelectedExam(di) {
    document.querySelectorAll("#options .option").forEach((b) => {
      b.classList.toggle("selected", Number(b.dataset.di) === di);
    });
  }

  function revealInstant(i) {
    const q = state.session[i];
    const ans = state.answers[i];
    const correctDi = q.correctDisplayIndex;
    document.querySelectorAll("#options .option").forEach((b) => {
      const di = Number(b.dataset.di);
      b.classList.add("locked");
      b.disabled = true;
      if (di === correctDi) {
        b.classList.add("correct");
        b.appendChild(el("span", "mark", "✓"));
      } else if (di === ans.picked) {
        b.classList.add("wrong");
        b.appendChild(el("span", "mark", "✕"));
      }
    });
    const exp = $("explanation");
    exp.hidden = false;
    exp.className = "explanation " + (ans.correct ? "ok" : "no");
    $("verdict-icon").textContent = ans.correct ? "✓" : "✕";
    $("verdict-text").textContent = ans.correct ? "Correct" : "Not quite";
    $("explanation-text").textContent = q.explanation;
  }

  // ---------- navigation ----------
  function next() {
    if ($("btn-next").disabled) return;
    if (state.index < state.session.length - 1) {
      state.index++;
      renderQuestion();
    } else {
      showResults();
    }
  }
  function prev() {
    if (state.config.mode === "exam" && state.index > 0) {
      state.index--;
      renderQuestion();
    }
  }

  // ---------- results ----------
  function showResults() {
    const total = state.session.length;
    const correct = state.answers.filter((a) => a.correct).length;
    const pct = Math.round((correct / total) * 100);
    saveBest(pct);

    $("result-pct").textContent = pct + "%";
    $("result-fraction").textContent = `${correct} / ${total}`;
    setTimeout(() => { $("ring-fg").style.strokeDashoffset = String(RING_CIRC * (1 - correct / total)); }, 80);

    const ring = $("ring-fg");
    ring.style.stroke = pct >= 75 ? "var(--good)" : pct >= 50 ? "var(--warn)" : "var(--bad)";

    let head, sub;
    if (pct >= 90) { head = "Outstanding — top-grade ready! 🎓"; sub = "You're answering at the level the exam rewards. Skim any reds below and you're set."; }
    else if (pct >= 75) { head = "Strong — almost there."; sub = "A few gaps left. Lock down the missed topics below, then retry for a clean run."; }
    else if (pct >= 60) { head = "Solid, but gaps to close."; sub = "Good base. Focus your study on the weaker topics highlighted below."; }
    else { head = "Keep drilling."; sub = "Review every explanation below, then retry — the order reshuffles so it's a real re-test."; }
    $("result-headline").textContent = head;
    $("result-sub").textContent = sub;

    renderBreakdown();
    buildReview();
    $("review-list").hidden = true;
    $("btn-review").textContent = "Review answers";
    showScreen("screen-results");
  }

  function renderBreakdown() {
    const byTopic = {};
    state.session.forEach((q, i) => {
      const t = catOf(q);
      byTopic[t] = byTopic[t] || { correct: 0, total: 0 };
      byTopic[t].total++;
      if (state.answers[i].correct) byTopic[t].correct++;
    });
    const wrap = $("topic-breakdown");
    wrap.innerHTML = "";
    Object.keys(byTopic).sort().forEach((t) => {
      const { correct, total } = byTopic[t];
      const p = Math.round((correct / total) * 100);
      const row = el("div", "bd-row");
      row.appendChild(el("span", "bd-name", escapeHtml(t)));
      row.appendChild(el("span", "bd-score", `${correct}/${total} · ${p}%`));
      const bar = el("div", "bd-bar" + (p < 60 ? " low" : ""));
      const span = el("span");
      span.style.width = "0%";
      bar.appendChild(span);
      row.appendChild(bar);
      wrap.appendChild(row);
      requestAnimationFrame(() => { span.style.width = p + "%"; });
    });
  }

  function buildReview() {
    const wrap = $("review-list");
    wrap.innerHTML = "";
    state.session.forEach((q, i) => {
      const ans = state.answers[i];
      const item = el("div", "review-item " + (ans.correct ? "ok" : "no"));
      item.appendChild(el("div", "review-q", `<span class="ri-num">${i + 1}.</span>${escapeHtml(q.question)}`));

      const yourTxt = ans.picked !== null ? q.displayOptions[ans.picked].text : "— (no answer)";
      const your = el("div", "review-line your " + (ans.correct ? "ok" : "no"));
      your.innerHTML = `<span class="lbl">Your answer</span><span class="val">${escapeHtml(yourTxt)}</span>`;
      item.appendChild(your);

      if (!ans.correct) {
        const correctTxt = q.displayOptions[q.correctDisplayIndex].text;
        const cl = el("div", "review-line ans");
        cl.innerHTML = `<span class="lbl">Correct</span><span class="val">${escapeHtml(correctTxt)}</span>`;
        item.appendChild(cl);
      }
      item.appendChild(el("div", "review-exp", `<strong>Why:</strong> ${escapeHtml(q.explanation)}`));
      wrap.appendChild(item);
    });
  }

  // ---------- events ----------
  function wireGlobal() {
    $("btn-next").addEventListener("click", next);
    $("btn-prev").addEventListener("click", prev);
    $("btn-quit").addEventListener("click", () => showScreen("screen-start"));
    $("btn-home").addEventListener("click", () => { $("stat-best").textContent = (bestScore() || "—") + (bestScore() ? "%" : ""); showScreen("screen-start"); });
    $("btn-retry").addEventListener("click", startQuiz);
    $("btn-review").addEventListener("click", () => {
      const list = $("review-list");
      list.hidden = !list.hidden;
      $("btn-review").textContent = list.hidden ? "Review answers" : "Hide review";
      if (!list.hidden) list.scrollIntoView({ behavior: "smooth", block: "start" });
    });

    document.addEventListener("keydown", (e) => {
      if (!$("screen-quiz").classList.contains("active")) return;
      const k = e.key.toLowerCase();
      const map = { "1": 0, a: 0, "2": 1, b: 1, "3": 2, c: 2, "4": 3, d: 3 };
      if (k in map) {
        const di = map[k];
        if (di < state.session[state.index].displayOptions.length) onPick(di);
      } else if (e.key === "Enter" || e.key === "ArrowRight") {
        next();
      } else if (e.key === "ArrowLeft") {
        prev();
      }
    });
  }

  // ---------- boot ----------
  async function boot() {
    wireGlobal();
    const qs = await loadQuestions();
    if (!qs.length) {
      $("btn-start").textContent = "No questions found";
      const err = $("load-error");
      err.hidden = false;
      err.textContent = "Could not load questions.json. If you opened this file directly, run a local server (e.g. `python3 -m http.server`) in this folder, or make sure questions.js is present.";
      return;
    }
    state.all = qs;
    initStartScreen();
  }

  boot();
})();
