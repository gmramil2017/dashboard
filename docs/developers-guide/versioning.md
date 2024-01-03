---
title: Dashboard release versioning
---

# Dashboard release versioning

We follow our own flavor of the [semantic versioning guidelines](https://semver.org/) in order to distinguish the [open-source version](https://www.metabase.com/product/starter) of Dashboard from the paid, source-available version of Dashboard (available in the [Pro](https://www.metabase.com/product/pro) and [Enterprise](https://www.metabase.com/product/enterprise) plans).

Semantic versioning typically follows the format: `Major.Minor.Point.Patch`. For example, version `3.15.2` or `3.15.2.1`.

With Dashboard releases, we prefix the version with a `0` or `1`, depending on the license.

## The Dashboard version schema

```
License.Major.Point.Hotfix
```

E.g.,

```
v0.46.3.1
```

`v0.46.3.1` would be for a hotfix (`1`) for the third (`3`) point release of Dashboard `46`, the open-source edition (`0`).

### License

- `0` for the free, open-source version (sometimes called OSS, for open-source software).
- `1` for the paid, source-available version that has all the bells and whistles (sometimes called EE for "Enterprise Edition").

### Major

We release major version when we introduce new features or breaking changes.

### Point

Sometimes called a minor release, we issue point releases when we add bug fixes and refinements to existing features.

### Hotfix

Sometimes called a patch release, we issue these hotfix releases to fix security issues in a timely manner, or to undo a horrific regression.

## Other release terms

### The Gold Release

The gold release is the first release of a new major version of Dashboard. So for Dashboard version 46, the gold releases would be:

- `v0.46.0` (the OSS version)
- `v1.46.0` (the EE version)

### Release Candidates

We usually publish release candidates to kick the tires on new features before releasing a new major version (a gold release). To distinguish these release candidates, we append an `-RC#` at the end.

E.g.,

- `v1.46.0-RC1` (the first release candidate for the EE version)
- `v0.46.0-RC3` (the third release candidate for the OSS version)

## Further reading

- [Dashboard releases on Github](https://github.com/metabase/metabase/releases)
- [Dashboard release blog posts](https://www.metabase.com/releases)
