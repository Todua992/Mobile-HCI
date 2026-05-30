# Mobile HCI — Oral Exam Prep Pack
**Paper:** Almuhimedi et al. (2015), *"Your Location Has Been Shared 5,398 Times! A <span style="color:#d00000">Field Study</span> on Mobile App Privacy Nudging"* (CHI '15)
**My design idea (Part 2):** **Nudge-When-Ready (NWR)** — a context-aware, <span style="color:#d00000">multimodal</span> privacy-nudge scheduler.

> Format reminder: 6-min presentation (~4 min paper + ~2 min idea) + 9-min Q&A. Use course terminology *explicitly* throughout.

---

## PART 1 — THE 6-MINUTE PRESENTATION SCRIPT

### Slide 1 — Title (~10s)
"I'll present Almuhimedi et al.'s 2015 <span style="color:#d00000">field study</span> on mobile **privacy nudging**, and then my own design, *Nudge-When-Ready*, that applies its takeaways."

### Slide 2 — Problem & motivation (~45s)
"The problem is **information asymmetry**: smartphone users don't know how often their apps access sensitive data — location, contacts, calendar, call logs. Privacy decision-making suffers from **bounded rationality** and cognitive biases, so people make privacy-adverse choices — this is the classic **<span style="color:#d00000">privacy paradox</span>**: stated concern doesn't match observed behavior.

The authors ask two research questions: (1) does a fine-grained **permission manager** help users review and change permissions, and (2) can **privacy nudges** make that permission manager *more* effective? A nudge here is a *soft-paternalistic*, choice-preserving intervention — it makes risk salient without removing options."

### Slide 3 — The key design idea (~55s)
"They designed two things. First, they used **AppOps**, Android's permission manager, which lets users grant/deny permissions per app. Second — their real contribution — a **mobile privacy nudge**: a full-screen message saying e.g. 'X apps accessed your location N times,' naming three random apps plus '+10 others.' It uses **enhanced active choice**: three options — *'Let me change my settings'* (opens AppOps, highlighted), *'Show me more'* (a detailed per-app report), and *'Keep sharing my location.'* They added **trust cues** (the AppOps icon) for <span style="color:#d00000">credibility</span>. The design intent: make the abstract risk concrete and lower the threshold to act."

### Slide 4 — User study methods (~70s)
"This is a **<span style="color:#d00000">field study</span>** — in the wild, on participants' **own devices**, which gives high **<span style="color:#d00000">ecological validity</span>**. It's **<span style="color:#d00000">longitudinal</span>**: 22 days, N=23, **<span style="color:#d00000">within-subjects</span>**, **<span style="color:#d00000">mixed methods</span>**. Three phases:
- **Phase 1 – baseline** (7 days): silent logging only, to establish behavior.
- **Phase 2 – AppOps only** (7 days): permission manager made available.
- **Phase 3 – AppOps + nudges** (8 days): one nudge per day at a random time between 11am–8pm.

They **randomized the order** of the four data-type nudges to control **<span style="color:#d00000">order effects</span>**. Data collected: **<span style="color:#d00000">usage logs</span>** (<span style="color:#d00000">behavioral</span>, <span style="color:#d00000">observed data</span>), entry and exit **<span style="color:#d00000">surveys</span>**, 5-point **<span style="color:#d00000">Likert</span>** comfort ratings, and eight semi-structured **<span style="color:#d00000">interviews</span>** analyzed with **<span style="color:#d00000">thematic analysis</span>** — so both **<span style="color:#d00000">quantitative</span>** and **<span style="color:#d00000">qualitative</span>**, both **<span style="color:#d00000">behavioral</span>** and **<span style="color:#d00000">attitudinal</span>** data. The study had IRB approval. Their **<span style="color:#d00000">independent variable</span>** is essentially the phase/intervention; **dependent variables** are how often people reviewed and restricted permissions."

