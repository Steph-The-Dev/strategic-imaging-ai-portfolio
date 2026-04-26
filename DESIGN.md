# Design System Strategy: The Precision Architect

## 1. Overview & Creative North Star
The "Precision Architect" is a design system crafted to bridge the gap between the sterile, high-reliability world of Swiss Life Sciences and the complex, rhythmic nature of Advanced Data Engineering. This is not a "standard" portfolio layout; it is a digital environment that feels like a modern laboratory in Basel—hyper-organized, technologically advanced, and profoundly quiet.

**Creative North Star: The Precision Architect**
The system breaks the traditional "template" look through **Calculated Asymmetry**. By utilizing a grid that values empty space as much as content, we create an editorial feel. Data isn't just displayed; it is curated. We move away from generic "AI brain" graphics toward abstract waveforms and geometric signal data, reinforcing the consultant’s expertise in remote sensing and pharmaceutical data pipelines.

---

## 2. Design Theme & Tokens

### General Configuration
* **Color Mode:** LIGHT
* **Font Family:** INTER
* **Roundness:** ROUND_FOUR
* **Spacing Scale:** 3
* **Headline Font:** INTER
* **Body Font:** INTER
* **Label Font:** INTER

### Color Architecture
The color palette relies on a "Slate-Wash" foundation, using cool neutrals to allow the high-contrast CTAs and Primary Accents to feel like critical alerts or surgical precision points.

#### Core Colors
* **Primary:** `#0369a1`
* **Secondary:** `#f97316`
* **Tertiary:** `#334155`
* **Neutral:** `#64748b`

#### Specific Color Tokens
* `background`: `#f8f9ff`
* `surface`: `#f8f9ff`
* `surface_container_low`: `#eff4ff`
* `surface_container_lowest`: `#ffffff`
* `surface_container_high`: `#dce9ff`
* `surface_container_highest`: `#d3e4fe`
* `primary`: `#00507d`
* `primary_container`: `#0369a1`
* `primary_fixed`: `#cde5ff`
* `secondary`: `#9d4300`
* `secondary_container`: `#fd761a`
* `secondary_fixed`: `#ffdbca`
* `on_surface`: `#0b1c30`
* `on_surface_variant`: `#40474f`
* `outline`: `#707881`
* `outline_variant`: `#c0c7d1`

### The "No-Line" Rule
To achieve a premium, high-end feel, **1px solid borders are prohibited for sectioning.** Boundaries must be defined solely through background color shifts. 
- Use `surface` (`#f8f9ff`) for the main page background.
- Use `surface-container-low` (`#eff4ff`) to denote a new content section or a large content well.
- This creates a seamless, "molded" look rather than a boxy, partitioned one.

### Surface Hierarchy & Nesting
Treat the UI as a series of physical layers, like stacked sheets of architectural vellum.
- **Level 0:** `surface` (The base).
- **Level 1:** `surface-container-low` (Secondary content areas).
- **Level 2:** `surface-container-lowest` (`#ffffff`) for cards or interactive modules.
- **Level 3:** Floating elements using semi-transparent `surface-container-highest` with a `backdrop-blur` of 12px-20px (Glassmorphism).

### Signature Textures
Avoid flat backgrounds in Hero sections. Use a subtle linear gradient transitioning from `primary` (`#00507d`) to `primary-container` (`#0369a1`) at a 15-degree angle. Overlay this with a high-frequency signal waveform (SVG) at 5% opacity to evoke data sensing and clinical monitoring.

---

## 3. Typography: Editorial Authority
The type system pairs the human-centric Swiss clarity of **Inter** with the technical rigor of **JetBrains Mono**.

*   **Display & Headlines (Inter):** Set with tight letter-spacing (-0.02em) and heavy weights. These should feel like headers in a premium medical journal.
*   **Body Copy (Inter):** Generous line-height (1.6) to ensure readability in long-form case studies.
*   **Data & Labels (JetBrains Mono):** Used for all "engineering" moments—tags, timestamps, code snippets, and data points. This font should always be set in `label-md` or `label-sm` to maintain a "technical blueprint" aesthetic.

**Visual Hierarchy Tip:** Use `primary` sparingly for small Title-SM labels to draw the eye to category names before the user reads the Headline-LG.

---

## 4. Elevation & Depth
We reject the "Material" drop shadow in favor of **Tonal Layering.**

*   **The Layering Principle:** Depth is achieved by placing a `surface-container-lowest` card on a `surface-container-low` background. The contrast in value creates a "lift" that is felt rather than seen.
*   **Ambient Shadows:** For floating CTAs or Modals, use an extra-diffused shadow: `box-shadow: 0 20px 40px rgba(11, 28, 48, 0.05);`. Note that the shadow is tinted with the `on-surface` color (`#0b1c30`), not pure black, to simulate natural ambient light.
*   **The "Ghost Border" Fallback:** If a border is required for accessibility (e.g., in Dark Mode), use the `outline-variant` token at 15% opacity. It should be a suggestion of an edge, not a hard stop.

---

## 5. Components

### Buttons
- **Primary:** `bg-secondary` (Orange-500) with `on-secondary` (White) text. Use a `md` (0.375rem) corner radius. On hover, transition to `bg-secondary-fixed` for a sophisticated darkening effect.
- **Secondary:** A "Glass" button using `surface-container-high` at 40% opacity with a `backdrop-blur`. This allows the background waveform to peek through.
- **Tertiary:** Pure text using `JetBrains Mono`, all caps, with a small arrow icon `→` that moves 4px on hover.

### Cards & Case Studies
- **Forbid dividers.** Use `body-lg` spacing (1rem) between elements.
- Case study cards should feature a "Data Strip" at the top: a 4px tall accent line of `primary-fixed` to denote the clinical nature of the work.

### Technical Chips
- Used for "Stack" or "Domain" tags. 
- Style: `bg-surface-container-high`, `text-on-surface-variant`, font: `JetBrains Mono`. 
- No border.

### Input Fields
- Understated. No background color—only a "Ghost Border" bottom-stroke. On focus, the bottom-stroke transforms into a 2px `primary` (Sky Blue) line.

### Signal Waveforms (Unique Component)
- Decorative background elements. Use thin (0.5pt) strokes of `outline-variant`. These should look like EKG lines or LiDAR point clouds, representing the consultant's work in Pharma and Remote Sensing.

---

## 6. Do's and Don'ts

### Do:
- **Do** use asymmetrical margins. If the left margin is 10%, make the right margin 20% to create an "Editorial" layout.
- **Do** use JetBrains Mono for anything involving a number or a technical specification.
- **Do** lean into `bg-slate-900` for "Deep Work" or "Data Lab" sections to create high-contrast focus moments.

### Don't:
- **Don't** use icons with rounded, bubbly "friendly" corners. Use sharp, technical, thin-stroke icons (1px stroke weight).
- **Don't** use standard "AI" imagery (glowing brains, digital hands). Use macro photography of laboratory glassware or satellite-mapped topography.
- **Don't** use 100% opaque borders to separate list items. Use vertical white space (`py-6` or `py-8`) and a background shift.
- **Don't** use "Blue" for CTAs. Blue is for clinical trust (Primary); Orange is for the "Action" of engineering (Secondary).

---

## 7. Spacing Scale
Maintain a strict **8px grid system**, but encourage "Gaps of Silence." 
- **Section Spacing:** 128px to 160px (Vertical).
- **Component Spacing:** 24px to 32px.
- **Text Grouping:** 8px to 12px.

By strictly adhering to these large gaps, the design system communicates that the consultant is not "busy" but "selective"—a hallmark of senior-level expertise.
