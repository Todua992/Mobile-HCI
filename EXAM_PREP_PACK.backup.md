# Mobile HCI — Oral Exam Prep Pack
**Paper:** Almuhimedi et al. (2015), *"Your Location Has Been Shared 5,398 Times! A Field Study on Mobile App Privacy Nudging"* (CHI '15)
**My design idea (Part 2):** **Nudge-When-Ready (NWR)** — a context-aware, multimodal privacy-nudge scheduler.

> Format reminder: 6-min presentation (~4 min paper + ~2 min idea) + 9-min Q&A. Use course terminology *explicitly* throughout.

---

## PART 1 — THE 6-MINUTE PRESENTATION SCRIPT

### Slide 1 — Title (~10s)
"I'll present Almuhimedi et al.'s 2015 field study on mobile **privacy nudging**, and then my own design, *Nudge-When-Ready*, that applies its takeaways."

### Slide 2 — Problem & motivation (~45s)
"The problem is **information asymmetry**: smartphone users don't know how often their apps access sensitive data — location, contacts, calendar, call logs. Privacy decision-making suffers from **bounded rationality** and cognitive biases, so people make privacy-adverse choices — this is the classic **privacy paradox**: stated concern doesn't match observed behavior.

The authors ask two research questions: (1) does a fine-grained **permission manager** help users review and change permissions, and (2) can **privacy nudges** make that permission manager *more* effective? A nudge here is a *soft-paternalistic*, choice-preserving intervention — it makes risk salient without removing options."

### Slide 3 — The key design idea (~55s)
"They designed two things. First, they used **AppOps**, Android's permission manager, which lets users grant/deny permissions per app. Second — their real contribution — a **mobile privacy nudge**: a full-screen message saying e.g. 'X apps accessed your location N times,' naming three random apps plus '+10 others.' It uses **enhanced active choice**: three options — *'Let me change my settings'* (opens AppOps, highlighted), *'Show me more'* (a detailed per-app report), and *'Keep sharing my location.'* They added **trust cues** (the AppOps icon) for credibility. The design intent: make the abstract risk concrete and lower the threshold to act."

### Slide 4 — User study methods (~70s)
"This is a **field study** — in the wild, on participants' **own devices**, which gives high **ecological validity**. It's **longitudinal**: 22 days, N=23, **within-subjects**, **mixed methods**. Three phases:
- **Phase 1 – baseline** (7 days): silent logging only, to establish behavior.
- **Phase 2 – AppOps only** (7 days): permission manager made available.
- **Phase 3 – AppOps + nudges** (8 days): one nudge per day at a random time between 11am–8pm.

They **randomized the order** of the four data-type nudges to control **order effects**. Data collected: **usage logs** (behavioral, observed data), entry and exit **surveys**, 5-point **Likert** comfort ratings, and eight semi-structured **interviews** analyzed with **thematic analysis** — so both **quantitative** and **qualitative**, both **behavioral** and **attitudinal** data. The study had IRB approval. Their **independent variable** is essentially the phase/intervention; **dependent variables** are how often people reviewed and restricted permissions."

### Slide 5 — Main findings (~60s)
"Three headline findings:
1. The **permission manager alone helps**: 95.6% reviewed permissions; 65% restricted — 272 app-permission pairs.
2. **Nudges add value on top**, even after a week of having AppOps: 95% reassessed and 58% further restricted; 78% of reviews in Phase 3 were triggered by a nudge.
3. **Frequency of access** was the attention-grabbing element — a statistically significant correlation with acting, especially for location (p<.01). Participants said the sheer numbers felt 'scary,' 'like being followed by my own phone.'

But the key *weakness*: nudges often arrived at **bad moments** — mid-run, at work — so **33% were ignored** and many were dismissed via 'keep sharing.' Their **implications for design**: nudges should be **personalized**, **salient/sticky but not annoying**, and **configurable**. Open question: do nudges keep working over time, or are they just a **novelty effect**?"

### Slide 6 — TRANSITION to my idea (~10s)
"That weakness — *right message, wrong moment* — is exactly what my design targets."

---

### PART 2 — MY DESIGN IDEA: Nudge-When-Ready (~2 min)

### Slide 7 — The idea (~50s)
"**Nudge-When-Ready** is an OS-level privacy-nudge scheduler. It keeps Almuhimedi's validated *content* — the access-frequency count, named apps, enhanced active choice, trust cues — but replaces 'one nudge a day at a random time' with a **context-aware, multimodal** delivery engine.

A lightweight, **on-device** classifier reads the phone's sensors and scores the current situation against the **five contexts of use** — physical, temporal, task, social, technical — to decide *whether now is a receptive moment*, and *which modality* fits. Running? A glanceable **haptic** pulse plus a heads-up banner. Driving? A **speech** summary with voice confirmation, no screen. In a meeting (social context)? Stay silent, defer. Low-vision user? A high-contrast, screen-reader-first path."

### Slide 8 — Course concepts in my design (~55s)
"Concretely:
- **Reification**: I turn 'a good moment to be nudged' into a manipulable object — a *Receptive-state tile* the user can open, see *why* now is bad ('moving + headphones + calendar event'), and override.
- **Feedforward**: before tapping 'change my settings,' a preview shows what will open and what restricting will break — fixing the paper's problem where users over-restricted, broke an app, and had to re-enable it.
- It improves the interaction qualities of **discoverability** (surfacing hidden background access) and **efficiency** (right-moment delivery → fewer wasted, ignored nudges), and adds **expressiveness** via multimodal input and configurability.
- The multimodal output (visual/auditory/**haptic**/speech) directly addresses mobile's **variable contexts of use** and **situational impairments** — and as a bonus serves permanent and temporary impairments too."

### Slide 9 — How I'd evaluate it (~15s)
"I'd test it as a **longitudinal field study**, **within-subjects**, comparing random-time delivery against context-aware delivery — measuring nudge act-on rate (behavioral) and annoyance (attitudinal, Likert), while watching for **novelty effects**. Thank you."

> **Timing check:** Paper ≈ 4:00, idea ≈ 2:00. Practice to land at 5:45 so you don't get cut off.

---

## PART 2 — EXAM PREP ASSIGNMENT ANSWERS

### Prep Assignment 0 — (covered above: the draft presentation)
Paper overview + my idea = the script above.

---

### Prep Assignment 1 — Context of use & an experiment for MY idea

**1) Intended context(s) of use.** NWR is fundamentally a design *about context*, so it touches all five, but it most directly addresses:
- **Temporal context** — it distinguishes *hurried / normal / waiting* moments and async delivery; the whole point is choosing *when*.
- **Task context** — it detects a **foreground/primary task** (navigation, a call, the camera) and avoids interrupting it, deferring the nudge to a **background-safe** moment.
- **Physical context** — sensors (motion, ambient light, the user's bodily situation) decide whether a visual full-screen is even perceivable.
- **Social** and **technical** contexts gate delivery too (silent in meetings; never full-screen while casting to a TV).
*How the paper inspired this:* Almuhimedi explicitly found nudges failed because of **context** (33% ignored at bad times) and recommended **configurable, sticky-but-not-annoying** delivery. My idea operationalizes that recommendation.

**2) Experiment to evaluate it.**
- *Aspect evaluated:* whether **context-aware delivery** causes higher engagement and lower annoyance than random-time delivery (the paper's design). The paper *inspires* this because it named timing as its main limitation but never tested a fix.
- *Hypothesis (H1, directional):* "Users act on (open settings / restrict) significantly more context-aware nudges than random-time nudges, and report lower annoyance." H0: no difference.
- *Independent variable:* delivery strategy — 2 levels: (A) random-time baseline, (B) context-aware NWR. (Secondary IV: modality-adaptation on/off.)
- *Dependent variables:* % nudges acted-on and # permissions restricted (**behavioral/observed**, from logs); annoyance and perceived control on a 5-pt **Likert** (**attitudinal/self-reported**); dismissal rate.
- *Task:* this is mostly *naturalistic use* — participants live with their phones; the "task" is responding to whatever nudges appear. I'd also seed a few controlled high-frequency accesses so everyone is exposed to the frequency cue.
- *Participants:* everyday Android smartphone users; inclusion = uses ≥10 apps with sensitive permissions; mixed ages/genders to limit **external-validity** threats; recruited via mailing lists / social media. Exclude security professionals (non-representative).
- *Procedure:* baseline logging week → counterbalanced A/B blocks (within-subjects) over ~3 weeks → exit survey + interview.
- *Data collection:* usage logs + Likert surveys + semi-structured interviews (thematic analysis).

**3) Controlling the context of use** so the *design* causes the effect, not external factors: counterbalance condition order (control **order effects**); keep nudge *content* identical across conditions (so only delivery varies); log the sensed context at each nudge so I can analyze engagement *per context type* rather than letting uncontrolled context confound results; use **within-subjects** so each person is their own control.

