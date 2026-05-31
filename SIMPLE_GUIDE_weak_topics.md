# 🎯 Fast Simple Guide — Your Weak Topics

> Read top to bottom. The **worst score is first**, so the most important is at the top.
> Each idea has a tiny "imagine this" picture to make it stick. Short sentences on purpose.

**Your scores, weakest first:**
1. 🔴 Privacy & papers — **0/3** (this is also your presentation topic → most important!)
2. 🔴 Three waves of HCI — **0/1**
3. 🟠 Quantitative analysis — **1/3**
4. 🟡 Design principles — **1/2**
5. 🟡 Research contributions — **2/3**

---

## 1. 🔴 Privacy & papers (you got 0/3 — fix this first)

### The 9 words you must know

**Privacy paradox** — people *say* they care about privacy, but they *act* like they don't.
*Imagine:* a kid says "I hate sweets!" then eats all the candy. Words ≠ actions.

**Learned helplessness (privacy fatigue)** — people gave up. They had bad privacy stuff happen again and again, and felt *nothing they do helps*. So they stop trying — even when there IS a way to protect themselves.
*Imagine:* a kid stops asking for ice cream because the answer is always "no"… so they don't ask even on the one day mum would say "yes."
👉 This is the *real reason* behind the paradox. It is **NOT** laziness. It is feeling powerless.

**Nudge** — a gentle push toward the good choice. You can still say no.
*Imagine:* mum puts the fruit bowl right in front of you, but the cookies are still in the cupboard. She nudges, she does not force.

**Soft paternalism** — helping you choose well *without* forcing you. (A nudge is soft paternalism.)
**Hard paternalism** = the opposite = forcing you (removing your choice). If the app *auto-blocks* with no choice → that is hard, not a nudge.

**Enhanced active choice** — make the person choose, AND remind them what they *lose* if they don't.
*Example from the paper:* the button says **"Keep sharing my location"** — those words remind you of the loss, so you stop and think.

**Information asymmetry** — the app knows WAY more than you do.
*Imagine:* a card game where they can see your cards, but you can't see theirs. Unfair. The "shared 5,398 times" number fixes this by *showing* you what you didn't know.

**Altman's privacy regulation** — privacy is **not a wall, it is a door you keep opening and closing**. It is a *process*, not one setting. You keep adjusting how much you reveal or hide.
👉 Trap: privacy is NOT "more secrecy = better." It is *adjusting*, all the time.

**Leakiness** — your data *leaks out* to other companies (ad/tracking firms). This is the **real leak** (a pipe leaking).
**Creepiness** — the *icky feeling* you get when you notice it. This is the **feeling**, not the leak.
👉 Trap: don't swap these two. Leak = the data going out. Creepy = the feeling.

### The 2 papers (know which is which)

| Paper | Worldview | What it does |
|---|---|---|
| **Shklovski — "Leakiness & Creepiness"** | **Interpretivist** | Explains *WHY* people don't protect themselves → **learned helplessness**. Builds new ideas/concepts. |
| **Almuhimedi — "shared 5,398 times"** | **Positivist** field study | Tests if **nudges work**. Counts, regression, p-values. Found nudges re-wake people (the "day-10" bump). |

### ⭐ The chain to say in the exam
> People care (**paradox**) → but bad things keep happening with no fix → they give up (**learned helplessness**) → a **nudge** (soft paternalism + enhanced active choice) makes the risk **salient** and easy to act on → it re-wakes them.

### ⚠️ The trap you must avoid (it was a question!)
Do **NOT** judge Shklovski (interpretivist) using positivist words like *"only 13 people, no statistical power, can't generalise."* That is **the wrong ruler**.
✅ Judge an interpretivist study by **credibility, transferability, reflexivity**. "Valid" depends on the worldview.

---

## 2. 🔴 Three waves of HCI (you got 0/1)

Think of HCI **growing up like a person**, in 3 stages:

