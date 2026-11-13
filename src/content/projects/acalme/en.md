---
title: Acalme
summary: To make sense of your nights when you live with restless legs syndrome.
published: true
status: upcoming
platforms:
  - iPhone
  - Apple Watch
facts:
  - label: Devices
    value: iPhone (iOS 18 or later), optional Apple Watch (watchOS 10.6 or later)
  - label: Language
    value: French
images:
  - alt: The night summary
    caption: The night summary
  - alt: The daily journal
    caption: The daily journal
  - alt: The trend analysis
    caption: The trend analysis
  - alt: The two night-time gestures, on the wrist
    caption: The two night-time gestures, on the wrist
    device: watch
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