### Slide 5 — Main findings (~60s)
"Three headline findings:
1. The **permission manager alone helps**: 95.6% reviewed permissions; 65% restricted — 272 app-permission pairs.
2. **Nudges add value on top**, even after a week of having AppOps: 95% reassessed and 58% further restricted; 78% of reviews in Phase 3 were triggered by a nudge.
3. **Frequency of access** was the attention-grabbing element — a statistically significant correlation with acting, especially for location (p<.01). Participants said the sheer numbers felt 'scary,' 'like being followed by my own phone.'

But the key *weakness*: nudges often arrived at **bad moments** — mid-run, at work — so **33% were ignored** and many were dismissed via 'keep sharing.' Their **<span style="color:#d00000">implications for design</span>**: nudges should be **personalized**, **salient/sticky but not annoying**, and **configurable**. Open question: do nudges keep working over time, or are they just a **<span style="color:#d00000">novelty effect</span>**?"

### Slide 6 — TRANSITION to my idea (~10s)
"That weakness — *right message, wrong moment* — is exactly what my design targets."

---

### PART 2 — MY DESIGN IDEA: Nudge-When-Ready (~2 min)

### Slide 7 — The idea (~50s)
"**Nudge-When-Ready** is an OS-level privacy-nudge scheduler. It keeps Almuhimedi's validated *content* — the access-frequency count, named apps, enhanced active choice, trust cues — but replaces 'one nudge a day at a random time' with a **context-aware, <span style="color:#d00000">multimodal</span>** delivery engine.

A lightweight, **on-device** classifier reads the phone's sensors and scores the current situation against the **<span style="color:#d00000">five contexts of use</span>** — physical, temporal, task, social, technical — to decide *whether now is a receptive moment*, and *which <span style="color:#d00000">modality</span>* fits. Running? A glanceable **<span style="color:#d00000">haptic</span>** pulse plus a heads-up banner. Driving? A **<span style="color:#d00000">speech</span>** summary with <span style="color:#d00000">voice</span> confirmation, no screen. In a meeting (<span style="color:#d00000">social context</span>)? Stay silent, defer. Low-vision user? A high-contrast, screen-reader-first path."

### Slide 8 — Course concepts in my design (~55s)
"Concretely:
- **<span style="color:#d00000">Reification</span>**: I turn 'a good moment to be nudged' into a manipulable object — a *Receptive-state tile* the user can open, see *why* now is bad ('moving + headphones + calendar event'), and override.
- **<span style="color:#d00000">Feedforward</span>**: before tapping 'change my settings,' a preview shows what will open and what restricting will break — fixing the paper's problem where users over-restricted, broke an app, and had to re-enable it.
- It improves the <span style="color:#d00000">interaction qualities</span> of **<span style="color:#d00000">discoverability</span>** (surfacing hidden background access) and **<span style="color:#d00000">efficiency</span>** (right-moment delivery → fewer wasted, ignored nudges), and adds **<span style="color:#d00000">expressiveness</span>** via <span style="color:#d00000">multimodal</span> input and configurability.
- The <span style="color:#d00000">multimodal</span> output (<span style="color:#d00000">visual</span>/<span style="color:#d00000">auditory</span>/**<span style="color:#d00000">haptic</span>**/<span style="color:#d00000">speech</span>) directly addresses mobile's **<span style="color:#d00000">variable contexts of use</span>** and **<span style="color:#d00000">situational impairments</span>** — and as a bonus serves permanent and <span style="color:#d00000">temporary impairments</span> too."

### Slide 9 — How I'd evaluate it (~15s)
"I'd test it as a **<span style="color:#d00000">longitudinal</span> <span style="color:#d00000">field study</span>**, **<span style="color:#d00000">within-subjects</span>**, comparing random-time delivery against context-aware delivery — measuring nudge act-on rate (<span style="color:#d00000">behavioral</span>) and annoyance (<span style="color:#d00000">attitudinal</span>, <span style="color:#d00000">Likert</span>), while watching for **<span style="color:#d00000">novelty effects</span>**. Thank you."

> **Timing check:** Paper ≈ 4:00, idea ≈ 2:00. Practice to land at 5:45 so you don't get cut off.