| Wave | Stage | Where / how | Theory behind it | Keyword |
|---|---|---|---|---|
| **Wave 1** | The **machine** stage | Lab, experiments, measure speed & errors. One person + one computer. | Human factors, cognitive psychology | **"performance" / "human factor"** |
| **Wave 2** | The **work/group** stage | People working **together** at **work**. Field studies, ethnography. | Situated action (Suchman), distributed cognition, **activity theory** | **"CONTEXT"** (the #1 wave-2 word) |
| **Wave 3** | The **everyday-life/feelings** stage | Home, fun, culture, emotion, **in-the-wild**, **non-work** | Aesthetics, emotion, experience ("felt life"), cultural probes (Dunne & Raby) | **"experience / everyday life"** |

*Imagine:* baby (wave 1) only cares about doing tasks fast → kid at school (wave 2) learns to work with others → teenager (wave 3) cares about feelings, fun, and life.

### ⚠️ Two traps (both were in your question!)
1. **A study can mix waves.** The privacy-nudge paper = **wave-3 *concern*** (everyday-life privacy) but **wave-1 *method*** (counts, regression, cause-effect). Say *both*.
2. **"Field study" does NOT mean wave 2.** Wave 2 is specifically about **WORK / groups**. Everyday personal life = wave 3, even in the field.

---

## 3. 🟠 Quantitative analysis (you got 1/3)

### p-value (the most-asked one)
**p = "If there was really NO difference (H0 true), how often would I see data this surprising?"**
- Small p (e.g. < .05) → "this would be rare if nothing's going on" → **reject H0** (there IS a difference).
- ❌ p does **NOT** tell you how **big** the effect is.
- ❌ p is **NOT** "the chance I'm right" or "the chance it was luck."
👉 Always report **effect size** (like *r* or *d*) separately to show *how big* the difference is.

### Shapiro-Wilk test (normality) — the backwards one!
The null says **"the data IS normal."** So:
- **p < .05 → NOT normal** (reject "is normal"). *Yes, it feels backwards — remember it!*
- **p > .05 → normal (OK).**

### Which test do I use? (simple decision tree)
- **Comparing groups**, data is **continuous + normal** → **ANOVA** → then **Tukey** (to see which pairs differ).
- **Comparing groups**, data is **not normal / ordinal** → **Kruskal-Wallis** → then **Dunn**.
- **Relationship between two things** → **correlation**: **Pearson** (normal) or **Spearman** (not normal).
*Rule of thumb:* normal = parametric (ANOVA/t-test/Pearson). Not normal = non-parametric (Kruskal-Wallis/Mann-Whitney/Spearman).

### Cheating traps (scientific integrity)
- **p-hacking** — trying tricks until p < .05.
- **HARKing** — changing your hypothesis *after* seeing results (e.g. switching to a one-tailed test only because two-tailed just missed). Not allowed.
- **Many tests → must correct** with **Bonferroni** (strict) or **BH / Benjamini-Hochberg** (preferred in HCI). Reporting only the "good" 3 out of 7 tests = cheating.
- **Correlation ≠ causation.** *Imagine:* in summer, ice-cream sales AND drownings both go up. Ice cream doesn't cause drowning — **summer** (a hidden "confounding variable") causes both.

---

## 4. 🟡 Design principles (you got 1/2)

### The 3 principles (Beaudouin-Lafon & Mackay)
**Reification** — turn an idea/action into a **real object you can grab**.
*Imagine:* a "savings goal" (just an idea) becomes a **card you can drag** onto an account. Invisible thing → touchable thing.

**Polymorphism** — **ONE** command works on **MANY types** of objects.
*Imagine:* the **"Share"** button works on a song, an artist, or a playlist. Same action, different things.

**Reuse** — recycle past work to save effort. Two kinds:
- recycle **INPUT** = app gives back what you typed before (search history; "swap" your origin/destination).
- recycle **OUTPUT** = you **SAVE a result** to use again (save a route as **"Home → Work"**).

👉 Quick way to tell them apart:
- **Reuse** = about **TIME / history** (past → reused).
- **Polymorphism** = about **object TYPES** (one command, many types).
- **Reification** = about **making a thing you can manipulate**.

### Feedback vs Feedforward (a classic trap)
- **Feedback** = info **AFTER** you act → "here's what just happened."
- **Feedforward** = info **BEFORE** you act → "here's what *will* happen / *how* to do it."
*Example:* **Fieldward / OctoPocus** show gesture hints *before* you draw the gesture → helps you discover hidden gestures.
⚠️ Trap: feedforward is **NOT** a type of feedback, and it is **NOT** the same as Nielsen's "visibility of system status."

---

## 5. 🟡 Research contributions (you got 2/3) — Wobbrock & Kientz: 7 types

| Type | One line | Tiny example |
|---|---|---|
| **Empirical** | Facts from observing/experimenting — *what is true* | a lab study; data from questionnaires/ESM |
| **Artifact** | A new **thing you built** — *what is possible* | a new pointing device, a prototype |
| **Methodological** | A new **tool/method for HOW we do research** | a validated questionnaire (e.g. **User Burden Scale**) |
| **Theoretical** | A **model that predicts/explains** — *what we expect* | **Fitts' law** error model |
| **Dataset** | A useful **collection of data** shared for others | a labeled image set |
| **Survey** | A **review of EXISTING papers** (literature meta-analysis) | an ACM Computing Survey |
| **Opinion** | An **argument to change minds** | a "we should stop doing X" essay |

### ⚠️ The 4 traps (these were your questions!)
1. **"Survey" = surveying the LITERATURE**, NOT polling people. A questionnaire given to people = **empirical**.
2. **Building a system (artifact) ≠ studying a system (empirical).** Different contributions.
3. A **validated questionnaire tool** = **methodological** (the tool itself). The *findings* from using it = empirical.
4. A **model that predicts** (Fitts' law) = **theoretical**, NOT methodological. (Methodological = a "how-to" tool.)

---

## ⚡ 60-second memory hooks (read right before the exam)

- **Privacy:** paradox (say≠do) → fatigue (gave up) → nudge (gentle push, choice stays). Leak = data out, Creepy = the feeling. Altman = privacy is a *door*, not a wall.
- **Don't judge interpretivist work with positivist words** (use credibility/transferability/reflexivity).
- **Waves:** 1 = machine/lab/performance · 2 = work/groups/**context** · 3 = everyday life/feelings. Papers can **mix** waves.
- **p-value** = surprise *if H0 true*; small p = reject H0; p ≠ effect size. **Shapiro: p<.05 = NOT normal.**
- **Test pick:** normal = ANOVA(+Tukey); not normal = Kruskal-Wallis(+Dunn); relationship = correlation.
- **Design:** Reification = make it touchable · Polymorphism = one action, many types · Reuse = recycle (time/history).
- **Feedforward = BEFORE, Feedback = AFTER.**
- **Contributions:** Survey = read papers (not people). Build ≠ study. Tool = methodological, model = theoretical.
