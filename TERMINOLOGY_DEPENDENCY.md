# Terminology Dependency Map (precise edition)

> The goal: know **what each term is actually tied to**, so you never misfile a concept. The single biggest mistake is **collapsing independent axes into one** (e.g. assuming "within/between-subjects = lab"). It doesn't.
>
> **Read this first:** a study is described by **several independent choices (axes) at once.** You pick a point on *each* axis. They mostly don't force each other.

---

## 0. The independent axes (the mental model)

A single study = one choice on **each** of these, made (mostly) independently:

| Axis | The choice | Spectrum / options |
|---|---|---|
| **A. Setting** | Where it happens | **Lab ←——→ Field** (a *spectrum*, not binary) |
| **B. Design / purpose** | What kind of study | **Experiment** (controlled comparison) vs **non-experimental** (interview, survey, observation, usability test, probe) |
| **C. Subject assignment** | *only if it's an experiment* | **Within-subjects** vs **Between-subjects** |
| **D. Duration** | How long | **One-off ←——→ Longitudinal** |
| **E. Worldview** | What counts as valid knowledge | **Positivism ←——→ Interpretativism** |
| **F. Data — 3 sub-axes** | What the data *is* | Qualitative/Quantitative · Self-reported/Observed · Attitudinal/Behavioral |

**Why this matters:** "lab vs field" (A) is *not* the same as "experiment vs not" (B). You can have a **field experiment**, a **lab interview**, a **longitudinal experiment**, etc. The axes are orthogonal.

---

## 1. Axis A — Setting: the Control ↔ Realism spectrum

This is the spine most validity talk hangs off. It is a **spectrum**, not two boxes.

| | More CONTROL (lab end) | More REALISM (field end) |
|---|---|---|
| **You optimize for** | Control over the environment | Realism of use |
| **Validity it boosts** | **Internal validity** (trust the cause→effect) | **Ecological validity** (holds in real life) |
| **Core question** | *"Does my design **cause** this effect?"* | *"How do people **really use** this?"* |
| **Main risk** | Artificial → weak ecological validity | Confounds you can't control → weak internal validity |
| **You can claim** | "A caused B **in this setting**" | "This is how it behaves **in the real world**" |
| **How to slide toward realism** | — | simulate real context (e.g. fake GPS) **or** stop controlling a context (e.g. let people use their **own devices**, **own time**, **own place**) |

⚖️ **The trade-off (a tendency, not an iron law):** more control → ↑ internal validity but ↓ ecological validity. You can deliberately sit *in the middle* (a controlled-but-realistic field experiment).

---

## 2. Axis B & C — Design: what's tied to EXPERIMENTS (not to "lab")

These terms are tied to **experiments** — a study that *manipulates a variable to compare conditions*. **An experiment can be run in the lab OR in the field.** So none of these are "lab-only."

| Term | Tied to | Applies in the field too? |
|---|---|---|
| **Independent variable (IV)** = what you vary (cause) | Experiment | ✅ yes (field experiment) |
| **Dependent variable (DV)** = what you measure (effect) | Experiment | ✅ yes |
| **Levels** = the values an IV takes | Experiment | ✅ yes |
| **Within-subjects** = everyone does all conditions | Experiment → subject assignment | ✅ yes |
| **Between-subjects** = each group does one condition | Experiment → subject assignment | ✅ yes |
| **Order effects** (learning/fatigue from sequence) | **Within-subjects** specifically | ✅ yes |
| **Counterbalancing** (vary condition order) — the fix for order effects | **Within-subjects** specifically | ✅ yes |
| **Hypothesis (H₀ / H₁)** | Experiment (and quantitative studies) | ✅ yes |
| **p-value, effect size, statistical tests** | **Quantitative** analysis (usually experiments) | ✅ yes |

