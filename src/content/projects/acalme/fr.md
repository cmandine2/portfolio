---
title: Acalme
summary: Pour comprendre ses nuits quand on vit avec le syndrome des jambes sans repos.
published: true
status: upcoming
platforms:
  - iPhone
  - Apple Watch
facts:
  - label: Appareils
    value: iPhone (iOS 18 ou ultérieur), Apple Watch en option (watchOS 10.6 ou ultérieur)
  - label: Langue
    value: Français
images:
  - alt: Le récapitulatif de la nuit
    caption: Le récapitulatif de la nuit
  - alt: Le journal de la journée
    caption: Le journal de la journée
  - alt: L'analyse des tendances
    caption: L'analyse des tendances
  - alt: Les deux gestes de la nuit, au poignet
    caption: Les deux gestes de la nuit, au poignet
    device: watch
---

## Le problème

Les données de sommeil brutes, celles de l'app Santé ou de la montre, ne suffisent pas à comprendre le syndrome des jambes sans repos. Il faut les croiser avec le vécu : impatiences ressenties, levers nocturnes, traitements, facteurs de la journée. Et cette saisie doit tenir en un geste, au milieu de la nuit.

## Ce que fait l'app

- Noter une impatience en un geste, depuis l'app, un widget, le Centre de contrôle ou l'Apple Watch.
- Retrouver le récapitulatif de chaque nuit : phases de sommeil, réveils, levers détectés.
- Tenir un journal des facteurs du quotidien et des traitements.
- Repérer des tendances à partager avec son médecin. L'app aide à observer, elle ne remplace pas un avis médical.

## Mes choix de conception

- Swift 6 et SwiftUI, sur iPhone, Apple Watch et widgets.
- Accès à Santé en lecture seule : l'app n'écrit jamais dans Santé.
- Testée sur 13 profils d'usage (avec ou sans montre, autorisations refusées, historique court ou long…).
