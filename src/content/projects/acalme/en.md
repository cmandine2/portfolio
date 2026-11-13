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
  - label: The name
    value: 'A play on words: Acalme reads as “a calm me” in English and as “<span lang="fr">accalmie</span>” (a lull) in French.'
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
---

## The problem

Raw sleep data, from the Health app or the watch, is not enough to understand restless legs syndrome. It has to be set against what you actually lived through: the urges to move, the times you got up at night, treatments, factors from the day. And logging all this has to take a single gesture, in the middle of the night.

## What the app does

- Log an episode in a single gesture, from the app, a widget, Control Center or the Apple Watch.
- Review a summary of each night: sleep stages, awakenings, detected get-ups.
- Keep a journal of everyday factors and treatments.
- Spot trends to share with your doctor. The app helps you observe; it does not replace medical advice.

## My design choices

- Swift 6 and SwiftUI, on iPhone, Apple Watch and widgets.
- Read-only access to Health: the app never writes to Health.
- Tested against 13 usage profiles (with or without a watch, permissions denied, short or long history…).
