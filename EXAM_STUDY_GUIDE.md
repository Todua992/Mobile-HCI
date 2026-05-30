# Mobile HCI — Complete Exam Study Guide

> Everything you need to know to hit the top grade. Built from the official **"List of concepts and topics"** in the exam PDF, with definitions + concrete examples drawn directly from the lectures and seminar papers, plus a per-paper cross-reference.

**Top-grade tip from the examiners:** an excellent performance *proactively weaves concepts together* — e.g. when asked about modalities, also reflect on interaction qualities; when asked about methods, also reflect on data types and validity. Define every concept clearly **and** apply it to your chosen paper and your own design idea.

---

## 0. Exam format (so you know what the concepts are *for*)

- **Oral exam:** 6-minute presentation + 9-minute Q&A (15 min total).
- **Part 1 — presentation (~4 min paper + ~2 min your idea):**
  - Paper: research problem & motivation, key design idea (if any), user study methods, main findings + design implications.
  - Your idea: applying the paper's takeaways to improve a mobile technology (existing tech, new idea, or your semester project).
- **Part 2 — discussion (9 min):** questions on *any* course concept. Be ready to **define** concepts and **apply** them.
- **The 7 example Q&A themes** (use them as rehearsal prompts):
  1. Mobile design challenges addressed / unaddressed by your paper/idea.
  2. Interaction design principles — explain 1–2 and how they apply.
  3. Modalities & context — which input/output modalities, why appropriate, where inappropriate.
  4. Interaction qualities — define the three, which are improved/neglected.
  5. Context of use — where it works well vs. badly, and why.
  6. Data types & methods — classify the study's data, strengths/limits, alternatives.
  7. Study design for your idea — goal, data, methods, procedure, rationale.

---

## 1. General Mobile HCI concepts

### Interaction design (practice) vs. HCI research
- **Human-Centred Design (HCD) practice:** goal is to build *one* good, usable product for a specific context/users. *Adapts to constraints.* Example: usability-testing Wolt's delivery-status screen.
- **HCI research:** goal is to generate *generalizable knowledge* that informs future systems beyond one product. *Challenges constraints* ("what if it were different?"). Example: studying how interruptions affect mobile interaction to derive principles for notification design across apps.
- **Why it matters:** research expands "what's even possible," drives innovation (patents), and shapes tech 5–10 years ahead.

### Human-centred design process (Benyon)
A cycle of four activities: **Understanding** (user needs, contexts) → **Envisionment** (storyboards, low-fi prototyping) → **Design** (UI, interaction, conceptual design) → **Evaluation** → back to understanding.

### HCI research process (Mackay & Fayard triangulation)
Three interacting strands: **Theory** (design principles) ↔ **Artifacts** (designs/prototypes) ↔ **Empirical studies** (interviews, experiments, field studies). HCI is **multidisciplinary** (CS, engineering, design, psychology, sociology, anthropology…).

### Usability (ISO definition)
"The **effectiveness, efficiency, and satisfaction** with which specified users achieve specified goals in particular environments."
- **Effectiveness:** accuracy & completeness of achieving goals.
- **Efficiency:** resources expended relative to accuracy/completeness.
- **Satisfaction:** comfort & acceptability of use.

