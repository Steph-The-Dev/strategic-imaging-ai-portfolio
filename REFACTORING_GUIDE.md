# Website Copy Refactoring Guide: "The Hybrid Architect"

This document serves as the Source of Truth for the portfolio's copy. It captures the original "System-Style" text and provides a "Hybrid" alternative that balances your technical authority with human readability.

---

## Strategy: The Hybrid Balance
- **Keep:** The visual "System" aesthetics (status lights, monospaced labels, IDs).
- **Change:** Narrative paragraphs should move from "Machine-speak" to "Senior Engineer-speak."
- **Goal:** Reduce cognitive load for recruiters/managers while impressing technical peers.

---

## 1. Hero Section (`src/components/Hero.astro`)

### Original
- **Status Label:** `System Status: Operational`
- **Headline:** `Bridging Visual Logic with Data Science.`
- **Overview:** `[DOMAIN_OVERVIEW]: Leveraging two decades of expertise in digital signal processing and chromatic engineering to build scalable machine learning architectures. Specializing in Computer Vision, predictive modeling, and algorithmic visual optimization.`
- **Buttons:** `EXECUTE_PROJECT_VIEW` | `INITIATE_CONTACT`

### Hybrid Alternative
- **Status Label:** `System Status: Active & Available`
- **Headline:** `Bridging Visual Expertise with Data Science.`
- **Overview:** "Combining 20 years of digital signal processing and color science with modern machine learning. I build high-precision computer vision architectures that help machines see with human-level accuracy."
- **Buttons:** `VIEW CASE STUDIES` | `GET IN TOUCH`

---

## 2. Profile Section (`src/components/Profile.astro`)

### Original Heading
- `The Bridge Builder.`
- `"Aligning advanced AI models with rigorous business requirements."`

### Original Content Blocks
- **Strategic_Interface:** "Beyond technical implementation, I act as a strategic interface. My background uniquely combines a degree in Business Administration with rigorous technical workflow management..."
- **Data_Integrity:** "Years of handling massive, unstructured visual data pipelines taught me that a machine learning model is only as good as the signal it receives..."

### Hybrid Alternative
- **Headline:** `The Strategic Engineer.`
- **Sub-quote:** "Translating complex AI capabilities into measurable business value."
- **Strategic Interface:** "I act as the bridge between technical execution and business goals. With a background in Business Administration, I ensure that advanced AI models solve real-world problems in high-stakes fields like Life Sciences and ESG."
- **Data Integrity:** "A model is only as good as its data. My experience with massive visual pipelines ensures that every system I build is founded on robust validation, quality assurance, and clean signal processing."

---

## 3. Expertise / Career Phases (`src/components/Expertise.astro` & `CareerPhase.astro`)

### Original (Strategic Convergence)
`[STRATEGIC_CONVERGENCE]: The trajectory follows a precise integration of business administration (Logic), high-end media production (Signal), and academic rigor (Intelligence)...`

### Hybrid Alternative
**The Strategic Convergence:** "My career spans three critical domains: business logic, professional signal processing, and academic research. This rare combination allows me to build AI systems that are both technically sophisticated and commercially scalable."

---

## 4. Case Studies & Projects (`src/content/projects/*.md`)

### Example: Stain Normalization
- **Original Description:** `A computer vision suite for normalizing H&E whole-slide images... eliminates laboratory color variations while maintaining natural micro-contrast.`
- **Original Label:** `Report ID: SPEC_LAB_NORM_01`

### Hybrid Alternative
- **Description:** "A specialized tool for standardizing medical histology images. It removes color inconsistencies caused by different lab environments, ensuring AI diagnostic models remain accurate and reliable."
- **Label:** (Keep the ID for style, but add a human subtitle): `Project Alpha: Medical Image Standardization`

---

## 5. Contact Section (`src/components/Contact.astro`)

### Original
- **Headline:** `Visual INTUITION. Algorithmic PRECISION.`
- **Role Focus:** `[ROLE_FOCUS]: Computer Vision / ML Engineer`
- **Button:** `INITIATE_DISCUSSION`

### Hybrid Alternative
- **Headline:** `Visual Intuition. Scalable Precision.`
- **Role Focus:** `Specializing in Computer Vision & ML Engineering`
- **Button:** `LET'S CONNECT`

---

## Instructions for Implementation
When you are ready to apply these changes:
1. Provide this file to the agent.
2. Specify if you want a **Full Refactor** (all sections) or a **Targeted Refactor** (e.g., "Just the Hero and Profile").
3. The agent will then perform surgical `replace` calls on the respective `.astro` and `.md` files.
