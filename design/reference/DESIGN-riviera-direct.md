---
name: Riviera Direct
colors:
  surface: '#faf8ff'
  surface-dim: '#d2d9f4'
  surface-bright: '#faf8ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f2f3ff'
  surface-container: '#eaedff'
  surface-container-high: '#e2e7ff'
  surface-container-highest: '#dae2fd'
  on-surface: '#131b2e'
  on-surface-variant: '#3f4850'
  inverse-surface: '#283044'
  inverse-on-surface: '#eef0ff'
  outline: '#707881'
  outline-variant: '#bfc7d2'
  surface-tint: '#006398'
  primary: '#006194'
  on-primary: '#ffffff'
  primary-container: '#007bb9'
  on-primary-container: '#fdfcff'
  inverse-primary: '#93ccff'
  secondary: '#855300'
  on-secondary: '#ffffff'
  secondary-container: '#fea619'
  on-secondary-container: '#684000'
  tertiary: '#006947'
  on-tertiary: '#ffffff'
  tertiary-container: '#00855b'
  on-tertiary-container: '#f5fff6'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#cce5ff'
  primary-fixed-dim: '#93ccff'
  on-primary-fixed: '#001d31'
  on-primary-fixed-variant: '#004b73'
  secondary-fixed: '#ffddb8'
  secondary-fixed-dim: '#ffb95f'
  on-secondary-fixed: '#2a1700'
  on-secondary-fixed-variant: '#653e00'
  tertiary-fixed: '#6ffbbe'
  tertiary-fixed-dim: '#4edea3'
  on-tertiary-fixed: '#002113'
  on-tertiary-fixed-variant: '#005236'
  background: '#faf8ff'
  on-background: '#131b2e'
  surface-variant: '#dae2fd'
typography:
  display-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 40px
    fontWeight: '800'
    lineHeight: 48px
    letterSpacing: -0.02em
  headline-xl:
    fontFamily: Plus Jakarta Sans
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
    letterSpacing: -0.02em
  headline-xl-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 26px
    fontWeight: '700'
    lineHeight: 32px
    letterSpacing: -0.01em
  headline-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 24px
    fontWeight: '700'
    lineHeight: 32px
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
  title-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 18px
    fontWeight: '600'
    lineHeight: 24px
  body-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 16px
    fontWeight: '500'
    lineHeight: 24px
  body-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  label-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 14px
    fontWeight: '700'
    lineHeight: 20px
    letterSpacing: 0.02em
  label-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 12px
    fontWeight: '700'
    lineHeight: 16px
    letterSpacing: 0.04em
  caption:
    fontFamily: Plus Jakarta Sans
    fontSize: 11px
    fontWeight: '600'
    lineHeight: 14px
    letterSpacing: 0.02em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  gutter: 1rem
  gutter-tablet: 1.25rem
  gutter-desktop: 1.5rem
  margin: 1rem
  margin-tablet: 2rem
  margin-desktop: 3rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2.5rem
---

## Brand & Style

This design system delivers a luxury seaside hospitality experience directly to sun loungers and cabanas across the Italian Riviera. It bridges effortless Mediterranean leisure with mission-critical transactional clarity under intense, direct sunlight. 

### Brand Personality
- **Effortless Italian Elegance:** Polished, breezy, and warm—channeling coastal Amalfi and Forte dei Marmi without decorative clutter.
- **Sunlight-First Utility:** Built specifically for outdoor high-glare environments. High-contrast typography and vivid action cues eliminate screen squinting.
- **Leisure-Centric Hospitality:** Interfaces feel indulgent yet ultra-swift, allowing guests to order an Aperol Spritz or crudo plate in under three taps and return to their book or swim.

### Design Movement & Aesthetic Direction
A tailored synthesis of **Sunlit Minimalism** and **Tactile Coastal Softness**:
- Ultra-clean canvas grounded in bright sand-toned whites.
- Expansive, tactile hit areas (minimum 48px, standardizing on 52px for primary actions) suited for wet or one-handed thumb interaction on mobile devices.
- Rounded architectural geometry paired with warm, sun-drenched tinting in place of cold digital greys.

## Colors

The palette pairs the saturated depths of the Ligurian Sea with sunlit sand and warm citrus accents. Every color pairing complies with WCAG AAA contrast ratios for body copy and AA for large interactive elements to maintain high outdoor legibility.

### Core Roles
- **Primary (`#0284C7` / `#0369A1` interactive hover):** Deep Mediterranean cyan representing the water. Drives primary conversions, sticky order totals, and selection toggles.
- **Secondary (`#F59E0B` / `#D97706` hover):** Warm golden amber evoking Italian sunshine and citrus. Reserved for promotional highlights, beach umbrella tier tags, and critical calls-to-order.
- **Tertiary (`#10B981` / `#059669` hover):** Crisp mint green, signaling instant kitchen fulfillment, successful payment confirmations, and active umbrella tab sessions.
- **Neutral (`#0F172A` text / `#F8FAFC` base canvas):** Deep slate navy text anchored against pristine, sand-white surfaces. Never use pure black `#000000` or washed-out mid-greys for copy.

### Canvas Tones
- **Base Background:** `#F8FAFC` (Cool crisp sand)
- **Elevated Card Layer:** `#FFFFFF` (White sail)
- **Recessed Surface:** `#F1F5F9` (Shaded stone)

## Typography

Typographic scale is powered exclusively by **Plus Jakarta Sans**, chosen for its wide apertures, geometric balance, and high optical legibility under direct glare.

