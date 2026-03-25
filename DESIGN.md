# Design System Document: High-End Editorial Portfolio

## 1. Overview & Creative North Star
The Creative North Star for this design system is **"The Luminous Curator."** 

This isn't a standard portfolio; it is a high-end digital gallery that treats code and design as fine art. We are moving away from the "boxy" constraints of traditional web grids. Instead, we use intentional asymmetry, overlapping elements, and vast negative space to create a dynamic flow. The interface feels alive through the use of **Glassmorphism**, where surfaces aren't just blocks of color but layers of depth that interact with vibrant, multi-stop gradients pulsating in the background. It is a balance of professional structural integrity and creative "fancy" flair.

---

## 2. Colors
Our palette centers on a deep, obsidian-like foundation contrasted by high-energy coral and ethereal lavender.

### The "No-Line" Rule
**Explicit Instruction:** Designers are prohibited from using 1px solid borders for sectioning. We define boundaries exclusively through background shifts. For example, a `surface-container-low` section should sit directly on a `background` floor. Use the Spacing Scale (`20` or `24`) to create breathing room that signals a transition, rather than a hard line.

### Surface Hierarchy & Nesting
Treat the UI as a physical stack of frosted glass.
*   **Base:** `surface` (#0e0e11)
*   **Low Elevation:** `surface-container-low` (#131316) for large structural sections.
*   **High Elevation:** `surface-container-highest` (#25252a) for interactive cards or floating modals.
Nesting should always move from darker to lighter to simulate light hitting the top-most layer.

### The "Glass & Gradient" Rule
To achieve the "Fancy" vibe, use `surface-variant` with a `backdrop-blur` (12px–20px) and 40%–60% opacity for floating navigation or hovering cards. 
*   **Signature Textures:** Apply a multi-stop linear gradient from `primary` (#ff9068) to `primary-container` (#fb7c4d) on primary CTAs. For hero background "blobs," use radial gradients transitioning from `tertiary` (#d48aff) to transparent to add "soul" to the dark canvas.

---

## 3. Typography
We utilize a sophisticated pairing of **Manrope** (Display/Headlines) and **Inter** (Body/Labels).

*   **Display (Manrope):** Massive, authoritative, and airy. `display-lg` (3.5rem) should be used for hero statements with tight letter-spacing (-0.02em) to create a high-fashion editorial look.
*   **Headline (Manrope):** Used for section titles. `headline-lg` (2rem) provides a clear entry point into new content chapters.
*   **Body (Inter):** Clean and highly legible. `body-lg` (1rem) is the standard for storytelling. 
*   **Labels (Inter):** Used for metadata and chips. `label-md` (0.75rem) should often be uppercase with increased letter-spacing (+0.05em) to denote "Premium" status.

The contrast between the "organic" curves of Manrope and the "technical" precision of Inter reflects the intersection of creativity and professional engineering.

---

## 4. Elevation & Depth
Depth is achieved through **Tonal Layering**, not shadows.

*   **The Layering Principle:** Place a `surface-container-lowest` card on a `surface-container-low` section. The subtle shift in hex code creates a natural lift that feels sophisticated and modern.
*   **Ambient Shadows:** If a card must "float" (e.g., a testimonial), use a shadow color tinted with `on-surface` (#fbf8fc) at 5% opacity with a 40px blur. Never use pure black shadows.
*   **The "Ghost Border" Fallback:** If accessibility requires a border, use the `outline-variant` token at 15% opacity. It should be felt, not seen.
*   **Glassmorphism:** Apply to any element that sits "above" the content. A `surface-bright` fill at 10% opacity with a heavy blur creates the signature "High-End" frosted look.

---

## 5. Components

### Buttons
*   **Primary:** Gradient fill (`primary` to `primary-container`), `full` roundedness scale, `body-md` bold text. No border.
*   **Secondary:** Glass effect. `surface-variant` at 20% opacity, `backdrop-blur`, and a "Ghost Border" of `primary` at 30% opacity.
*   **Tertiary:** Pure text using `primary` color with an underline that appears only on hover.

### Cards & Lists
*   **Cards:** Use `surface-container` tiers. **Forbid the use of divider lines.** Use Spacing Scale `6` to separate header from body text. 
*   **Interactive Chips:** Use `secondary-container` for the background and `on-secondary-container` for text. Corner radius should be `full`.

### Input Fields
*   **Styling:** Fields should be `surface-container-highest` with a bottom-only "Ghost Border." 
*   **States:** On focus, the border transitions to a 2px `primary` coral line, and a subtle `primary` outer glow (4px blur) is applied.

### Signature Component: The "Project Float"
An asymmetric card where the image overlaps the container boundary. Use `xl` (1.5rem) roundedness for the image and `md` (0.75rem) for the text container to create visual tension.

---

## 6. Do's and Don'ts

### Do
*   **Do** use white space as a structural element. If in doubt, add more padding (Scale `16` or `20`).
*   **Do** use the `tertiary` (lavender) color for accent icons or small decorative "doodles" to break the seriousness of the dark theme.
*   **Do** ensure text on glass surfaces meets AA contrast ratios by adjusting the background blur density.

### Don't
*   **Don't** use 100% opaque white for body text. Use `on-surface-variant` (#acaaae) for secondary text to maintain a hierarchy of information.
*   **Don't** use standard "drop shadows." They look "cheap." Use Tonal Layering or Ambient Shadows.
*   **Don't** align everything to a center axis. Use the dynamic nature of the system to offset images to the left or right, creating a magazine-style flow.
*   **Don't** use sharp corners. Use the Roundedness Scale `lg` (1rem) or `xl` (1.5rem) to maintain the "Soft Modern" aesthetic.