---

## PART 2 — EXAM PREP ASSIGNMENT ANSWERS

### Prep Assignment 0 — (covered above: the draft presentation)
Paper overview + my idea = the script above.

---

### Prep Assignment 1 — <span style="color:#d00000">Context of use</span> & an experiment for MY idea

**1) Intended context(s) of use.** NWR is fundamentally a design *about context*, so it touches all five, but it most directly addresses:
- **<span style="color:#d00000">Temporal context</span>** — it distinguishes *hurried / normal / waiting* moments and async delivery; the whole point is choosing *when*.
- **<span style="color:#d00000">Task context</span>** — it detects a **<span style="color:#d00000">foreground/primary task</span>** (navigation, a call, the camera) and avoids interrupting it, deferring the nudge to a **<span style="color:#d00000">background-safe</span>** moment.
- **<span style="color:#d00000">Physical context</span>** — sensors (<span style="color:#d00000">motion</span>, ambient light, the user's bodily situation) decide whether a <span style="color:#d00000">visual</span> full-screen is even perceivable.
- **Social** and **technical** contexts gate delivery too (silent in meetings; never full-screen while casting to a TV).
*How the paper inspired this:* Almuhimedi explicitly found nudges failed because of **context** (33% ignored at bad times) and recommended **configurable, sticky-but-not-annoying** delivery. My idea operationalizes that recommendation.

**2) Experiment to evaluate it.**
- *Aspect evaluated:* whether **context-aware delivery** causes higher engagement and lower annoyance than random-time delivery (the paper's design). The paper *inspires* this because it named timing as its main limitation but never tested a fix.
- *<span style="color:#d00000">Hypothesis</span> (<span style="color:#d00000">H1</span>, directional):* "Users act on (open settings / restrict) significantly more context-aware nudges than random-time nudges, and report lower annoyance." <span style="color:#d00000">H0</span>: no difference.
- *<span style="color:#d00000">Independent variable</span>:* delivery strategy — 2 <span style="color:#d00000">levels</span>: (A) random-time baseline, (B) context-aware NWR. (Secondary <span style="color:#d00000">IV</span>: <span style="color:#d00000">modality</span>-adaptation on/off.)
- *Dependent variables:* % nudges acted-on and # permissions restricted (**<span style="color:#d00000">behavioral</span>/observed**, from logs); annoyance and perceived control on a 5-pt **<span style="color:#d00000">Likert</span>** (**<span style="color:#d00000">attitudinal</span>/<span style="color:#d00000">self-reported</span>**); dismissal rate.
- *Task:* this is mostly *naturalistic use* — participants live with their phones; the "task" is responding to whatever nudges appear. I'd also seed a few controlled high-frequency accesses so everyone is exposed to the frequency cue.
- *Participants:* everyday Android smartphone users; inclusion = uses ≥10 apps with sensitive permissions; mixed ages/genders to limit **external-<span style="color:#d00000">validity</span>** threats; recruited via mailing lists / social media. Exclude security professionals (non-representative).
- *Procedure:* baseline logging week → <span style="color:#d00000">counterbalanced</span> A/B blocks (<span style="color:#d00000">within-subjects</span>) over ~3 weeks → exit <span style="color:#d00000">survey</span> + <span style="color:#d00000">interview</span>.
- *Data collection:* <span style="color:#d00000">usage logs</span> + <span style="color:#d00000">Likert</span> <span style="color:#d00000">surveys</span> + <span style="color:#d00000">semi-structured interviews</span> (<span style="color:#d00000">thematic analysis</span>).

**3) Controlling the <span style="color:#d00000">context of use</span>** so the *design* causes the effect, not external factors: <span style="color:#d00000">counterbalance</span> condition order (control **<span style="color:#d00000">order effects</span>**); keep nudge *content* identical across conditions (so only delivery varies); log the sensed context at each nudge so I can analyze engagement *per context type* rather than letting uncontrolled context confound results; use **<span style="color:#d00000">within-subjects</span>** so each person is their own control.