**4) Increasing realism:** run it **in the wild on participants' own devices** (don't standardize hardware — that's the course's "not controlling certain contexts" technique); let participants use their phones whenever/however they normally do; if needed, **simulate** realistic contexts (e.g., scripted access bursts) only to guarantee exposure, not to constrain behavior.

**5) Lab or field?** **Field experiment** — it must run across real, unpredictable contexts of use, which is the entire variable of interest. A lab would destroy the phenomenon (you can't fake "at work, mid-run, in a meeting" convincingly). I trade some **internal validity / control** for **ecological validity**.

**6) One-off or longitudinal?** **Longitudinal** (~3 weeks) — because (a) context variety only appears over time, and (b) I must distinguish a real effect from a **novelty effect** (does context-aware delivery still help in week 3?), exactly the habituation question the paper left open.

---

### Prep Assignment 2 — Data types

**1) The paper's data.**
- **Behavioral vs. attitudinal:** *Behavioral* — usage logs of opening AppOps, restricting permissions, responding to nudges. *Attitudinal* — survey/interview reports of comfort, understanding, and feelings about apps ("it felt scary").
- **Self-reported vs. observed:** *Observed* — the AppOps logs (reviews, restrictions, nudge responses), captured automatically every 5 minutes. *Self-reported* — surveys + interviews.
- **Qualitative vs. quantitative:** *Quantitative* — counts (272 pairs, 95%, frequency, the p<.01 regression). *Qualitative* — interview quotes, thematic analysis of reasons for restricting.
- **Conceptual relationship:** **Behavioral data is always observed**, but not all observed data is behavioral (e.g., a logged battery level or heart rate is observed but not behavior). **Attitudinal data is always self-reported**, but not all self-reported data is attitudinal (e.g., self-reported demographics, or a recounted action, are self-reported but not attitudes). In this paper, the logged restrictions are behavioral→observed; the comfort Likert is attitudinal→self-reported.
- **Methods:** usage/system logs, entry & exit surveys (open + closed/Likert), semi-structured interviews → thematic analysis; random-effects linear regression for the frequency effect.

