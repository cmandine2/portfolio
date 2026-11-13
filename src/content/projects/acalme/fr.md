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

## La solution

Acalme est un journal de nuit. Le principe : noter le moins possible, et laisser l'app croiser le reste.

1. **Noter d'un geste.** Une impatience ou le coucher se notent en un tap, depuis l'app, un widget, le Centre de contrôle ou l'Apple Watch.
2. **Croiser avec le sommeil.** L'app lit les nuits dans l'app Santé et y replace les impatiences. En quelques taps, on ajoute les facteurs de la journée et les traitements.
3. **Voir ce qui ressort.** Au fil des semaines, l'analyse montre ce qui va avec des nuits plus calmes ou plus agitées. Quand un écart est trop faible pour être affirmé, l'app le dit.

## Ce que fait l'app

- Noter une impatience en un geste, depuis l'app, un widget, le Centre de contrôle ou l'Apple Watch.
- Retrouver le récapitulatif de chaque nuit : phases de sommeil, réveils, levers détectés.
- Tenir un journal des facteurs du quotidien et des traitements.
- Repérer des tendances à partager avec son médecin. L'app aide à observer, elle ne remplace pas un avis médical.

## Mes choix de conception

- Swift 6 et SwiftUI, sur iPhone, Apple Watch et widgets.
- Accès à Santé en lecture seule : l'app n'écrit jamais dans Santé.
- Testée sur 13 profils d'usage (avec ou sans montre, autorisations refusées, historique court ou long…).