**4) Increasing <span style="color:#d00000">realism</span>:** run it **in the wild on participants' own devices** (don't standardize hardware — that's the course's "not controlling certain contexts" technique); let participants use their phones whenever/however they normally do; if needed, **simulate** realistic contexts (e.g., scripted access bursts) only to guarantee exposure, not to constrain behavior.

**5) Lab or field?** **<span style="color:#d00000">Field experiment</span>** — it must run across real, unpredictable <span style="color:#d00000">contexts of use</span>, which is the entire variable of interest. A lab would destroy the phenomenon (you can't fake "at work, mid-run, in a meeting" convincingly). I trade some **<span style="color:#d00000">internal validity</span> / control** for **<span style="color:#d00000">ecological validity</span>**.

**6) <span style="color:#d00000">One-off</span> or <span style="color:#d00000">longitudinal</span>?** **<span style="color:#d00000">Longitudinal</span>** (~3 weeks) — because (a) context variety only appears over time, and (b) I must distinguish a real effect from a **<span style="color:#d00000">novelty effect</span>** (does context-aware delivery still help in week 3?), exactly the habituation question the paper left open.

---

### Prep Assignment 2 — Data types

**1) The paper's data.**
- **<span style="color:#d00000">Behavioral</span> vs. <span style="color:#d00000">attitudinal</span>:** *<span style="color:#d00000">Behavioral</span>* — <span style="color:#d00000">usage logs</span> of opening AppOps, restricting permissions, responding to nudges. *<span style="color:#d00000">Attitudinal</span>* — <span style="color:#d00000">survey</span>/<span style="color:#d00000">interview</span> reports of comfort, understanding, and feelings about apps ("it felt scary").
- **<span style="color:#d00000">Self-reported</span> vs. observed:** *Observed* — the AppOps logs (reviews, restrictions, nudge responses), captured automatically every 5 minutes. *<span style="color:#d00000">Self-reported</span>* — <span style="color:#d00000">surveys</span> + <span style="color:#d00000">interviews</span>.
- **<span style="color:#d00000">Qualitative</span> vs. <span style="color:#d00000">quantitative</span>:** *<span style="color:#d00000">Quantitative</span>* — counts (272 pairs, 95%, frequency, the p<.01 regression). *<span style="color:#d00000">Qualitative</span>* — <span style="color:#d00000">interview</span> quotes, <span style="color:#d00000">thematic analysis</span> of reasons for restricting.
- **Conceptual relationship:** **<span style="color:#d00000">Behavioral</span> data is always observed**, but not all <span style="color:#d00000">observed data</span> is <span style="color:#d00000">behavioral</span> (e.g., a logged battery level or heart rate is observed but not behavior). **<span style="color:#d00000">Attitudinal</span> data is always <span style="color:#d00000">self-reported</span>**, but not all <span style="color:#d00000">self-reported</span> data is <span style="color:#d00000">attitudinal</span> (e.g., <span style="color:#d00000">self-reported</span> demographics, or a recounted action, are <span style="color:#d00000">self-reported</span> but not attitudes). In this paper, the logged restrictions are <span style="color:#d00000">behavioral</span>→observed; the comfort <span style="color:#d00000">Likert</span> is <span style="color:#d00000">attitudinal</span>→<span style="color:#d00000">self-reported</span>.
- **Methods:** usage/<span style="color:#d00000">system logs</span>, entry & exit <span style="color:#d00000">surveys</span> (open + closed/<span style="color:#d00000">Likert</span>), <span style="color:#d00000">semi-structured interviews</span> → <span style="color:#d00000">thematic analysis</span>; random-effects linear regression for the frequency effect.

**2) Context data in the study?** They captured *technical/temporal* context indirectly (access frequencies over time) but **did not log physical/<span style="color:#d00000">social context</span>** at the moment of each nudge. *Additional context data that would enrich it:* what the user was doing when a nudge fired (<span style="color:#d00000">foreground</span> app = **<span style="color:#d00000">task context</span>**), location type (home/work = **physical/social**), <span style="color:#d00000">motion</span> state — this would have explained *why* 33% were ignored, instead of relying on <span style="color:#d00000">interview</span> anecdotes. (This gap is literally what NWR exploits.)

