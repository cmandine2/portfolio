---
title: Acalme
summary: To make sense of your nights when you live with restless legs syndrome.
published: true
status: upcoming
icon: ./images/icon.png
platforms:
  - iPhone
  - Apple Watch
facts:
  - label: Devices
    value: iPhone (iOS 18 or later), optional Apple Watch (watchOS 10.6 or later)
  - label: Language
    value: French
images:
  - src: ./images/night.png
    alt: "Restless night screen, in French: 6 h 30 of sleep, 3 urges to move and the sleep stage timeline"
    caption: The night summary
  - src: ./images/journal.png
    alt: "Logging screen, in French: Bedtime and Urge to move buttons, then the day's factors to tick"
    caption: The daily journal
  - src: ./images/analysis.png
    alt: "Analysis screen, in French: bars showing the factors linked to more or fewer urges to move"
    caption: The trend analysis
  - src: ./images/watch.png
    alt: "Apple Watch screen, in French: in bed since 22:52, and a counter showing 3 urges to move tonight"
    caption: The two night-time gestures, on the wrist
    device: watch
---

## Why this app

I live with restless legs syndrome. After trying many treatments and alternative therapies without real results, I wanted to understand what was affecting my sleep and my urges to move. So I built Acalme, first of all for my own nights.

Its name is a play on words: Acalme sounds like “a calm me” in English and like “<span lang="fr">accalmie</span>” (a lull) in French.

## The solution

Acalme is a night journal. The principle: log as little as possible, and let the app connect the rest.

1. **Log in one gesture.** An urge to move or bedtime is logged in one tap, from the app, a widget, Control Center or the Apple Watch.
2. **Set it against sleep.** The app reads nights from the Health app and places the urges to move on them. A few taps add the day's factors and treatments.
3. **See what stands out.** Over the weeks, the analysis shows what goes with calmer or more restless nights. When a difference is too small to be stated, the app says so.

## What the app does

- Log an episode in a single gesture, from the app, a widget, Control Center or the Apple Watch.
- Review a summary of each night: sleep stages, awakenings, detected get-ups.
- Keep a journal of everyday factors and treatments.
- Spot trends to share with your doctor. The app helps you observe; it does not replace medical advice.

## My design choices

- Swift 6 and SwiftUI, on iPhone, Apple Watch and widgets.
- Read-only access to Health: the app never writes to Health.
- Tested against 13 usage profiles (with or without a watch, permissions denied, short or long history…).
