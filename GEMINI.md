# Project Instructions: Strategic Imaging AI Portfolio

## Narrative Strategy: The Bridge Builder
The core narrative of this portfolio is the **Strategic Convergence** (or "Pixels to Patterns"). It bridges 20 years of visual domain expertise (Digital Signal Processing, Chromatic Engineering) with modern Applied Data Science.

- **Keywords**: Signal Integrity, Optical Physics, Architectural Scalability, Domain Knowledge.
- **Narrative Hook**: "For 20 years, I optimized signals for human perception. Now, I engineer architectures that allow machines to see with that same precision."

## Design System: Precision Architect (Refinements)
In addition to `DESIGN.md`, the following conventions apply:

### Component: Profile (`Profile.astro`)
- **Alignment**: The Title Column (left) and Content Column (right) must have synchronized top padding (`pt-12 lg:pt-16`) to maintain a clean horizontal grid axis.
- **Labeling**: System-style labels (e.g., `Operator_Profile`) should be absolute-positioned at `top-0` to sit above the image module without displacing it.
- **Image Styling**:
    - **Grayscale**: Default `grayscale`, transition to color on hover (`duration-700`).
    - **Scanlines**: Rhythmic overlay at `opacity-40`. Must fade to `opacity-0` on `group-hover`.
    - **Framing**: Use `aspect-square` with a 2px border matching the `on-background` token.
    - **Mobile Interactivity**: Implement a touch-to-toggle `is-active` state via JavaScript for devices where hover is unavailable.

### Content Blocks & Rhythmic Echo
- **Style**: Use the "Domain Overview" pattern for key descriptive blocks.
- **Rules**: Font: `JetBrains Mono`, Left Border: `4px solid primary`, Padding: `pl-6 py-1`.
- **Contrast**: In Dark Mode, ensure headers use `text-primary-fixed` for optimal readability.

### Borders & Sectioning
- Prefer background color shifts (`surface` to `surface-container-low`) over 1px borders for major sections.
- Use `border-outline-variant` sparingly for internal component modules (like the Profile image frame).