**3) Study for MY idea (different type from Assignment 1's experiment).** A **<span style="color:#d00000">usability study</span> with <span style="color:#d00000">think-aloud</span> + <span style="color:#d00000">NASA-TLX</span>**, in a semi-controlled setting, to evaluate *comprehension and workload* of the <span style="color:#d00000">multimodal</span> nudges (e.g., can users interpret the <span style="color:#d00000">haptic</span> pattern; is the <span style="color:#d00000">speech</span> summary low-effort?).
- *Data types:* <span style="color:#d00000">think-aloud</span> = **<span style="color:#d00000">qualitative</span>, <span style="color:#d00000">self-reported</span>, <span style="color:#d00000">attitudinal</span>-ish + <span style="color:#d00000">behavioral</span>** (what they say while doing); <span style="color:#d00000">NASA-TLX</span> = **<span style="color:#d00000">quantitative</span>, <span style="color:#d00000">self-reported</span>, <span style="color:#d00000">attitudinal</span>** (perceived workload); task success/time = **<span style="color:#d00000">quantitative</span>, observed, <span style="color:#d00000">behavioral</span>**.
- *Relationship:* same as above — <span style="color:#d00000">think-aloud</span> verbalizations are <span style="color:#d00000">self-reported</span>, but completion time is observed/<span style="color:#d00000">behavioral</span>.
- *Methods:* <span style="color:#d00000">think-aloud</span> protocol, <span style="color:#d00000">NASA-TLX</span>, screen+sensor logging, short <span style="color:#d00000">interview</span>.
- *Context data:* I'd script several simulated contexts (walking on a treadmill, bright light, a "meeting") to see if the right <span style="color:#d00000">modality</span> is chosen — directly collecting **physical/social/task** context as an independent factor.

---

### Prep Assignment 3 — Worldview & <span style="color:#d00000">validity</span>

**1) Worldview:** **<span style="color:#d00000">Positivist</span>.** The paper seeks generalizable <span style="color:#d00000">cause-effect</span> claims (does the nudge *cause* more reviewing/restriction?), uses **<span style="color:#d00000">hypotheses</span>**, quantification, a regression with p-values, and frames its limits as threats to **<span style="color:#d00000">validity</span>**. (It has a <span style="color:#d00000">qualitative</span> strand, but the framing and goals are <span style="color:#d00000">positivist</span> — note the course even uses this exact paper as a *<span style="color:#d00000">positivist</span> <span style="color:#d00000">validity</span>* example.)

**2) How they argue for rigor/<span style="color:#d00000">validity</span>:** <span style="color:#d00000">within-subjects</span> design with a baseline phase; **randomized nudge order** to counter **<span style="color:#d00000">order effects</span>**; in-situ deployment on own devices for **<span style="color:#d00000">ecological validity</span>**; triangulation of logs + <span style="color:#d00000">surveys</span> + <span style="color:#d00000">interviews</span> (**<span style="color:#d00000">mixed methods</span>**); statistical testing for the frequency effect; explicit limitations section.

**3) Limitations to <span style="color:#d00000">validity</span> (<span style="color:#d00000">positivist</span>):**
- **<span style="color:#d00000">Internal validity</span>:** they *infer* a nudge caused a restriction from a 10-minute time window — correlation, not certain causation; Phase-3 behavior is contingent on Phase-2 (carry-over). Lost/delayed nudges (connectivity) add noise.
- **<span style="color:#d00000">External validity</span>:** N=23, **self-selection bias**, skewed sample (65% female, median age 23, mostly Samsung, one city, AppOps-only Android versions) → can't claim it generalizes to all users/devices.
- **<span style="color:#d00000">Ecological validity</span>:** strong here (own devices, real life) — their main <span style="color:#d00000">validity</span> strength — though the study client/monitoring emails could mildly alter behavior.

