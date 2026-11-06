# FocusBloom: A Focus Timer Designed with Human-Computer Interaction Principles

**COMP 3583 – Human Computer Interaction**  
**Fall 2026**  
**Student Name:** ________________________  
**Student ID:** ________________________  
**Date:** December 2026

---

## 1. Introduction

In today’s digital world, many students and workers struggle to maintain focus due to constant distractions from phones, social media, and notifications. Existing focus applications are often overloaded with features, which can increase cognitive load and reduce usability.

This project presents **FocusBloom**, a simple and clean web-based focus timer designed using Human-Computer Interaction (HCI) principles. The goal of FocusBloom is to help users improve concentration through the Pomodoro technique while providing a calm, efficient, and enjoyable experience.

The main objectives of this project were:
- To design a lightweight and usable focus timer
- To apply usability and user experience goals in the interface
- To evaluate the design with real users

---

## 2. Problem Statement

Many existing focus tools have the following issues:
- Too many features that distract the user
- Poor visual feedback of remaining time
- Interfaces that feel complex or heavy
- Lack of clear progress tracking

FocusBloom aims to solve these problems by offering a minimal, clear, and aesthetically pleasing interface that supports focused work.

---

## 3. Related Products

Two similar products were considered:

**1. Forest App**  
Forest is a popular focus app that grows a virtual tree while the user focuses.  
*Difference:* Forest is gamified and more complex. FocusBloom is simpler and focuses purely on clear timing and minimal distraction.

**2. Tomato Timer / generic Pomodoro websites**  
These offer basic timers but often have outdated designs and limited visual feedback.  
*Difference:* FocusBloom provides a modern visual progress ring, better aesthetics, session tracking, and stronger attention to usability and UX goals.

---

## 4. Design Process and HCI Theory Applied

FocusBloom was designed by applying key concepts from the course:

### 4.1 Usability Goals
- **Effective**: Users can successfully complete focus sessions.
- **Efficient**: Starting or switching modes requires only one click.
- **Easy to learn**: Clear labels and familiar layout reduce learning time.
- **Easy to remember**: Consistent design helps users remember how to use it.
- **Safe**: Clear button states and visual feedback prevent errors.
- **Utility**: Tracks number of sessions and total focus time.

### 4.2 User Experience (UX) Goals
- **Satisfying**: Completing a session feels rewarding.
- **Enjoyable**: Smooth interactions and clean animations.
- **Aesthetically pleasing**: Modern colour scheme and balanced layout.
- **Motivating**: Progress tracking encourages continued use.

### 4.3 Cognitive Aspects
- **Attention**: Minimal interface reduces competing stimuli.
- **Perception**: Large progress ring and clear time display make remaining time easy to perceive.
- **Memory**: Recognition is supported through consistent icons and labels (rather than requiring recall).

### 4.4 Interface Type
FocusBloom uses a standard **Graphical User Interface (GUI)** delivered through a web browser. This choice was made because:
- It is accessible on any device without installation
- It is easy to evaluate
- It matches the target users (students)

---

## 5. System Description

FocusBloom is a single-page web application built with HTML, CSS, and JavaScript.

### Main Features:
- **Focus Mode** (25 minutes)
- **Short Break** (5 minutes)
- **Long Break** (15 minutes)
- Visual circular progress ring
- Start, Pause, and Reset controls
- Session counter and total focus time (saved in browser using localStorage)
- Responsive design for both desktop and mobile

### Design Highlights:
- Clean layout with strong visual hierarchy
- High contrast for readability
- Immediate visual feedback when the timer ends
- No unnecessary elements that could distract the user

---

## 6. User Evaluation

### 6.1 Evaluation Method
A small user study was conducted with university students.

- **Participants**: [Write number, e.g., 6 students]
- **Tasks**: Start focus session, pause/resume, reset, switch modes, check progress
- **Methods**:
  - Observation
  - Questionnaire (8 close-ended + 3 open-ended questions)
- **Metrics**: Task success, ease of use ratings, satisfaction, qualitative feedback

### 6.2 Results

**Quantitative Findings** (example – replace with your real data):
- Average rating for “Ease of starting a session”: 4.7 / 5
- Average rating for “Visual clarity of timer”: 4.8 / 5
- Average overall usability rating: 4.5 / 5
- Most participants said they would use the tool again

**Qualitative Findings**:
- Users liked the clean design and progress ring
- Some users suggested adding sound options or custom times
- Overall feedback was positive regarding simplicity

### 6.3 Discussion of Results
The evaluation showed that FocusBloom successfully met most usability and UX goals. Users found the interface easy to learn and aesthetically pleasing. The progress ring was particularly appreciated for providing clear feedback.

Minor improvements could include optional sound notifications and the ability to customise session lengths.

---

## 7. Limitations

- Small number of participants (limited generalisation)
- Evaluation was conducted in a short session rather than long-term use
- Currently only available as a web application (no native mobile app)

---

## 8. Conclusion and Future Work

FocusBloom demonstrates that applying HCI principles (usability goals, UX goals, and cognitive considerations) can produce a simple yet effective focus tool. The clean design reduces cognitive load and supports users in maintaining concentration.

**Future improvements** could include:
- Customisable session lengths
- Optional ambient sounds
- Dark mode
- Simple statistics over multiple days

Overall, the project successfully applied course concepts to a real interactive system and validated the design through user evaluation.

---

## 9. References

- Rogers, Y., Sharp, H., & Preece, J. (2023). *Interaction Design: Beyond Human-Computer Interaction* (6th ed.). Wiley.
- Course lecture slides – COMP 3583 FA01, Fall 2026.
- Nielsen, J. – Usability heuristics (general reference).

---

**Appendix** (optional)
- Link to live website: ________________________
- Screenshots of the interface
- Full questionnaire responses summary
