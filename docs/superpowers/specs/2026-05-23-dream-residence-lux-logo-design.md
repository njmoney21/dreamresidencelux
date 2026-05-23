# Dream Residence Lux — Logo Design Spec
**Date:** 2026-05-23  
**Brand:** Dream Residence Lux  
**Deliverable:** SVG logo (primary horizontal version)

---

## Brand Summary

Luxury real estate brand targeting premium apartment buyers/renters. Logo must communicate prestige, elegance, and trustworthiness. Primary use: website header and Gmail email signature.

---

## Layout

**Horizontal** — icon left, vertical rule center, text stack right. Vertically centered alignment throughout.

```
[ Arch Icon ] | Dream Residence Lux
               PREMIUM RESIDENCE
```

A fine vertical rule (1px, gold at 60% opacity) separates the icon from the text.

---

## Icon

- Shape: Roman semicircular arch (solid fill, not outline)
- Color: Gold `#C9A84C`
- Represents a grand entrance — architectural, aspirational
- Sized to be compact and legible at small sizes (navbar, email sig)

---

## Typography

| Element | Font | Weight | Color | Style |
|---|---|---|---|---|
| Dream Residence Lux | Cormorant Garamond | Regular | Navy `#1B2A4A` | Normal |
| PREMIUM RESIDENCE | Cormorant Garamond | Light | Gold `#C9A84C` | Small caps, letter-spacing 0.2em |

---

## Color Palette

| Name | Hex | Usage |
|---|---|---|
| Gold | `#C9A84C` | Icon, tagline, divider |
| Navy | `#1B2A4A` | Primary brand name, background (dark version) |
| White | `#FFFFFF` | Background (light version) |

---

## Deliverable Specs

- **Format:** SVG (scalable vector)
- **Primary size:** 320×80px canvas
- **Versions:** Light (white bg) — dark version (navy bg) as stretch goal
- **Output path:** `assets/logo/dream-residence-lux-logo.svg`

---

## Implementation Notes

- Use `@import` or embed Cormorant Garamond via Google Fonts URL in SVG, or embed as base64 for portability
- Alternatively use a system serif fallback and note font dependency
- Arch drawn with SVG `<path>` using a semicircular arc
- Vertical rule: `<line>` element, stroke `#C9A84C`, opacity `0.6`