**4) (If <span style="color:#d00000">interpretativist</span> — for contrast):** not the primary fit, but the <span style="color:#d00000">interview</span> strand could be judged on **<span style="color:#d00000">credibility</span>** (quotes grounded in data), **<span style="color:#d00000">transferability</span>** (rich description so others judge relevance), and **<span style="color:#d00000">reflexivity</span>** (researchers acknowledging their influence). Useful to mention to show you understand *both* worldviews.

---

### Prep Assignment 4 — Accessibility & further implications

**1) How MY idea (NWR) supports impairments:**
- **Permanent:** <span style="color:#d00000">multimodal</span> output means a blind/low-vision user gets a **<span style="color:#d00000">haptic</span> + <span style="color:#d00000">speech</span>/screen-reader** nudge instead of a purely **<span style="color:#d00000">visual</span>** full-screen; a motor-impaired user gets <span style="color:#d00000">voice</span> or shake input instead of precise taps; reducing nudge *volume* and timing them well lowers cognitive load.
- **Temporary:** arm in a cast / holding a baby → <span style="color:#d00000">motion</span> sensing detects one-handed/no-hand availability and prefers <span style="color:#d00000">haptic</span>, <span style="color:#d00000">voice</span>, or deferral over a modal needing two-handed dismissal.
- **Situational:** NWR's home turf — bright sun (defer <span style="color:#d00000">visual</span> → <span style="color:#d00000">haptic</span>), loud environment (suppress audio), driving/walking (<span style="color:#d00000">speech</span> or single <span style="color:#d00000">haptic</span>). These are textbook **<span style="color:#d00000">situational impairments</span>** in Microsoft's inclusive-design sense, and NWR is essentially a situational-impairment mitigator. *Gap:* if a user has *no routine* (e.g., a gig courier always semi-driving), the classifier has no clean "receptive" window — a real limitation.

**2) <span style="color:#d00000">Implications for design</span> (paper's + mine):**
- *Paper's own:* personalize; salient/sticky/not-annoying; configurable.
- *My additional implications:*
  - (i) *Same class of tech:* any **notification/interruption system** (not just privacy) should be **context-aware** — generalizes to digital-wellbeing prompts, security alerts, health reminders.
  - (ii) *OS/device level:* operating systems should expose a shared **"receptivity"/Do-Not-Disturb-with-reasoning API** so all apps defer to opportune moments — privacy as an OS service, not per-app.
  - (iii) *Combine with another paper:* pairing Almuhimedi with **Shklovski's "Leakiness and Creepiness"** shows the <span style="color:#d00000">privacy paradox</span> is **<span style="color:#d00000">learned helplessness</span>**, not laziness → nudges must offer *visible recourse*, not just fear. Pairing with **Cecchinato's <span style="color:#d00000">multi-device ecologies</span>** suggests nudges should reason across a whole **<span style="color:#d00000">artifact ecology</span>** (phone + watch), picking the best device to nudge on.
  - (iv) *Theory combination:* **<span style="color:#d00000">design principles</span>** — reify the "good moment" and add **<span style="color:#d00000">feedforward</span>** previews; **<span style="color:#d00000">Altman's privacy regulation</span>** — treat the nudge as a tool for users to selectively regulate access to the **<span style="color:#d00000">personal space</span>** the phone represents.

---

## PART 3 — LIKELY Q&A (the 7 example areas) — model answers

**1. Mobile design challenges addressed?** NWR tackles **<span style="color:#d00000">variable contexts of use</span>** and **<span style="color:#d00000">situational impairments</span>** head-on (its core), plus **<span style="color:#d00000">reduced screen real estate</span>** (it can downgrade from full-screen to a heads-up banner or non-<span style="color:#d00000">visual</span> channel). *Unaddressed:* **<span style="color:#d00000">limited input expressiveness</span>** — privacy choices are still fairly binary; I'd extend with graded "only while using" options. The **<span style="color:#d00000">fat-finger</span>/<span style="color:#d00000">occlusion</span>** problem persists for the drag interactions, mitigated by <span style="color:#d00000">voice</span>/long-press alternatives.

**2. <span style="color:#d00000">Design principles</span> (define + apply):** **<span style="color:#d00000">Feedforward</span>** = "feedback about future actions," guidance *before* you commit (like Pathward showing candidate gestures). In NWR, a preview shows what 'change settings' will open and what restricting will break — so users don't blindly tap then have to undo (the paper's permissive-readjustment problem). **<span style="color:#d00000">Reification</span>** = turning an abstract action/concept into a concrete manipulable object; I reify "a good moment" into an editable Receptive-state tile. If absent, users couldn't understand or override the system's timing decisions — reducing **<span style="color:#d00000">user control & freedom</span>** (<span style="color:#d00000">Nielsen</span>).

