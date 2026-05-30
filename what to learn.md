# What To Learn — Mobile HCI (everything you must know to score 12)

> **The 12 bar (Danish scale):** "Excellent performance displaying a comprehensive command of the curriculum, with no or only a few inconsequential flaws."
> For this exam that means you can, *for any concept below*: (1) **define it precisely**, (2) **apply it** to the Almuhimedi paper AND your own idea, AND (3) **reflect critically** (trade-offs, limitations, alternatives, links to other concepts).
> **Examiner tip from the brief:** an excellent answer *proactively weaves concepts across questions* — e.g. mention interaction qualities while answering a question about modalities or study methods.

**How to use this file:** every bullet is a term you should be able to define in one sentence and give one example of. ✅ = you can define it *and* apply it to your paper + idea.

---

## 0. EXAM MECHANICS (don't lose easy points)
- [ ] 6-min presentation: ~4 min paper (problem & motivation → key design idea → study methods → findings/implications) + ~2 min your idea.
- [ ] 9-min Q&A on *anything* in the curriculum.
- [ ] Always name the concept explicitly ("This is a **within-subjects** design because…").
- [ ] For every claim about your idea, be ready for "how would you study/evaluate that?"

---

## 1. HCI AS A RESEARCH FIELD
- [ ] **Interaction design / HCD practice vs. HCI research** — practice = build a good usable product for a specific context (adapts to constraints); research = generate knowledge useful *across* contexts (challenges constraints, "what if it were different?").
- [ ] **Human-centred design process** — Understanding → Design → Envisionment → Evaluation (iterative).
- [ ] **HCI research process (triangulation)** — Theory ↔ Artifacts (designs/prototypes) ↔ Empirical studies feed each other.
- [ ] **HCI is multidisciplinary** — CS, design, psychology, sociology, anthropology, engineering.
- [ ] **Usability (ISO)** = effectiveness + efficiency + satisfaction for specified users/goals/contexts.
  - [ ] **Effectiveness** = accuracy & completeness of reaching goals.
  - [ ] **Efficiency** = resources spent relative to accuracy/completeness.
  - [ ] **Satisfaction** = comfort & acceptability.