### Usage Hierarchy
- **Display & Headlines:** Heavy weights (700 and 800) ensure titles remain solid and legible even with screen brightness pushed to maximum under the midday sun.
- **Body & Pricing:** Set to a minimum of 500 (Medium) weight on mobile ordering screens to prevent delicate strokes from disappearing against bright backgrounds.
- **Labels & Micro-copy:** Formatted in uppercase or emphasized weights (700) with slight letter-spacing (`0.02em` to `0.04em`) to establish crisp visual anchors across busy food, drink, and beach cabana menus.

## Layout & Spacing

The layout is optimized mobile-first for Progressive Web Apps (PWAs) accessed via QR codes affixed to beach umbrellas and sunbeds.

### Grid & Form Factors
- **Mobile (Base to 639px):** 4-column fluid layout with dynamic safe-area-inset padding at top and bottom. Canvas margin is locked at `1rem` (16px) to maximize screen real estate while preventing edge mis-taps.
- **Tablet (640px to 1023px):** 8-column layout with `1.25rem` gutters and `2rem` outer margins. Ideal for staff-facing waiter POS or poolside service tablets.
- **Desktop (1024px+):** 12-column layout centered with max content width of `1200px` and `3rem` margins.

### Rhythmic Rules
- **48px+ Touch Rule:** All interactive elements (button heights, quantity adjusters, filter chips) maintain an explicit bounding box of at least 48px, with 52px preferred on primary workflows.
- **PWA Sticky Docking:** Bottom navigation bars, current order summaries, and cart triggers stay docked with a 16px bottom float and safe-area margin offset to remain thumb-accessible.

## Elevation & Depth

In bright outdoor lighting, fine shadows wash out completely. Depth is therefore created through a combination of crisp tonal layering and warm-tinted ambient glows.

### Elevation Levels
- **Level 0 (Sand Base):** Background canvas `#F8FAFC`, flat with zero elevation.
- **Level 1 (Menu & Item Cards):** Pure white `#FFFFFF` surface resting on a warm sand ambient shadow: `0px 4px 20px -2px rgba(15, 23, 42, 0.05), 0px 2px 6px -1px rgba(245, 158, 11, 0.04)`.
- **Level 2 (Active Dropdowns & Modals):** White card raised with: `0px 12px 32px -4px rgba(15, 23, 42, 0.1), 0px 4px 12px -2px rgba(2, 132, 199, 0.06)`.
- **Level 3 (Floating Order Bar & Bottom Sheets):** `0px 20px 40px -6px rgba(15, 23, 42, 0.14)`. Surface includes an ultra-fine high-contrast top rim: `1px solid rgba(255, 255, 255, 0.8)`.

### Sunlight Optimization
- Avoid muddy neutral grey shadows. Shadows carry a hint of deep slate and warm amber to mimic Mediterranean natural light.
- Pair elevated layers with subtle boundary borders (`1px solid #E2E8F0`) to safeguard definition on high-brightness OLED displays.

## Shapes

The geometric identity balances organic nautical fluidity with structured modernity.

### Radius Scale
- **Base Level (`roundedness: 2`):** `0.5rem` (8px) for input fields, small badges, and utility buttons.
- **Cards (`rounded-lg` / `rounded-xl`):** `1rem` to `1.5rem` (16px to 24px) for category cards, drink containers, and modal sheets, giving elements a soft, tactile feel.
- **Pill System (`rounded-full`):** Full 9999px radius used for status badges, table/umbrella pin locators, dietary tags, and primary action buttons.

## Components

### Buttons
- **Primary Action (e.g., "Add to Umbrella Tab"):** Pill-shaped (`rounded-full`), height `52px`, background `#0284C7`, text `#FFFFFF`, bold `label-lg`. Active tap provides physical scale down (`transform: scale(0.98)`).
- **Secondary Action:** Pill-shaped, height `52px`, background `#FFFFFF`, border `2px solid #E2E8F0`, text `#0F172A`.
- **Accent Floating CTA:** Gold background (`#F59E0B`), text `#0F172A` with weight 800, used for fast checkout and calling sunbed service.

### Cards & Menu Tiles
- **Menu Card:** Rounded `1.5rem` (`rounded-2xl`), pure white canvas with warm ambient shadow. Features edge-to-edge photography with an inner pill badge for prices in Mediterranean Cyan (`#0284C7`).
- **Interactive State:** Border deepens to `#0284C7` on selection, paired with an inner checkmark badge.

### Chips & Badges
- **Status Badges:** Full pill radius (`rounded-full`), padding `6px 14px`.
  - *Order Confirmed:* `#10B981` background, `#FFFFFF` text.
  - *Umbrella Number:* `#0F172A` background, `#FFFFFF` text, monospace numerical alignment.
  - *Dietary / Allergens:* Soft sand `#F1F5F9`, text `#0F172A`.

### Inputs & Quantity Adjusters
- **Text Inputs:** Height `52px`, `rounded-xl`, background `#FFFFFF`, border `2px solid #E2E8F0`. Focus state: border `#0284C7` with a 4px soft ring (`rgba(2, 132, 199, 0.15)`).
- **Stepper Control (Drinks/Food Counter):** Encapsulated pill container. Minimum `48px` diameter circular increment/decrement buttons with deep navy glyphs and heavy font weights.

### Checkboxes & Radios
- Size `24px` by `24px` with a minimum `48px` tap target cushion.
- Selected state fills with `#0284C7` and displays a bold white check.

### Bespoke Beach Club Components
- **Floating Lounger Hub:** Sticky pill bar anchored at screen bottom displaying: Umbrella Number (e.g., "Lettino 42"), active items count, and total sum with instant sliding drawer access.
- **Sunlight Mode Toggle:** High-contrast toggle switch providing immediate boost to pure monochrome contrast in extreme solar reflection.