**3. <span style="color:#d00000">Modalities</span> & context:** Input = touch, <span style="color:#d00000">voice</span>, <span style="color:#d00000">motion</span> (shake-to-snooze); output = <span style="color:#d00000">visual</span>, <span style="color:#d00000">auditory</span>, **<span style="color:#d00000">haptic</span>**, <span style="color:#d00000">speech</span>. Appropriate because mobile contexts vary: <span style="color:#d00000">haptic</span> is glanceable while walking; <span style="color:#d00000">speech</span> frees eyes while driving; <span style="color:#d00000">visual</span> high-contrast suits a stationary low-vision user. *Where inappropriate:* **<span style="color:#d00000">speech</span> in a quiet <span style="color:#d00000">social context</span>** (a meeting/train) would leak sensitive data to bystanders and violate **<span style="color:#d00000">personal space</span>** — so NWR must fall back to silent <span style="color:#d00000">haptic</span> when the <span style="color:#d00000">social context</span> is uncertain.

**4. <span style="color:#d00000">Interaction qualities</span> (define the three):** **<span style="color:#d00000">Discoverability</span>** (helping users find hidden interactions/info — NWR surfaces invisible background data access), **<span style="color:#d00000">Efficiency</span>** (faster/fewer-error task performance — right-moment delivery cuts wasted nudges), **<span style="color:#d00000">Expressiveness</span>** (range of input possibilities — NWR's <span style="color:#d00000">multimodal</span> input + configurability). *Neglected:* I'm not deeply improving <span style="color:#d00000">expressiveness</span> of the *privacy decision itself* (still mostly restrict/keep); consequence = users can't express nuanced preferences, a gap a sibling "Comfort Profile" design would fill.

**5. Context where it shines vs. struggles:** *Shines:* a commuter with a stable routine — clear receptive windows (evening at home) and rich context signals → well-timed, well-<span style="color:#d00000">modality</span>'d nudges. *Struggles:* a user with constant low-grade multitasking and no routine (gig courier) — no clean receptive moment, so NWR either over-defers (never nudges) or misfires, collapsing toward the paper's random-timing problem.

**6. Data types & methods (paper) + strengths/limits:** (see Prep 2). *Strengths:* <span style="color:#d00000">mixed methods</span> triangulate *what* people did (logs) with *why* (<span style="color:#d00000">interviews</span>); own-device logging = high <span style="color:#d00000">ecological validity</span>. *Limitations:* inferring causation from a time window (<span style="color:#d00000">internal validity</span>); small, skewed sample (<span style="color:#d00000">external validity</span>). *Alternatives:* a controlled <span style="color:#d00000">lab experiment</span> would raise <span style="color:#d00000">internal validity</span> but kill <span style="color:#d00000">ecological validity</span>; a larger <span style="color:#d00000">survey</span> would generalize attitudes but lose <span style="color:#d00000">behavioral</span> grounding.

**7. Study design for my idea:** Goal = does context-aware delivery *cause* more engagement / less annoyance? → **<span style="color:#d00000">longitudinal</span> <span style="color:#d00000">within-subjects</span> <span style="color:#d00000">field experiment</span>**, <span style="color:#d00000">IV</span> = delivery strategy (random vs context-aware), DVs = act-on rate (<span style="color:#d00000">behavioral</span>/observed) + annoyance <span style="color:#d00000">Likert</span> (<span style="color:#d00000">attitudinal</span>/<span style="color:#d00000">self-reported</span>), <span style="color:#d00000">counterbalanced</span> for <span style="color:#d00000">order effects</span>, weeks compared for <span style="color:#d00000">novelty effects</span>, sensed context logged to attribute effects. Rationale: only a field setting exposes the real contexts that are the whole point.

---

## PART 4 — RAPID CONCEPT GLOSSARY (backup slide / memorize)
- **<span style="color:#d00000">Privacy paradox</span>**: stated concern ≠ observed behavior. **<span style="color:#d00000">Learned helplessness</span> / <span style="color:#d00000">privacy fatigue</span>**: repeated invasion + no recourse → stop responding even when defenses exist (Shklovski). **<span style="color:#d00000">Personal space</span>/<span style="color:#d00000">territoriality</span> / Altman**: phone = extension of self; privacy = selectively regulating access to oneself. **Nudge**: soft-paternalistic, choice-preserving. **Enhanced active choice**: highlight desired option by emphasizing the loss in the alternative. **Information asymmetry**: users vs. providers know unequally.
- **<span style="color:#d00000">Three waves</span>**: 1 performance/lab/experiments; 2 social/field/ethnography; 3 experience/in-the-wild/mixed. (This paper = <span style="color:#d00000">1st-wave</span> measurement on a <span style="color:#d00000">3rd-wave</span> everyday-life concern.)
- **<span style="color:#d00000">Design principles</span>**: <span style="color:#d00000">Reification</span>, <span style="color:#d00000">Polymorphism</span>, <span style="color:#d00000">Reuse</span>, <span style="color:#d00000">Feedforward</span>. **<span style="color:#d00000">Interaction qualities</span>**: <span style="color:#d00000">Discoverability</span>, <span style="color:#d00000">Efficiency</span>, <span style="color:#d00000">Expressiveness</span>. **5 contexts**: Physical, Temporal, Task, Social, Technical. **<span style="color:#d00000">Modalities</span>**: <span style="color:#d00000">visual</span>, <span style="color:#d00000">auditory</span>, <span style="color:#d00000">haptic</span>, touch, <span style="color:#d00000">speech</span>, text, <span style="color:#d00000">motion</span>, gaze…
- **Study**: field vs lab; <span style="color:#d00000">one-off</span> vs <span style="color:#d00000">longitudinal</span>; within vs between subjects; <span style="color:#d00000">IV</span>/<span style="color:#d00000">DV</span> + <span style="color:#d00000">levels</span>; tasks/<span style="color:#d00000">trials</span>; <span style="color:#d00000">order effects</span>; <span style="color:#d00000">novelty effects</span>; <span style="color:#d00000">control vs realism</span>. **Data**: qual/quant; <span style="color:#d00000">self-reported</span>/observed; <span style="color:#d00000">attitudinal</span>/<span style="color:#d00000">behavioral</span> (<span style="color:#d00000">behavioral</span>⇒observed; <span style="color:#d00000">attitudinal</span>⇒<span style="color:#d00000">self-reported</span>). **Worldviews**: <span style="color:#d00000">positivism</span> (internal/external/<span style="color:#d00000">ecological validity</span>) vs <span style="color:#d00000">interpretativism</span> (<span style="color:#d00000">credibility</span>/<span style="color:#d00000">transferability</span>/<span style="color:#d00000">reflexivity</span>). **Instruments**: <span style="color:#d00000">SUS</span>, <span style="color:#d00000">NASA-TLX</span>, <span style="color:#d00000">think-aloud</span>, <span style="color:#d00000">ESM</span>/diary, <span style="color:#d00000">thematic analysis</span>.
- **Ecosystems**: <span style="color:#d00000">walled gardens</span>; artifact/<span style="color:#d00000">digital ecologies</span>; <span style="color:#d00000">expression breakdowns</span>. **Accessibility**: permanent/temporary/<span style="color:#d00000">situational impairments</span>.