- [ ] **Empirical vs. analytical methods** — empirical = observe/measure real users (usability test, experiment); analytical = expert inspection (Nielsen's heuristics).

### Three Waves of HCI (Bødker; lecture 1) — know all three columns
| | **1st wave** | **2nd wave** | **3rd wave** |
|---|---|---|---|
| Concern | performance, efficiency, error reduction | interaction in social/organizational context | experience, meaning, culture, everyday life |
| User as | information processor / operator | social actor in practices | experiencing, meaning-making person |
| Context | lab, workstation | workplaces, groups | homes, public spaces, personal/social life |
| Methods | controlled experiments, usability tests | field studies, ethnography, participatory design | in-the-wild, cultural probes, research-through-design, mixed methods |
| Generalization | universal laws | transferable insights | situated understanding, conceptual transfer |
- [ ] Bødker's 3rd-wave challenge themes: **multiplicity, context, boundaries, experience, participation**; "from human factors to human actors"; blurring work/non-work boundaries.
- [ ] Be able to place your paper: Almuhimedi mixes **1st-wave** measurement (counts, regression) on a **3rd-wave** everyday-life concern (privacy in daily life).

### Seven (Eight) Types of Research Contributions (Wobbrock & Kientz)
- [ ] **Empirical** — new knowledge from observation/data (experiments, interviews, field studies). *(CHI 2016 split into "study of system use" vs "study of people".)*
- [ ] **Artifact** — a new system/technique/tool/prototype/envisionment (design-driven invention).
- [ ] **Methodological** — a new method, measure, or instrument (e.g. a new questionnaire).
- [ ] **Theoretical** — new concepts, models, frameworks, design spaces (e.g. Fitts' law).
- [ ] **Dataset** — a new useful corpus for the community.
- [ ] **Survey** — literature review / meta-analysis exposing trends & gaps.
- [ ] **Opinion** — essay/argument that persuades.
- [ ] Classify Almuhimedi = primarily **empirical** (field study) + a smaller **artifact** part (the nudge design).

---

## 2. CHALLENGES OF DESIGNING FOR MOBILE INTERACTION (must be able to list + give examples)
- [ ] **Reduced screen real estate** → discoverability problems (less room for content/menus).
- [ ] **Occlusion & fat-finger problem** → finger covers the content; imprecise targets.
- [ ] **Variable contexts of use** → interruptions and **situational impairments** (e.g. too cold to type).
- [ ] **Limited input expressiveness** → few primitives (tap/swipe) overloaded with many commands.

---

## 3. INTERACTION QUALITIES, TECHNIQUES & MODALITIES
- [ ] **Interaction technique** = technology-*dependent* method for a task (typing, pointing, selecting); combines sensing tech + input/output modalities.
- [ ] **Modality** = a structured communication channel defined by a specific human expressive/perceptual capability.
- [ ] **Interaction qualities** (the "three" the exam wants) — *which quality of interaction an interaction technique improves*:
  - [ ] **Discoverability** — helping users find available but hidden interactions/commands (e.g. gestures).
  - [ ] **Efficiency / Performance** — doing tasks faster / with fewer errors.
  - [ ] **Expressiveness** — increasing the range of input possibilities / richness of expression.
- [ ] **Input modalities** — touch (single/multi), touch gestures (swipe), pressure/force, voice/audio, motion (shake), pen/stylus, **text**, mid-air/body gesture, eye gaze, object recognition, lip reading, sign language.
- [ ] **Output modalities** — **visual**, **auditory**, **haptic**.
- [ ] **Sensing technologies** — camera, capacitive touch, force sensing, microphone, accelerometer/gyroscope, GPS, NFC, infrared.
- [ ] **Interaction tasks** — select, point, text entry, display/execute command, scroll/navigate, zoom.
- [ ] Be ready to say *why a modality fits a context* and *one context where it would NOT* (e.g. speech leaks in a quiet social setting).

---

## 4. DESIGN PRINCIPLES (technology-*independent* strategies — define + give a mobile example for each)
- [ ] **Reification** — turn an abstract concept/action into a concrete, *manipulable object* (e.g. a browser "come back later" → a tab object; a group of apps → an app-group object).
- [ ] **Polymorphism** — the *same command* affects *different object types* (e.g. WhatsApp reactions work on texts, stickers, images, voice messages; "remove" works on apps AND app-groups).
- [ ] **Reuse** — recycle past interactions to optimize future ones; *recycling input* (recent-search history) or *recycling output* (saving a route Home→Work as a shortcut; a colour swatch).
- [ ] **Feedforward** — "feedback about future actions": guidance/hints *before* you execute a command (e.g. Pathward/Fieldward show candidate gestures; OctoPocus). Distinguish from **feedback** (after the action).

---

## 5. CONTEXTS OF USE (ISO 13407) — know all five + an example each
- [ ] **Physical** — location, objects, lighting, orientation, weather; the user's body & abilities (vision, finger range, hearing).
- [ ] **Temporal** — time of day, duration, before/after situation, hurried/normal/waiting, sync vs async.
- [ ] **Task** — multitasking, interruptions, task domain; primary/secondary, foreground/background interaction.
- [ ] **Social** — others present, their roles, interpersonal norms, surrounding culture, privacy/relationships.
- [ ] **Technical** — other devices/apps/networks, interoperability, sensors, infrastructure.
- [ ] **Why mobile cares most:** designers *cannot assume* the context → threatens effectiveness/usability.
- [ ] **Control vs. realism uses context:** a lab *controls* the context of use; increase **realism** by (a) simulating contexts (fake GPS) or (b) *not controlling* some contexts (own devices, own time).

---

## 6. DESIGN HEURISTICS — Nielsen's 10 (be able to name a few + apply to mobile)
- [ ] 1 Visibility of system status · 2 Match between system & real world · 3 User control & freedom · 4 Consistency & standards · 5 Error prevention · 6 Recognition rather than recall · 7 Flexibility & efficiency of use · 8 Aesthetic & minimalist design · 9 Help users recognize/diagnose/recover from errors · 10 Help & documentation.
- [ ] Used as an **analytical** (expert-inspection) evaluation method, not empirical.

---

## 7. MOBILE COMMUNICATION (lecture 6)
- [ ] **Media richness theory** — richer media are better for complex/ambiguous messages; leaner media for simple ones.
- [ ] **Social presence / co-presence** — the sense of "being together" in the same space; media vary in how much they convey it.
- [ ] **Selective self-presentation** — leveraging a medium's *limitations* to shape how others see you (richer media can reduce this control).
- [ ] Tension to remember: richer media ↑ social presence but ↓ selective self-presentation (the typing-indicators paper).

---

## 8. DIGITAL ECOSYSTEMS (lecture 7)
- [ ] **Artifact ecology / digital ecology** — a personal collection of devices/apps/systems used *together*; best scoped by user *activity*.
- [ ] **Walled gardens** — apps bundle *contacts + functionality* so users/functions can't cross between apps.
- [ ] **Expression breakdowns** — frustration from missing one app's customizations/expression when messaging in another app.
- [ ] **Co-customization** — two people shaping a shared expressive space (DearBoard).
- [ ] Cross-link: a privacy or notification design should reason across the whole *artifact ecology* (phone + watch + tablet), not one app (cf. Cecchinato smartwatch multi-device ecologies).

---

## 9. ONLINE PRIVACY (lecture 8 — central to your paper)
- [ ] **Privacy paradox** — stated privacy concern ≠ observed behavior (worry, but don't read policies / use creepy apps anyway).
- [ ] **Personal space & territoriality** — boundary around a person; the smartphone is an *extension of the self*, so intrusion = a privacy violation.
- [ ] **Altman's privacy regulation theory** — privacy as a *process* of selectively adjusting access to oneself (ongoing revealing/concealing).
- [ ] **Privacy fatigue / learned helplessness** — repeated invasion + belief there's no recourse → people stop responding *even when given defenses* (Shklovski's explanation of the paradox). ⚠ Can be exploited as a **dark pattern**.
- [ ] *(Paper-specific, know but it's the paper's, not a course concept):* information asymmetry, nudges (soft-paternalistic, choice-preserving), enhanced active choice, permission manager.

---

## 10. ACCESSIBILITY & MULTIMODAL INTERACTION (lecture 9)
- [ ] **Permanent impairment** — e.g. blindness, one arm.
- [ ] **Temporary impairment** — e.g. cataract surgery, arm in a cast.
- [ ] **Situational impairment** — context-induced, e.g. bright sunlight, holding a baby, walking — *ties directly to "variable contexts of use."*
- [ ] **Inclusive design** (Microsoft) — designing for one type of impairment benefits everyone ("solve for one, extend to many").
- [ ] Be ready to map a design's support for all three impairment types.

---

## 11. USER STUDIES & EVALUATION METHODS (the heaviest Q&A area)
- [ ] **Evaluation vs. user research** — evaluation = verify a design meets a goal (conclusive: "it's efficient enough"); user research = discover needs & opportunities (rich, forward-looking). Both = "user studies."
- [ ] **Types of study** — usability study (think-aloud, SUS/NASA-TLX), interviews, surveys, **experiments**, **field studies**.
- [ ] **Field vs. lab** — field = real contexts, high ecological validity, low control; lab = controlled, high internal validity, low realism. **It's a spectrum of control vs. realism.**
- [ ] **One-off vs. longitudinal** — single session vs. repeated/over time (needed to see real adoption & to detect **novelty effects**).
- [ ] **Experiment** = compares ≥2 designs on the same measure to find a **cause–effect** relationship (does *my design* cause an effect on performance/experience?).
  - [ ] **Hypothesis** (H1) + **null hypothesis** (H0); directional vs non-directional.
  - [ ] **Independent variable (IV)** = what you vary (its values = **levels**). **Dependent variable (DV)** = what you measure.
  - [ ] **Task** = what participants do; **trial** = one performance of the task.
  - [ ] **Within-subjects** = every participant does all conditions (watch carry-over). **Between-subjects** = different groups per condition (avoids order effects, needs more people).
  - [ ] **Order effects** — earlier conditions affect later ones → mitigate by **counterbalancing / randomizing order**.
  - [ ] **Novelty effect** — early enthusiasm inflates results; fades over time → use longitudinal.
  - [ ] **Pilot study** — trial run to fix the design before the real study.
- [ ] **Control vs. realism** — more control ⇒ effect more likely caused by your design; more realism ⇒ results reflect real life. Increase realism by simulating contexts OR not controlling some contexts.
- [ ] **User study protocol** must specify: goal & motivation, participants (**inclusion/exclusion criteria, recruitment**), procedure, data collection methods, analysis methods, implications for design.
- [ ] **Standardized questionnaires** — **SUS** (usability), **NASA-TLX** (perceived workload).
- [ ] **Think-aloud protocol** — participant verbalizes thoughts during a usability task.
- [ ] **Data collection methods** — interviews (unstructured/semi-structured/focus group), questionnaires, diaries, **ESM (experience sampling)**, usage/system logs, observation notes, audio/video.
- [ ] **Analysis methods** — statistical analysis (quant), **thematic analysis** (qual: inductive vs deductive coding).
- [ ] **Implications for design** — the actionable takeaways a study produces.

---

## 12. TYPES OF DATA (lecture 7 — know the definitions AND the conceptual relationships)
- [ ] **Quantitative** — numeric (counts, time, ratings). **Qualitative** — text/images/video (why/what/how).
- [ ] **Behavioral** — what people *do* (logs, observations). **Attitudinal** — what people *think/feel/value* (interviews, ratings).
- [ ] **Self-reported** — explicitly reported by participants (surveys, interviews, diaries). **Observed** — measured by researchers (logs, direct observation, sensors).
- [ ] **KEY RELATIONSHIPS (classic exam question):**
  - [ ] Behavioral data is **always observed** — but not all observed data is behavioral (e.g. battery level, heart rate).
  - [ ] Attitudinal data is **always self-reported** — but not all self-reported data is attitudinal (e.g. demographics, a recounted story of an action).

---

## 13. VALIDITY & WORLDVIEWS (lecture 8 — your paper is the worked example)
- [ ] **Positivism** — goal: objective, generalizable findings; explain/predict cause–effect, find "laws." Good research controls variability.
  - [ ] **Internal validity** — results trustworthily answer the study's questions (e.g. no uncontrolled order/learning effects).
  - [ ] **External validity** — results generalize to other populations/tasks/devices/cultures.
  - [ ] **Ecological validity** — (special case of external) results generalize to *real-life* settings.
- [ ] **Interpretativism** — goal: in-depth understanding of how people create/experience their subjective realities; propose concepts (not predict).
  - [ ] **Credibility** — interpretations coherent and grounded in the data.
  - [ ] **Transferability** — described richly enough that readers judge relevance to other contexts.
  - [ ] **Reflexivity** — researchers acknowledge how their own background shapes interpretation.
- [ ] ⚠ Don't judge an interpretativist study by positivist "validity" (and vice-versa) — match the worldview.
- [ ] Almuhimedi = **positivist**; strengths = ecological validity (own devices); weaknesses = small/skewed sample (external), inferred causation from a time-window (internal).

---

## 14. QUANTITATIVE DATA ANALYSIS (lecture 10 — be able to explain, not compute)
- [ ] **IV/DV, H0/H1** (as above); directional (one-tailed) vs non-directional (two-tailed).
- [ ] **Measurement scales** — nominal (categories) · ordinal (ranked, e.g. **Likert**) · interval (no true zero) · ratio (true zero). Scale decides the test.
- [ ] **Descriptive stats** — mean (sensitive to outliers), median (robust), SD, IQR. Always compute *first*.
- [ ] **Inferential stats** — generalize from sample to population via random sampling.
- [ ] **p-value** — probability of data this extreme *if H0 were true*; p<.05 = reject H0. ⚠ p does NOT prove the effect or its size.
- [ ] **Effect size** — magnitude of the effect (Cohen's d; η²; r). Significance ≠ importance — always report it.
- [ ] **Tests:** t-test (2 groups) · ANOVA (3+ groups, normal) · **Kruskal-Wallis + Dunn** (3+ groups, non-normal — the cookie paper's test) · correlation (Pearson/Spearman) · regression.
- [ ] **Correlation ≠ causation** (watch confounds).
- [ ] **Integrity threats:** **HARKing** (hypothesizing after results known), **p-hacking** (running many tests, reporting only significant), fix with **corrections for multiple comparisons** (Bonferroni / Benjamini-Hochberg).
- [ ] **Bias terms:** **social desirability bias**, **demand characteristics**, self-selection — threats to validity.
- [ ] **APA reporting** — test name, statistic, df, p, group medians/means, effect size, correction.

---

## 15. THE EXAM PAPERS (one-line each — for cross-paper Q&A, "does another paper add insight?")
- [ ] **Almuhimedi (yours)** — field study: permission manager + privacy nudges → more awareness & restriction; timing was the weakness.
- [ ] **Iftikhar "Together but not together"** — typing indicators; richer = more social presence but less selective self-presentation; remote experiment.
- [ ] **EmoWear** — emotional teasers for voice messages on smartwatches (modalities/affect).
- [ ] **HeartChat** — heart-rate-augmented chat for empathy/awareness.
- [ ] **Griggio "Customizations & Expression Breakdowns"** — walled gardens + expression breakdowns across messaging ecologies.
- [ ] **DearBoard** — co-customizable keyboard; field study; designing for ecologies; intimacy.
- [ ] **MessageOnTap** — suggestive interface for messaging tasks.
- [ ] **Cecchinato "Always On(line)?"** — smartwatches within multi-device ecologies.
- [ ] **Shklovski "Leakiness & Creepiness"** — privacy paradox → learned helplessness; interpretativist, conceptual contribution.
- [ ] **Balebako "Little Brothers Watching You"** — raising awareness of data leaks; lab study.
- [ ] **Party Face Congratulations** — emoji accessibility for screen-reader users.
- [ ] **ProgramAlly** — custom visual-access programs, multimodal end-user programming.
- [ ] **WalkType** — accelerometer to fix text entry under *situational impairment* (walking).
- [ ] **Biselli (quant lecture)** — personalized cookie banners; Kruskal-Wallis; positivist experiment.

---

## 16. FASTEST-WIN CHECKLIST (the night before)
- [ ] I can define the **3 interaction qualities**, **4 design principles**, **5 contexts of use**, **3 impairment types**, **3 validity types**, **2 worldviews**.
- [ ] I can classify any data as quant/qual, behavioral/attitudinal, self-reported/observed — and state the two relationships.
- [ ] I can describe a **within-subjects field experiment** for my idea: goal, IV+levels, DV, hypothesis, procedure, data, how I handle order & novelty effects, control vs realism.
- [ ] I can state Almuhimedi's worldview + its internal/external/ecological validity limits.
- [ ] I can connect my idea to ≥2 other papers and ≥1 theory (e.g. Altman, artifact ecologies).
- [ ] I can name a context where my idea works well AND one where it fails (and why).