> ✏️ **Corrected rule:** within/between-subjects (and IV/DV, counterbalancing, etc.) are tied to **"there is a controlled comparison" (an experiment)** — which is *most common* in the lab but **not exclusive to it**. A **longitudinal between-subjects field experiment** is perfectly valid: it keeps a controlled comparison **while** gaining realism (and therefore trades away some internal-validity certainty as confounds creep in).

---

## 3. Validity — what each kind actually depends on

The three validities depend on **different axes**, which is why you must not lump them together.

| Validity | Depends on… | Boosted by | Hurt by |
|---|---|---|---|
| **Internal** | the **rigor of the comparison** (Axis B/C + A-control) | controlled conditions, counterbalancing, no confounds | order effects, confounds, uncontrolled field factors |
| **External** | the **sample** (who/what is represented) — *independent of setting* | a diverse, representative sample | a narrow sample (e.g. only CS students) |
| **Ecological** *(a special case of external)* | the **realism of setting & conditions** (Axis A + D) | real-life use, own devices, real contexts, longitudinal | artificial lab tasks, simulated-only conditions |

🔑 **Three precise truths people get wrong:**
1. **External validity is about the SAMPLE, not the setting.** A flawless field study with only 20-year-old students *still* has weak external validity.
2. **Ecological validity is a property of the RESULTS** ("do they hold in real life?"). A **field study is the *method* that usually raises it** — they correlate, they are **not the same thing**.
3. **Internal validity can be hurt in the field** precisely because you gave up control (confounds) — *even if* the design (within/between) is sound.

---

## 4. Axis D — Time, and Axis E — Worldview (both run independently)

### D. One-off ↔ Longitudinal (a TIME axis, separate from setting)
| | One-off | Longitudinal |
|---|---|---|
| What | single session | repeated / over weeks–months |
| Reveals | first impressions | **adoption over time**, real routines |
| Kills | — | **novelty effects** (the "ooh shiny" bias wearing off) |
| Pairs with | quick lab tests | usually **field** (e.g. Lifelines, DearBoard) — but not required |

### E. Positivism ↔ Interpretativism (decides *which validity vocabulary even applies*)
| | **Positivism** | **Interpretativism** |
|---|---|---|
| **Goal** | objective, generalizable, predict cause→effect | deep subjective understanding; propose new **concepts** |
| **Judged by** | **internal / external / ecological validity** | **credibility / transferability / reflexivity** |
| **Sample** | large, representative (to generalize) | **small is fine** (going deep, not wide) |
| **Data** | quantitative, statistics, p-values | qualitative, stories, themes (**no p-values**) |
| **Example** | Cookie-banner experiment | Leakiness & Creepiness |

- **Credibility** = interpretations well-grounded in the data.
- **Transferability** = described richly enough that the **reader** decides if it applies to their context.
- **Reflexivity** = researcher acknowledges their own subjectivity.

⚠️ **Worldview trap:** judging an *interpretativist* study with *positivist* rulers ("sample too small!", "where's the p-value?") is using the **wrong ruler**. Small N and no p-values are *correct* in interpretativism.

---

## 5. Axis F — Data dimensions (three independent classifications)