### Evaluating usability — two method families
- **Empirical methods:** collect/analyse real observations or measurements (e.g. usability study with **think-aloud protocol**, **standardized questionnaires** SUS / NASA-TLX).
- **Analytical methods:** expert inspection without users (e.g. **Nielsen's 10 heuristics**).

### Three waves of HCI (Bødker; L1 table)
The field's *concerns* evolved over time:

| | **First wave** | **Second wave** | **Third wave** |
|---|---|---|---|
| **Main concern** | Human performance, efficiency, error reduction | Interaction in social & organizational context | Experience, meaning, culture, everyday life |
| **View of user** | Information processor, individual operator | Social actor embedded in practices | Experiencing, meaning-making person |
| **Typical context** | Lab, workstation, task-focused | Workplaces, groups, real-world | Homes, public spaces, personal & social life |
| **Main methods** | Controlled experiments, usability tests | Field studies, ethnography, participatory design | In-the-wild studies, cultural probes, research-through-design, mixed methods |
| **Generalization** | Universal laws, replicable findings | Transferable insights in similar contexts | Situated understanding, conceptual/theoretical transfer |
| **Example mobile Q** | How fast/accurately can users tap targets while walking? | How do messaging apps support family coordination? | How do smartphones shape people's sense of presence/wellbeing? |

- **Bødker's argument ("When 2nd wave meets 3rd wave"):** the 3rd wave broadens use *context* and *application types* beyond work into homes/everyday life/culture, adding emotion, experience, meaning. Key 3rd-wave challenge topics: **multiplicity, context, boundaries (work/non-work blurring), experience, participation.** 2nd-wave theory (situated action, distributed cognition, activity theory) still contributes.

### Challenges of designing for mobile interaction (L2)
- **Reduced screen real estate** → less room for content/menus → discoverability issues.
- **Occlusion & "fat finger" problem** → finger covers the content it touches.
- **Variable contexts of use** → interruptions and **situational impairments** (e.g. can't type with cold hands).
- **Limited input expressiveness** → no mouse precision or keyboard combinatorics → narrow range of inputs (tap, double-tap, swipe…) overloaded with many commands.
- (Also: interruptions, divided attention, mobility/movement.)

---

## 2. Interaction qualities

> **The aspect (quality) of interaction we want to improve with an interaction technique.** Be ready to define these three (exam Q4).

- **Discoverability:** how to help users *discover* available but hidden interactions/commands (e.g. gestures that aren't visible).
- **Efficiency / Performance:** how to help users perform tasks *faster* or with *fewer errors*.
- **Expressiveness (input expressiveness):** how to *increase the range* of available input possibilities (richer set of commands/expressions).

(Lectures also mention these as a non-exhaustive list — "and more!" — so you can argue for additional qualities like learnability or memorability if relevant.)

---

## 3. Interaction techniques & modalities

### Interaction technique
**Technology-*dependent* method for performing (often generic) interaction tasks** (typing, pointing, selecting). Each technique relies on one or more **sensing technologies** to combine **input + output (feedback) modalities** to perform an **interaction task**. (Contrast with *design principles*, which are technology-*independent*.) Examples: TapType, around-device touch on smartwatches.

### Modality (key definition)
**A structured communication channel between a human and an interactive technology, characterized by a specific human expressive or perceptual capability.**

- **Input modalities:** single touch (tap), multi-touch (pinch), touch gestures (swipe), pressure/force touch, voice/audio, motion (shake), pen/stylus, text, mid-air/body gestures, lip reading, sign language, eye gaze, object recognition…
- **Output modalities:** visual, auditory, haptic…
- **Interaction tasks:** select, point, text entry, display commands, select/execute command, scroll/navigate, zoom…
- **Sensing technologies:** camera (front/back/360), capacitive touch, pressure/force sensing, microphone, accelerometer/gyroscope, physical & touchscreen keyboards, infrared sensors, radio frequency (NFC)…
- **Multimodal interaction:** combining several modalities (Turk, 2014).

---

## 4. Design principles

> **Technology-*independent* strategies for describing and generating interactions.** (Exam Q2.)

**Reification, polymorphism, reuse** (Beaudouin-Lafon & Mackay) — three principles for simple but powerful interactions:

- **Reification:** turning an abstract concept or action into a concrete, *manipulable object* in the interface (you can then interact with/modify it). Examples: highlights become highlight objects (Preview); web "come back later" becomes a **tab** object (Chrome); a group of apps becomes a named **app group**; a transaction becomes an editable object (Lunar). A reified object can even become the *input* to another command (drag a savings goal onto an account = "withdraw").
- **Polymorphism:** allowing the *same command* to affect *different types of objects*. Examples: "Share" works on songs/artists/playlists; WhatsApp reactions work on texts/stickers/pictures/voice messages; "Remove" works on apps *and* app groups. Counter-example: "Uninstall" is **not** polymorphic (apps only).
- **Reuse:** recycling past interactions to optimize future actions. Two flavours:
  - *Recycling input* — recent search history; Google Maps "swap" origin/destination.
  - *Recycling output* — saving a route as a shortcut (Home→Work); saving a chosen colour as a swatch; reusing a ChatGPT response as the next prompt's input.

- **Feedforward** (L4): a design principle for providing guidance/hints/information *before* executing a command, so users understand what will happen / how to act — "feedback about future actions." Examples: **Pathward** (shows candidate gesture paths, red = collides, blue = recognizable), **Fieldward** (colour gradient of optimal gesture directions), OctoPocus.

### Nielsen's 10 usability heuristics (analytical evaluation)
1. Visibility of system status
2. Match between system and the real world
3. User control and freedom
4. Consistency and standards
5. Error prevention
6. Recognition rather than recall
7. Flexibility and efficiency of use
8. Aesthetic and minimalist design
9. Help users recognize, diagnose, and recover from errors
10. Help and documentation

(Exercise framing: how do these apply to *mobile* contexts, and what mobile-specific challenges aren't explicitly covered?)

---

## 5. Contexts of use

> **Context of use (ISO 13407, 1999):** "user characteristics, task, as well as technical, physical, and social environment." Mobile tech can be used under *many* contexts — an opportunity (do tasks anywhere) and a challenge (designers can't assume the context). (Exam Q3, Q5.)

The five **types of context** (memorize all five):

- **Physical:** apparent features of the situation — location/altitude, physical objects, orientation, weather/lighting, mobility/movement, the user's body and its capabilities/limitations (finger range, vision, hearing). E.g. context-aware app showing info based on geographic location.
- **Temporal:** the interaction in relation to time — duration, time of day/week/season, situation before/after use, synchronism (real-time vs asynchronous), time available; actions classed as hurried / normal / waiting.
- **Task:** surrounding tasks relative to the user's task — multitasking, interruptions, task domain; work vs leisure; **primary vs secondary** tasks; **foreground vs background** interaction. About demands on attention.
- **Social:** other people present, their roles/characteristics, interpersonal interactions, surrounding culture, traditions, privacy, relationships, others' behaviour influencing the user.
- **Technical:** other relevant systems/services — devices, apps, networks, interoperability, sensors, infrastructure, mixed reality. E.g. Pokémon Go uses GPS, multitouch, step counter, and extends via Bluetooth (Pokémon Go Plus).

---

## 6. User study design & evaluation concepts

### Evaluation vs. user research vs. "user studies"
- **Evaluation:** verifying whether a UI meets a design goal (efficiency, effectiveness, usefulness). Results are *simple/conclusive* ("the UI is efficient enough").
- **User research:** discovering user needs & opportunities for *novel* designs. Results are *rich/forward-looking* (needs, reasons, workarounds).
- **User studies** = umbrella term: research studies about how people use technology. Diverse goals: evaluate usability, understand needs/behaviour, compare design alternatives (experiments), understand adoption/real-world use (field studies), **discover new opportunities for design** (most common, cross-cutting goal).

### Types of studies & key dimensions
- **Lab studies vs. field studies:**
  - *Lab:* tasks-with-instructions, software in isolation, controlled environment, social isolation, used within a timeframe. **Controls the context of use.**
  - *Field/Real life:* on-demand tasks, software within a digital ecology, unexpected environment, social settings, used when needed.
- **One-off vs. longitudinal studies:** single session vs. repeated/over-time (e.g. a one-month field study) — longitudinal captures adoption, novelty wearing off, real routines.
- **Experiments** (see §7).
- **Usability study with think-aloud protocol;** **standardized questionnaires** (SUS, NASA-TLX).
- **Technology probe:** a deployed, deliberately simple/open-ended system used in the field to *understand* users and inspire design (e.g. **Lifelines**), not to "evaluate usability."

### Experiments — core vocabulary (L4)
An **experiment** compares two or more designs under the same **performance measure** (errors) or **experience measure** (frustration) to find a **cause–effect relationship**: *does this design cause this effect on the user's performance/experience?*

- **Hypothesis:** the predicted relationship (e.g. "users pick colours more accurately with Picker A than B").
- **Independent variable (IV):** the condition you *vary* across trials (the "cause"; e.g. Color Picker A vs B). Its values are **levels** (level "A", level "B").
- **Dependent variable (DV):** the aspect of performance/experience you *measure* (the "effect"; e.g. time, accuracy, errors).
- **Task:** what the participant does (e.g. "drag the cursor to find the target colour as fast and accurately as possible").
- **Trial:** one execution of the task by a participant.
- **Between-subjects design:** different groups of participants each see *different* conditions.
- **Within-subjects design:** all participants are exposed to *all* conditions.
- **Order effects:** the order in which conditions are experienced biases results (e.g. learning from an earlier technique helps a later one). Mitigate by **counterbalancing** condition order, or use between-subjects.
- **Novelty effects:** behaviour driven by the newness of a technology rather than its lasting value (a reason to run longitudinal/field studies).
- **Pilot studies:** small trial runs to refine the experiment design before the real study.
- **Experiments also reveal qualitative insight** about *why/how* users think — not only "which design wins."

### Control vs. Realism (L6)
Lab↔field is a **spectrum between control and realism**:
- *More control* → results are more likely *caused by your design* (fewer external factors).
- *More realism* → results better reflect *how people actually behave* in real life.
- **Increase realism by:** (1) *simulating* realistic contexts (e.g. faking GPS to simulate location changes); (2) *not controlling* certain contexts (e.g. letting participants use their own devices).
- You can map control↔realism across each context type (physical/social/temporal/technical/task): e.g. pre-set devices (control) vs own devices (realism); fixed times vs whenever they want; assigned partners vs whoever they want.

### User study protocol — what to define
- **Study goal & motivation** (identify needs? compare designs?).
- **Participants:** inclusion/exclusion criteria, recruitment methods, target population.
- **Procedure** (steps, sessions, timeline).
- **Data needed** (qualitative? quantitative?) and **data collection methods**.
- **Analysis methods** (statistical analysis / qualitative analysis).
- **Implications for design** (what the findings mean for designing future systems).

---

## 7. Types of data (and how they relate)

> Be able to *classify* a study's data along all three axes (exam Q6 / Prep Assignment 2).

### Qualitative vs. Quantitative
- **Quantitative:** numerical measurements (time, counts, ratings). Answers "how many / how much." Continuous (completion time), discrete (number of errors), interval (1–10 difficulty rating). Predominant in surveys/experiments.
- **Qualitative:** qualities/characteristics not measured numerically — text, images, video. Answers "why/what/how." Nominal/categorical (gender, favourite service), open-ended answers, observational notes.

### Self-reported vs. Observed
- **Self-reported:** explicitly reported by participants — surveys, interviews, diary studies.
- **Observed:** obtained directly by researchers — direct observation, logged/usage/system logs.

### Attitudinal vs. Behavioral
- **Behavioral:** what users *do* — video/screen recordings, usage logs, direct observation.
- **Attitudinal:** users' *internal states* — what they think, feel, perceive, expect, value, believe — interviews, surveys, diary studies.

### The conceptual relationships (a favourite exam point)
- **Behavioral data is always observed**, but not all observed data is behavioral (e.g. battery level, heart rate, observed physical-context descriptions).
- **Attitudinal data is always self-reported**, but not all self-reported data is attitudinal (e.g. demographics; self-reported *accounts of behaviour*; descriptive context data like when/where/which device).

### Data collection methods
Interviews (unstructured / **semi-structured** / focus group), questionnaires/surveys, diary entries, **Experience Sampling Method (ESM)**, usage/logged measures, observation notes, audio/video recording.

### Measurement scales (quant lecture)
- **Nominal:** categories, no order (country, group CG/PA/PPA) → mode, counts, chi-square.
- **Ordinal:** ordered, unequal spacing (education level, low/med/high) → median, Kruskal-Wallis.
- **Interval:** equal spacing, no true zero (temperature, year) → mean, SD, t-test, ANOVA.
- **Ratio:** equal spacing + true zero (weight, cookies accepted) → all statistics.

---

## 8. Worldviews & validity (L8)

> Know the *worldview* behind a paper (and your own) — otherwise you may wrongly call insights "invalid" when they come from a different perspective. (Prep Assignment 3.)

### Positivism vs. Interpretativism
- **Positivism:** aims for **generalizable, objective** findings — explain/predict phenomena, find cause–effect, "universal laws." Good research = generalizable, variability controlled, biases compensated. Validity framed as internal/external/ecological.
- **Interpretativism:** aims for **in-depth, subjective understanding** — how people create/interpret/experience their realities, the *meaning* of behaviour; proposes new *concepts* (e.g. "leakiness/creepiness") rather than predicting behaviour.

### Validity within a positivist worldview
- **Internal validity:** do the results trustworthily answer the research questions/goals? (e.g. an experiment that ignores order/learning effects is internally weak.)
- **External validity:** do results generalize to *other contexts* (populations, tasks, devices, cultures)? (e.g. all-male sample → can't claim it applies to everyone.)
- **Ecological validity:** (special case of external) do results generalize to *real-life* settings? (e.g. simulated websites ≠ real browsing pressure.)

### Rigor within an interpretativist worldview
- **Credibility:** interpretations are coherent and clearly grounded in the data (not "disconnected").
- **Transferability:** findings described richly enough that *readers* can judge whether they help understand other contexts (reader decides, not the authors).
- **Reflexivity:** researchers acknowledge their *subjectivity* — how their backgrounds/values shape interpretation.

### Bias (relevant to validity)
- **Social desirability / participant bias:** participants behave more "properly" (e.g. more privately) when observed; mitigate with unsupervised/online settings.
- **Demand characteristics:** participants guess the study's aim and act as a "good participant."

---

## 9. Quantitative data analysis (guest lecture)

> One pipeline: **research question → hypothesis → data → test → report.** Always do descriptives *first*; report **effect sizes** alongside p-values.

### Hypotheses
- **H₀ (null):** no effect exists (what the test tries to disprove).
- **H₁ (alternative):** an effect exists (your prediction); can be **directional (one-tailed)** ("PPA accepts fewer cookies than CG" — stronger, more power, needs strong prior evidence) or **non-directional (two-tailed)** ("groups differ" — more conservative, the default).
- **Operationalise:** translate the question into IV(s), DV(s), and measures.

### Descriptive statistics (summarise the sample; do NOT generalise)
- **Mean** (average; sensitive to outliers), **Median** (middle; robust to skew), **SD** (spread around mean), **IQR** (spread around median). Always visualise first (boxplot, histogram).

### Inferential statistics (generalise to the population)
- **p-value:** probability of observing data this extreme *if H₀ were true*. p < .05 → reject H₀. It does **not** prove the effect is real, says nothing about effect size, and "non-significant ≠ H₀ true" (could be underpowered).
- **α level (Type I error rate):** false-positive tolerance, set *before* data collection (convention .05).
- **Statistical power (1−β):** chance of detecting a true effect (target .80); low power → false negatives. Used with effect size to compute sample size (paper: d=.5, α=.05, power=.80 → N=157).
- **Effect size:** magnitude of effect (Cohen's d: .2 small / .5 medium / .8 large; η² eta-squared: .01/.06/.14; r). Report it because **statistical significance ≠ practical importance.**
- **Normal distribution:** bell-shaped, symmetric, described by mean μ & SD σ. **Parametric tests assume normality**; check via inspection + `shapiro.test()`.

### Choosing a test
- **Parametric (assume normality):** independent-samples **t-test** (2 groups, 1 continuous DV; Cohen's d), **one-way ANOVA** (3+ groups; F-statistic; post-hoc **TukeyHSD**; η²).
- **Non-parametric (use ranks; for non-normal/ordinal):** **Mann-Whitney U** (2 groups), **Kruskal-Wallis** (3+ groups) with **Dunn's post-hoc test** — *this is the test the cookie-banner paper actually uses*.
- **Correlation:** **Pearson** (assumes normality) / **Spearman** (rank-based, robust). r ∈ [−1, +1].
- **Regression:** simple/multiple **linear regression** — β (slope), R² (variance explained); multiple regression's β = effect *controlling for* other predictors.

### Integrity pitfalls
- **HARKing:** Hypothesising After Results are Known — inflates false positives; always write H₀/H₁ *before* data (pre-registration prevents it).
- **p-hacking:** running many tests, reporting only significant ones; report *all* tests.
- **Multiple-comparison correction:** running many tests inflates false positives (3 tests ≈ 14% chance of ≥1). Correct with **Bonferroni** (conservative) or **Benjamini-Hochberg (BH)** (controls false discovery rate; used in the paper).
- **Correlation ≠ causation:** a correlation may be A→B, B→A, or a **confounding variable C** causing both (ice cream & drowning ← hot weather).

### Reporting (APA style)
Report: test name + statistic, df, p-value, group medians/means, **effect size**, and correction method. Example: *"A Kruskal-Wallis test revealed a significant difference… χ²(2) = 43.73, p < .001. Post-hoc (Dunn, BH)… PPA (Mdn = 65) accepted significantly fewer cookies than CG (Mdn = 231; Z = 6.51, p < .001, r = .52)."*

---

## 10. Mobile communication (L6)

- **Media Richness Theory:** richer, more personal media are generally more effective for *complex* messages than leaner media. (Question: in text-based collaborative tasks, does richness affect performance & UX?)
- **Social presence / co-presence:** the sense of "being together" in the same space; platforms vary in how much they support "being with another" vs face-to-face.
- **Selective self-presentation:** how people *leverage the limitations* of a medium to shape how others view them. (Richer media can raise social presence but *limit* selective self-presentation — a key tension.)
- **Typing indicators example** (Iftikhar et al.): masked vs live vs no typing indicator. Live-typing felt more communicative and raised social presence, but users worried it limited selective self-presentation in everyday life.

---

## 11. Digital ecosystems / ecologies (L7)

- **Digital / artifact ecology:** personal collection of technological artifacts (devices, apps, systems) used *together*; experience with one artifact can't be fully understood in isolation — scope ecologies by **user activity** ("what artifacts are involved in this activity?").
- **Multi-device ecologies:** e.g. smartwatch's role *within* a multi-device ecology (Cecchinato et al.).
- **Walled gardens:** apps that *bundle contacts + functionality* so users of one app can't reach users of another or access another app's functionality (typical of messaging apps). People use multiple apps to reach diverse contacts and access diverse functionality (richer expression / better privacy).
- **Expression breakdowns:** interruptions to conversation flow when a user needs functionality from *another* app to express their message as desired; customizable expressions of one app shape expectations of others.
- **Customization & co-customization:** users customize apps to express **personal identity** (e.g. Nyan-cat theme) and **intimacy** in close relationships (e.g. shared bike emoji). **DearBoard** = a *co-customizable* keyboard letting partners share a colour theme + emoji/GIF shortcuts across any app ("carry your communication tools with you" across apps). Different **co-ownership strategies** emerged (e.g. pink/blue colour history of a long friendship).

---

## 12. Online privacy (L8)

- **Privacy paradox:** contradiction between users' *reported* privacy concerns and their *observed* behaviour (they worry about data access but don't read privacy policies — apps feel creepy but people use them anyway).
- **Personal space:** a boundary around a person; intrusion is uncomfortable/not permitted — intrusions = privacy violations.
- **Territoriality / territorial behaviour:** entry into a primary territory needs permission; trespass triggers strong emotional/physical responses.
- **Altman's privacy regulation theory:** privacy as a *process* of selectively adjusting access to oneself by controlling information disclosed/received (ongoing revealing & concealment).
- **Smartphones as extensions of the self:** phones expand personal space (projecting/constructing the self); intrusion feels like a personal-space/privacy violation (people reluctant to share their phone even with close friends).
- **Privacy fatigue / learned helplessness:** repeated privacy invasions + a conviction that *there's no recourse* → people stop responding to invasions *even when given ways to defend themselves*. (Proposed as a new explanation of the privacy paradox; warning: could be misused as a **dark pattern**.)
- **Leakiness & creepiness:** apps "leak" data to third parties beyond what their purpose justifies (Fruit Ninja/Flashlight selling data to ad/analytics companies) → feel "creepy."
- **Privacy nudging:** prompts/feedback (e.g. "Your location has been shared 5,398 times") to raise awareness and shift behaviour (Almuhimedi et al.; Balebako et al.).

---

## 13. Accessibility & multimodal interaction (L9)

- **Permanent impairment:** a lasting condition (e.g. blindness, one arm).
- **Temporary impairment:** a short-term condition (e.g. arm in a cast, eye infection).
- **Situational impairment:** context induces a temporary limitation (e.g. can't hear in a loud bar, can't type with cold hands, holding a baby) — central to mobile use.
- **Microsoft Inclusive Design** framing: design for the full **persona spectrum** (permanent → temporary → situational); "solve for one, extend to many."
- **Multimodal interaction & accessibility examples:** WalkType (accelerometer data to accommodate situational impairment in walking text-entry); emoji accessibility for screen-reader users (Party Face); ProgramAlly (multi-modal end-user programming for custom visual access).

---

## 14. The 7 (8) HCI research contribution types (Wobbrock & Kientz)

> Useful for Part 1 (classify your paper's contribution) and Q&A.

1. **Empirical:** new knowledge from observation/data (experiments, user tests, field studies, interviews, surveys, diaries, ethnography, logs). *Judged on importance of findings + soundness of methods.* (CHI split this into "study of system use" and "study of people.")
2. **Artifact:** new interactive artifacts/prototypes — systems, architectures, tools, toolkits, techniques, sketches, mockups, envisionments. *Judged by what they make possible; techniques judged precisely/quantitatively for performance benefits.*
3. **Methodological:** new methods/measures/instruments that inform *how* we work. *Judged on utility, reproducibility, reliability, validity* (e.g. the User Burden Scale).
4. **Theoretical:** new/improved concepts, definitions, models, principles, frameworks, design spaces. *Judged on novelty, soundness, power to describe/predict/explain; should be testable/falsifiable* (e.g. Fitts' law).
5. **Dataset:** a new, useful, representative corpus for the community (often with benchmarks/tools). *Judged by usefulness/representativeness* (e.g. K-EmoPhone).
6. **Survey / meta-analysis:** review & synthesis of work on a topic, exposing trends and gaps. *Judged on completeness, depth, maturity, organization* (not a "laundry list").
7. **Opinion / essay / argument:** seeks to *persuade* (not just inform), compelling reflection/debate. *Judged on strength of argument, fair treatment of opposing views.*

(Related theory term seen in L1: **Fitts' law** — a quantitative/predictive model of pointing time as a function of target distance and size.)

---

## 15. Exam papers ↔ concepts cross-reference

| Lecture / theme | Paper | Key concepts to attach |
|---|---|---|
| **L6 Mobile Communication** | Iftikhar et al. — *"Together but not together": Typing Indicators* | media richness theory, social/co-presence, selective self-presentation, remote experiment, within/between subjects, IV/DV, NASA-TLX, quant vs qual findings (contradictory measures), control vs realism |
| L6 | An et al. — *EmoWear: Emotional Teasers for Voice Messages on Smartwatches* | output modalities (haptic/visual), affect/emotion, smartwatch context, ecological/external validity |
| L6 | Hassib et al. — *HeartChat: Heart-Rate-Augmented Chat* | sharing contextual streams (heart rate), connectedness, behavioral vs attitudinal data, empathy/awareness |
| **L7 Digital Ecosystems** | Griggio et al. — *Customizations & Expression Breakdowns* | artifact ecologies, walled gardens, expression breakdowns, customization for identity/intimacy, thematic analysis (inductive→deductive), interviews (power users) |
| L7 | Griggio et al. — *DearBoard: Co-Customizable Keyboard* | co-customization, co-ownership strategies, field study (1 month), self-reported vs observed/behavioral data, realism, COVID limitation |
| L7 | Chen et al. — *MessageOnTap* | suggestive interface, artifact contribution, quant vs qual |
| L7 | Cecchinato et al. — *Always On(line)? Smartwatches in Multi-Device Ecologies* | multi-device ecologies, attitudinal data, social context, qualitative quotes |
| **L8 Privacy** | Shklovski et al. — *Leakiness and Creepiness* | privacy paradox, personal space/territoriality, Altman's regulation, learned helplessness, longitudinal interviews + survey, think-aloud, interpretativist worldview, conceptual contribution |
| L8 | Balebako et al. — *"Little Brothers Watching You"* | data-leak awareness, ecological validity, social-acceptability/participant bias, statistical power as a validity limit |
| L8 | Almuhimedi et al. — *Your Location has been Shared 5,398 Times* (the **excluded** PDF) | privacy nudging, field study, behavior change — *not your presentation paper but fair Q&A material* |
| **L9 Accessibility** | Griggio et al. — *Party Face Congratulations (Emoji Accessibility)* | permanent impairment (screen-reader users), multimodal, design ideas, implications for design |
| L9 | Herskovitz et al. — *ProgramAlly* | multi-modal end-user programming, custom visual access, artifact contribution |
| L9 | Goel et al. — *WalkType* | situational impairments, accelerometer sensing, interaction technique, quantitative experiment |
| **L10 Quantitative Analysis** | Biselli, Utz & Reuter — *Personalised Cookie Banners* | dark patterns, informed consent, IV/DV, OPLIS, Prolific sampling, Kruskal-Wallis + Dunn (BH), effect size, SUS, demand characteristics, ecological validity |

---

## 16. Quick self-check checklist (can you define each, with an example?)

**Foundations:** interaction design vs HCI research · HCD process · usability (effectiveness/efficiency/satisfaction) · empirical vs analytical methods · three waves of HCI · 2nd-vs-3rd-wave challenges (multiplicity, context, boundaries, experience, participation) · multidisciplinarity · 7 contribution types · Fitts' law

**Mobile challenges:** screen real estate · occlusion / fat finger · variable contexts · limited input expressiveness · interruptions · situational impairments

**Interaction qualities:** discoverability · efficiency/performance · expressiveness

**Techniques & modalities:** interaction technique vs design principle · modality (definition) · input modalities · output modalities · interaction tasks · sensing technologies · multimodal interaction

**Design principles:** reification · polymorphism · reuse (recycle input/output) · feedforward · Nielsen's 10 heuristics

**Contexts of use:** physical · temporal · social · task (primary/secondary, fore/background) · technical

**Study design:** lab vs field · one-off vs longitudinal · evaluation vs user research · technology probe · experiment · hypothesis · IV/DV · levels · task · trial · between- vs within-subjects · order effects · novelty effects · counterbalancing · pilot study · control vs realism · study protocol · think-aloud · SUS · NASA-TLX · ESM

**Data:** qualitative vs quantitative · self-reported vs observed · attitudinal vs behavioral · (behavioral⇒observed; attitudinal⇒self-reported) · data collection methods · measurement scales (nominal/ordinal/interval/ratio)

**Worldviews & validity:** positivism vs interpretativism · internal/external/ecological validity · credibility/transferability/reflexivity · social-desirability bias · demand characteristics

**Quant analysis:** H₀/H₁ · directional vs non-directional · p-value · α · power · effect size (d, η², r) · normality · parametric vs non-parametric · t-test · ANOVA + Tukey · Kruskal-Wallis + Dunn · Mann-Whitney · Pearson/Spearman · regression (β, R²) · Bonferroni/BH correction · HARKing · p-hacking · correlation≠causation · APA reporting

**Communication:** media richness theory · social/co-presence · selective self-presentation

**Ecosystems:** digital/artifact ecology · multi-device ecology · walled gardens · expression breakdowns · customization · co-customization

**Privacy:** privacy paradox · personal space · territoriality · Altman's privacy regulation · phone-as-extension-of-self · privacy fatigue / learned helplessness · leakiness & creepiness · privacy nudging · dark patterns

**Accessibility:** permanent · temporary · situational impairments · inclusive design / persona spectrum · multimodal accessibility
