---
title: Accessibility in Dashboard
redirect_from:
  - /docs/latest/accessibility
---

# Accessibility in Dashboard

Dashboard is not yet fully compliant with [the US federal government's Section 508 standard][508-accessibility]. Some specific areas where Dashboard we still have work to do include:

- Dashboard lacks a method to allow screen readers to skip over repetitive navigation elements.
- Dashboard is extremely close but not 100% compliant at providing text equivalents for all non-text elements.
- Most of our form elements are selectable by tabbing through elements.
- Dashboard has minimal transition animations in it, but we have not yet tested whether the range of flickering is always between 2 and 55 Hertz. If you've opted for [Reduce Motion / Remove Animation](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-reduced-motion#user_preferences) settings in your OS to take advantage of the `prefers-reduced-motion` CSS media feature, Dashboard will disable animations.
- Dashboard's data tables do not have row and column headers identified in markup.
- We do not yet have a published description of our accessibility and compatibility features.
- Since Dashboard is a React-based web application, it cannot function without scripting (i.e., JavaScript) turned on.

If you'd like to help us address these accessibility gaps, please see [our developers' guide][developers-guide].

[508-accessibility]: https://section508.gov/
[developers-guide]: ../developers-guide/start.md