Every datum gets a label on **all three** sub-axes (they're independent — but with two locked rules).

| Sub-axis | Option A | Option B |
|---|---|---|
| **Form** | **Quantitative** (numbers, "how much") | **Qualitative** (text/video, "why/how") |
| **Source** | **Self-reported** (the user tells you) | **Observed** (you capture it) |
| **Subject** | **Attitudinal** (what they think/feel) | **Behavioral** (what they do) |

🔒 **Two locked dependencies (the only forced links here):**
- **Behavioral ⇒ always Observed** (but observed isn't always behavioral — e.g. battery level, heart rate).
- **Attitudinal ⇒ always Self-reported** (but self-reported isn't always attitudinal — e.g. your age, a story about what you did).

🔑 A datum is **one end of each axis** — it can't be "both self-reported and observed."

---

## 6. The master dependency table (everything, corrected)

| Concept | Tied to which axis | Lab-only? | One-line purpose |
|---|---|---|---|
| Internal validity | Comparison rigor (A+B/C) | no | trust that *design* caused the effect |
| External validity | **Sample** | no | generalize to other people/contexts |
| Ecological validity | **Realism of setting** (A+D) | no | generalize to real life |
| IV / DV / levels | **Experiment** (B) | **no** (field experiments exist) | manipulate cause, measure effect |
| Within / Between subjects | **Experiment → assignment** (C) | **no** | how conditions are assigned to people |
| Order effects + counterbalancing | **Within-subjects** (C) | no | sequence bias + its fix |
| Hypothesis / p-value / effect size | **Quantitative** (F-form) | no | statistical testing |
| One-off vs longitudinal | **Time** (D) | no | duration; longitudinal kills novelty effects |
| Novelty effects | reason for **longitudinal** (D) | no | new-toy bias fading |
| Positivism / interpretativism | **Worldview** (E) | no | which "valid" criteria apply |
| Credibility/transferability/reflexivity | **Interpretativism** (E) | no | how qualitative rigor is judged |
| Qual/Quant, Self-rep/Observed, Attitud/Behav | **Data** (F) | no | what the data *is* |
| Think-aloud, SUS, NASA-TLX | **Usability evaluation** (B, non-experiment) | usually lab, not required | measure effectiveness/efficiency/satisfaction |
| Interview, diary, ESM, thematic analysis | **Understanding users** (B, non-experiment) | no | capture real experience & meaning |
| Technology probe | **Field study** (A, B) | field | deploy simple system to inspire/understand |

---

## 7. Worked combinations (proof the axes are independent)

| Study | Setting (A) | Design (B/C) | Time (D) | Worldview (E) | Strong on | Weak on |
|---|---|---|---|---|---|---|
| Classic lab keyboard test | Lab | Within-subjects experiment | One-off | Positivist | Internal | Ecological/External |
| **Longitudinal between-subjects FIELD experiment** | **Field** | **Between-subjects experiment** | **Longitudinal** | Positivist | Ecological + decent internal (still a comparison) | Internal-certainty (confounds), needs many participants |
| Lifelines / DearBoard probe | Field | Non-experimental probe | Longitudinal | Lean interpretativist | Ecological | Internal (no controlled comparison) |
| Leakiness & Creepiness | Mixed | Interviews + survey | Longitudinal-ish | Interpretativist | Credibility/transferability | (positivist validity N/A — wrong ruler) |

> The middle row is exactly your insight: **between-subjects + longitudinal + field** = a controlled comparison **with** realism → you keep some internal validity *and* gain ecological validity, paying with reduced control (confounds) and more participants.

---

## 8. Two-line summary

> **Control (lab-leaning)** → protects **internal validity** → *"does my design CAUSE the effect?"* → IV/DV, conditions, p-values. Cost: ecological validity.
>
> **Realism (field-leaning)** → protects **ecological validity** → *"how do people REALLY use it?"* → field, longitudinal, own devices. Cost: internal-validity certainty (confounds).
>
> …and **experiment-vs-not**, **time**, **worldview**, and **data type** are **separate dials** you set independently.

---

## 9. "Which study do I run?" decision guide

| If my goal is… | Run… | Because I care about… |
|---|---|---|
| Prove design A beats B | Experiment (lab, or controlled field) | internal validity, isolating cause |
| See if people adopt it in real life | Longitudinal field study/probe | ecological validity, real behavior over time |
| Understand *why* users feel something | Interviews (interpretativist) | credibility, transferability — deep meaning |
| Check if a UI is usable | Usability study (think-aloud, SUS/NASA-TLX) | effectiveness, efficiency, satisfaction |
| Discover new design opportunities | Field study / technology probe | rich, forward-looking insight |
| Compare designs *and* keep realism | **Longitudinal field experiment (within/between)** | both — accepting some lost control |
