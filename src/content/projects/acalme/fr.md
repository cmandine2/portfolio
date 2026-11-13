---
title: Acalme
summary: Pour comprendre ses nuits quand on vit avec le syndrome des jambes sans repos.
published: true
status: upcoming
icon: ./images/icon.png
platforms:
  - iPhone
  - Apple Watch
facts:
  - label: Appareils
    value: iPhone (iOS 18 ou ultérieur), Apple Watch en option (watchOS 10.6 ou ultérieur)
  - label: Langue
    value: Français
images:
  - src: ./images/night.png
    alt: "Écran « Nuit agitée » : 6 h 30 de sommeil, 3 impatiences, et la frise des phases de sommeil"
    caption: Le récapitulatif de la nuit
  - src: ./images/journal.png
    alt: "Écran de saisie : boutons Coucher et Impatience, puis les facteurs de la journée à cocher"
    caption: Le journal de la journée
  - src: ./images/analysis.png
    alt: "Écran Analyse : barres montrant les facteurs liés à plus ou moins d'impatiences"
    caption: L'analyse des tendances
  - src: ./images/watch.png
    alt: "Écran de l'Apple Watch : « Au lit depuis 22:52 » et un compteur de 3 impatiences cette nuit"
    caption: Les deux gestes de la nuit, au poignet
    device: watch
---

## Pourquoi cette app

Je vis avec le syndrome des jambes sans repos. Après avoir essayé beaucoup de traitements et de médecines douces sans réel résultat, j'ai voulu comprendre ce qui avait un impact sur mon sommeil et mes impatiences. J'ai donc créé Acalme, d'abord pour mes propres nuits.

Son nom est un jeu de mots : Acalme se dit « accalmie » en français et « <span lang="en">a calm me</span> » en anglais.

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
