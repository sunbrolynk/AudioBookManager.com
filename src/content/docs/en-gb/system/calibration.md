---
title: Calibration
description: How ABM learns to estimate conversion times.
---

Every finished conversion records how long it took relative to the audio length. ABM fits a line to those samples and uses it to predict how long the next job will take. **System > Calibration** shows what it has learned for each kind of job: converting, merging, splitting and adding chapters.

- **Samples for Full Confidence** is how many finished jobs it wants before it trusts an estimate.
- A button recalculates all the coefficients. Use it if estimates look wrong after a hardware change.

Nothing here is a setting you need to touch.