**2) Context data in the study?** They captured *technical/temporal* context indirectly (access frequencies over time) but **did not log physical/social context** at the moment of each nudge. *Additional context data that would enrich it:* what the user was doing when a nudge fired (foreground app = **task context**), location type (home/work = **physical/social**), motion state — this would have explained *why* 33% were ignored, instead of relying on interview anecdotes. (This gap is literally what NWR exploits.)

**3) Study for MY idea (different type from Assignment 1's experiment).** A **usability study with think-aloud + NASA-TLX**, in a semi-controlled setting, to evaluate *comprehension and workload* of the multimodal nudges (e.g., can users interpret the haptic pattern; is the speech summary low-effort?).
- *Data types:* think-aloud = **qualitative, self-reported, attitudinal-ish + behavioral** (what they say while doing); NASA-TLX = **quantitative, self-reported, attitudinal** (perceived workload); task success/time = **quantitative, observed, behavioral**.
- *Relationship:* same as above — think-aloud verbalizations are self-reported, but completion time is observed/behavioral.
- *Methods:* think-aloud protocol, NASA-TLX, screen+sensor logging, short interview.
- *Context data:* I'd script several simulated contexts (walking on a treadmill, bright light, a "meeting") to see if the right modality is chosen — directly collecting **physical/social/task** context as an independent factor.

---

### Prep Assignment 3 — Worldview & validity

**1) Worldview:** **Positivist.** The paper seeks generalizable cause-effect claims (does the nudge *cause* more reviewing/restriction?), uses **hypotheses**, quantification, a regression with p-values, and frames its limits as threats to **validity**. (It has a qualitative strand, but the framing and goals are positivist — note the course even uses this exact paper as a *positivist validity* example.)

