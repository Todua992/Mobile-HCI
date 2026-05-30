# Terminology Dependency Map

> Where each concept "lives" and what each study type is looking for. The whole thing hangs off **one spine: Control ←→ Realism.** Use this to stop mixing terms up.

---

## 1. The Control ↔ Realism spine

| Dimension | ⬅️ LAB / CONTROL side | FIELD / REALISM side ➡️ |
|---|---|---|
| **Study type** | Lab study / controlled **experiment** | **Field study** (often a **technology probe**) |
| **You're optimizing for** | **Control** | **Realism** |
| **Validity you protect** | **Internal validity** (cause→effect is trustworthy) | **Ecological validity** (generalizes to real life) + helps **external** |
| **What you're looking for** | *"Does my design **cause** this effect?"* (compare designs, isolate variables) | *"How do people **really use** this in their lives?"* (adoption, real behavior, needs) |
| **Main risk** | Artificial setting → **low ecological validity** | Uncontrolled factors (confounds) → **low internal validity** |
| **What you can claim** | "A caused B **in this controlled setting**" | "This is how it behaves **in the real world**" |
| **Example studies** | CommandBoard / Fieldward-Pathward experiments; Cookie-banner experiment | Lifelines, DearBoard, Leakiness & Creepiness |

---

## 2. What lives on each side (the dependency map)

| Concept | Lives mostly on… | Why / what it's for |
|---|---|---|
| **Independent / Dependent variable, levels** | **Lab / experiment** | You only "vary an IV and measure a DV" when you control conditions |
| **Within / Between subjects** | **Lab / experiment** | How you assign **conditions** — only relevant with controlled conditions |
| **Order effects + counterbalancing** | **Lab / experiment (within-subjects)** | A control problem + its fix |
| **Hypothesis (H₀/H₁), p-value, effect size** | **Lab / experiment (quantitative)** | Statistical testing of a controlled comparison |
| **Internal validity** | **Lab / control** | Strengthened *by* control |
| **Ecological validity** | **Field / realism** | Strengthened *by* real-life setting |
| **External validity** | **Both** (it's about the *sample*, not the setting) | A narrow sample hurts it whether lab OR field |
| **One-off vs longitudinal** | **Time axis** (separate from lab/field) | Longitudinal = see adoption over time |
| **Novelty effects** | **Why you go longitudinal** | A one-off session can't show novelty wearing off |
| **Realism techniques** (simulate context e.g. fake GPS; or *don't* control context e.g. own devices) | **Field / realism** | How you *add* realism |
| **Think-aloud, SUS, NASA-TLX** | **Lab / usability evaluation** | Evaluating usability under controlled tasks |
| **Interviews, diary studies, ESM, thematic analysis** | **Field / understanding users** | Capturing real experience & meaning |

---

## 3. ⚠️ Key nuances (the traps)

- **Ecological validity ≠ field/longitudinal by definition.** Ecological validity is a *property of the results* (do they hold in real life?). A **field study is the *method* that usually boosts it** — they correlate, they're not the same thing.
- **External validity is about the *sample*, not the setting.** A perfect field study can *still* have bad external validity if everyone's a 20-year-old student. Don't file it purely on the "field" side.
- **One-off vs longitudinal is a *separate axis* (TIME)** from lab vs field (SETTING). Most combinations exist; **longitudinal + field** is the classic "realism" pairing (Lifelines, DearBoard).
- **You CAN collect quantitative data in a field study** (usage logs). Leaving the lab does *not* mean losing numbers — it means losing **control**.

---

## 4. The other independent axis: WORLDVIEW

This sits *underneath* the whole thing — it decides *which validity vocabulary even applies*.

| | **Positivism** | **Interpretativism** |
|---|---|---|
| **Goal** | Objective, generalizable, predict cause→effect | Deep subjective understanding, propose concepts |
| **Judged by** | **Internal / External / Ecological validity** | **Credibility / Transferability / Reflexivity** |
| **Sample** | Large, representative (to generalize) | Small is FINE (going deep, not wide) |
| **Data** | Quantitative, statistics, p-values | Qualitative, stories, themes (no p-values) |
| **Example** | Cookie-banner experiment | Leakiness & Creepiness |

⚠️ **Trap:** judging an *interpretativist* study by *positivist* rulers ("sample too small!", "where's the p-value?") is using the **wrong worldview's ruler**. Small samples and no p-values are *appropriate* in interpretativism.

---

## 5. Two-line summary to memorize

> **Lab / Control** → protects **internal validity** → answers *"does my design CAUSE the effect?"* → uses IV/DV, conditions, p-values. **Cost: low ecological validity.**
>
> **Field / Realism** → protects **ecological validity** → answers *"how do people REALLY use it?"* → uses field/longitudinal, real devices. **Cost: low internal validity.**

---

## 6. Quick decision guide — "which study do I run?"

| If my goal is… | Run… | Because I care about… |
|---|---|---|
| Prove design A beats design B | **Lab experiment** | internal validity, isolating cause |
| See if people adopt it in real life | **Longitudinal field study** | ecological validity, real behavior over time |
| Understand *why* users feel something | **Interviews (interpretativist)** | credibility, transferability — deep meaning |
| Check if my UI is usable | **Usability study** (think-aloud, SUS/NASA-TLX) | effectiveness, efficiency, satisfaction |
| Discover new design opportunities | **Field study / technology probe** | rich, forward-looking insight |