**2) How they argue for rigor/validity:** within-subjects design with a baseline phase; **randomized nudge order** to counter **order effects**; in-situ deployment on own devices for **ecological validity**; triangulation of logs + surveys + interviews (**mixed methods**); statistical testing for the frequency effect; explicit limitations section.

**3) Limitations to validity (positivist):**
- **Internal validity:** they *infer* a nudge caused a restriction from a 10-minute time window — correlation, not certain causation; Phase-3 behavior is contingent on Phase-2 (carry-over). Lost/delayed nudges (connectivity) add noise.
- **External validity:** N=23, **self-selection bias**, skewed sample (65% female, median age 23, mostly Samsung, one city, AppOps-only Android versions) → can't claim it generalizes to all users/devices.
- **Ecological validity:** strong here (own devices, real life) — their main validity strength — though the study client/monitoring emails could mildly alter behavior.

**4) (If interpretativist — for contrast):** not the primary fit, but the interview strand could be judged on **credibility** (quotes grounded in data), **transferability** (rich description so others judge relevance), and **reflexivity** (researchers acknowledging their influence). Useful to mention to show you understand *both* worldviews.

---

### Prep Assignment 4 — Accessibility & further implications

**1) How MY idea (NWR) supports impairments:**
- **Permanent:** multimodal output means a blind/low-vision user gets a **haptic + speech/screen-reader** nudge instead of a purely **visual** full-screen; a motor-impaired user gets voice or shake input instead of precise taps; reducing nudge *volume* and timing them well lowers cognitive load.
- **Temporary:** arm in a cast / holding a baby → motion sensing detects one-handed/no-hand availability and prefers haptic, voice, or deferral over a modal needing two-handed dismissal.
- **Situational:** NWR's home turf — bright sun (defer visual → haptic), loud environment (suppress audio), driving/walking (speech or single haptic). These are textbook **situational impairments** in Microsoft's inclusive-design sense, and NWR is essentially a situational-impairment mitigator. *Gap:* if a user has *no routine* (e.g., a gig courier always semi-driving), the classifier has no clean "receptive" window — a real limitation.

**2) Implications for design (paper's + mine):**
- *Paper's own:* personalize; salient/sticky/not-annoying; configurable.
- *My additional implications:*
  - (i) *Same class of tech:* any **notification/interruption system** (not just privacy) should be **context-aware** — generalizes to digital-wellbeing prompts, security alerts, health reminders.
  - (ii) *OS/device level:* operating systems should expose a shared **"receptivity"/Do-Not-Disturb-with-reasoning API** so all apps defer to opportune moments — privacy as an OS service, not per-app.
  - (iii) *Combine with another paper:* pairing Almuhimedi with **Shklovski's "Leakiness and Creepiness"** shows the privacy paradox is **learned helplessness**, not laziness → nudges must offer *visible recourse*, not just fear. Pairing with **Cecchinato's multi-device ecologies** suggests nudges should reason across a whole **artifact ecology** (phone + watch), picking the best device to nudge on.
  - (iv) *Theory combination:* **design principles** — reify the "good moment" and add **feedforward** previews; **Altman's privacy regulation** — treat the nudge as a tool for users to selectively regulate access to the **personal space** the phone represents.

---

## PART 3 — LIKELY Q&A (the 7 example areas) — model answers

**1. Mobile design challenges addressed?** NWR tackles **variable contexts of use** and **situational impairments** head-on (its core), plus **reduced screen real estate** (it can downgrade from full-screen to a heads-up banner or non-visual channel). *Unaddressed:* **limited input expressiveness** — privacy choices are still fairly binary; I'd extend with graded "only while using" options. The **fat-finger/occlusion** problem persists for the drag interactions, mitigated by voice/long-press alternatives.

**2. Design principles (define + apply):** **Feedforward** = "feedback about future actions," guidance *before* you commit (like Pathward showing candidate gestures). In NWR, a preview shows what 'change settings' will open and what restricting will break — so users don't blindly tap then have to undo (the paper's permissive-readjustment problem). **Reification** = turning an abstract action/concept into a concrete manipulable object; I reify "a good moment" into an editable Receptive-state tile. If absent, users couldn't understand or override the system's timing decisions — reducing **user control & freedom** (Nielsen).

**3. Modalities & context:** Input = touch, voice, motion (shake-to-snooze); output = visual, auditory, **haptic**, speech. Appropriate because mobile contexts vary: haptic is glanceable while walking; speech frees eyes while driving; visual high-contrast suits a stationary low-vision user. *Where inappropriate:* **speech in a quiet social context** (a meeting/train) would leak sensitive data to bystanders and violate **personal space** — so NWR must fall back to silent haptic when the social context is uncertain.

**4. Interaction qualities (define the three):** **Discoverability** (helping users find hidden interactions/info — NWR surfaces invisible background data access), **Efficiency** (faster/fewer-error task performance — right-moment delivery cuts wasted nudges), **Expressiveness** (range of input possibilities — NWR's multimodal input + configurability). *Neglected:* I'm not deeply improving expressiveness of the *privacy decision itself* (still mostly restrict/keep); consequence = users can't express nuanced preferences, a gap a sibling "Comfort Profile" design would fill.

**5. Context where it shines vs. struggles:** *Shines:* a commuter with a stable routine — clear receptive windows (evening at home) and rich context signals → well-timed, well-modality'd nudges. *Struggles:* a user with constant low-grade multitasking and no routine (gig courier) — no clean receptive moment, so NWR either over-defers (never nudges) or misfires, collapsing toward the paper's random-timing problem.

**6. Data types & methods (paper) + strengths/limits:** (see Prep 2). *Strengths:* mixed methods triangulate *what* people did (logs) with *why* (interviews); own-device logging = high ecological validity. *Limitations:* inferring causation from a time window (internal validity); small, skewed sample (external validity). *Alternatives:* a controlled lab experiment would raise internal validity but kill ecological validity; a larger survey would generalize attitudes but lose behavioral grounding.

**7. Study design for my idea:** Goal = does context-aware delivery *cause* more engagement / less annoyance? → **longitudinal within-subjects field experiment**, IV = delivery strategy (random vs context-aware), DVs = act-on rate (behavioral/observed) + annoyance Likert (attitudinal/self-reported), counterbalanced for order effects, weeks compared for novelty effects, sensed context logged to attribute effects. Rationale: only a field setting exposes the real contexts that are the whole point.

---

## PART 4 — RAPID CONCEPT GLOSSARY (backup slide / memorize)
- **Privacy paradox**: stated concern ≠ observed behavior. **Learned helplessness / privacy fatigue**: repeated invasion + no recourse → stop responding even when defenses exist (Shklovski). **Personal space/territoriality / Altman**: phone = extension of self; privacy = selectively regulating access to oneself. **Nudge**: soft-paternalistic, choice-preserving. **Enhanced active choice**: highlight desired option by emphasizing the loss in the alternative. **Information asymmetry**: users vs. providers know unequally.
- **Three waves**: 1 performance/lab/experiments; 2 social/field/ethnography; 3 experience/in-the-wild/mixed. (This paper = 1st-wave measurement on a 3rd-wave everyday-life concern.)
- **Design principles**: Reification, Polymorphism, Reuse, Feedforward. **Interaction qualities**: Discoverability, Efficiency, Expressiveness. **5 contexts**: Physical, Temporal, Task, Social, Technical. **Modalities**: visual, auditory, haptic, touch, speech, text, motion, gaze…
- **Study**: field vs lab; one-off vs longitudinal; within vs between subjects; IV/DV + levels; tasks/trials; order effects; novelty effects; control vs realism. **Data**: qual/quant; self-reported/observed; attitudinal/behavioral (behavioral⇒observed; attitudinal⇒self-reported). **Worldviews**: positivism (internal/external/ecological validity) vs interpretativism (credibility/transferability/reflexivity). **Instruments**: SUS, NASA-TLX, think-aloud, ESM/diary, thematic analysis.
- **Ecosystems**: walled gardens; artifact/digital ecologies; expression breakdowns. **Accessibility**: permanent/temporary/situational impairments.
