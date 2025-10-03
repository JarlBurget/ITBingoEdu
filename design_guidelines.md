# IT Bingo Design Guidelines

## Design Approach
**Reference-Based Approach** - Drawing inspiration from successful gamified learning platforms (Duolingo, Kahoot) combined with modern game UI patterns. The design balances educational professionalism with playful engagement, creating an experience that appeals to vocational students while maintaining VOCO's institutional credibility.

## Core Design Principles
1. **Progressive Reward** - Visual feedback escalates from subtle (hover) to dramatic (BINGO celebration)
2. **Clear State Communication** - Every interaction state must be immediately obvious
3. **Playful Professionalism** - Game-like without being childish, educational without being boring
4. **Spatial Clarity** - Clean layouts that never overwhelm despite rich interactivity

## Color Palette

### Primary Colors
- **VOCO Brand Primary**: 210 85% 45% (Deep blue - professional anchor)
- **VOCO Brand Accent**: 210 75% 55% (Lighter blue for interactive elements)

### Semantic Game Colors
- **Success Green**: 142 76% 36% (Correct answers, completed squares)
- **Error Red**: 0 84% 60% (Wrong answers)
- **Neutral Gray**: 220 13% 91% (Unfilled/inactive squares)
- **Background**: 220 15% 98% (Light mode base)
- **Dark Overlay**: 220 15% 15% (Modal backgrounds with 85% opacity)

### Accent Colors
- **Gold Celebration**: 45 93% 58% (BINGO moment, quest completion)
- **Soft Purple**: 270 50% 60% (Quest tracking, special states)

## Typography

**Font Families**
- Primary: 'Inter' (Google Fonts) - Clean, modern, excellent readability
- Display: 'Poppins' (Google Fonts) - Friendly, slightly playful for headings

**Type Scale**
- Hero/Bingo Title: text-5xl md:text-6xl font-bold (Poppins)
- Section Headers: text-3xl md:text-4xl font-semibold (Poppins)
- Body Text: text-base md:text-lg (Inter)
- Button Text: text-sm md:text-base font-medium uppercase tracking-wide (Inter)
- Tooltips: text-xs font-medium (Inter)

## Layout System

**Spacing Primitives**: Use Tailwind units of 2, 4, 8, 12, 16, 20 for consistent rhythm
- Micro spacing (icons, badges): p-2, gap-2
- Component padding: p-4, p-8
- Section spacing: py-12, py-16, py-20
- Large gaps: gap-8, gap-12

**Grid Structure**
- Home Page: Single column centered, max-w-2xl
- Bingo Board: 5x5 grid with gap-2 md:gap-3, max-w-4xl mx-auto
- Quest Sidebar: Fixed width 280px on desktop, full width drawer on mobile

## Component Library

### Home Page Components

**Hero Section**
- VOCO logo: h-16 md:h-20, centered
- Tagline below logo: text-xl md:text-2xl text-gray-600, mb-12
- Three primary buttons: w-full md:w-64, stacked vertically with gap-4
- Background: Gradient from 210 95% 98% to 210 85% 96%, full viewport height

**Navigation Buttons**
- Style: Solid fills with shadow-lg, rounded-xl
- Play: VOCO brand primary with white text, larger (h-14)
- Video/About: Brand accent with white text (h-12)
- Hover: Lift effect (transform scale 1.02), increased shadow

**Modals**
- Overlay: Fixed inset-0, dark background with 85% opacity, backdrop-blur-sm
- Content Card: bg-white, rounded-2xl, max-w-2xl, shadow-2xl, centered
- Close Button: Absolute top-4 right-4, rounded-full, hover bg-gray-100
- Video: 16:9 aspect ratio, rounded-lg overflow-hidden
- About: p-8, typography hierarchy with VOCO brand colors for headings

### Bingo Board Components

**Game Header**
- Field headers (VS, UX/UI, etc.): Fixed height h-12, brand primary background, white text, font-semibold, rounded-t-lg
- Each column: Distinct subtle background tint when completed (success green with 10% opacity)

**Bingo Squares**
- Default State: bg-white, border-2 border-gray-200, rounded-lg, aspect-square, shadow-sm
- Hover State: border-brand-accent, shadow-md, scale 1.05 transform, cursor-pointer
- Correct State: bg-success-green with 15% opacity, border-success-green, checkmark overlay
- Wrong State: bg-error-red with 15% opacity, border-error-red, X mark overlay
- Completed Column: All squares glow with gold border (2px), pulsing animation

**Icon Display**
- Size: w-10 h-10 md:w-12 h-12, centered in square
- Grayscale filter when unanswered, full color when answered
- Tooltip on hover: Absolute positioned, bg-gray-900, text-white, text-xs, rounded-md, px-3 py-1, -top-10, fade-in animation

**Question Modal (Subject Card)**
- Full-screen overlay on mobile, centered card on desktop
- Card: max-w-lg, bg-white, rounded-2xl, p-6 md:p-8
- Field Badge: Top of card, inline-block, px-4 py-1, rounded-full, brand primary background
- Icon: Large display (w-20 h-20), centered below badge
- Question Text: text-lg md:text-xl font-semibold, mb-6
- Answer Buttons: Full width, h-12, rounded-lg, border-2, hover states with subtle lift
- Correct feedback: Green background, white text, checkmark icon
- Wrong feedback: Red background, white text, X icon

**Easter Egg (Timo Images)**
- Image container: Fixed positioning, slide-in from right animation
- Size: w-32 h-32 md:w-48 h-48, rounded-full, shadow-xl
- Happy Timo: Bounces in with spring animation
- Angry Timo: Shakes with rapid left-right keyframes

### Quest Tracking Panel

**Layout**
- Desktop: Fixed right sidebar, w-72, h-screen, bg-gray-50, border-l, p-4
- Mobile: Bottom drawer, slide-up, backdrop, rounded-t-3xl
- Header: "Your Quests" text-xl font-bold, sticky top-0

**Quest Items**
- Card: bg-white, rounded-lg, p-4, mb-3, shadow-sm
- Status: Circular progress indicator or checkbox
- Incomplete: Gray with dashed border
- In Progress: Purple border with animated progress ring
- Complete: Gold background with 10% opacity, checkmark, confetti micro-animation
- IT Guru Badge: Special card with gold gradient background, trophy icon

### BINGO Celebration

**Victory Modal**
- Fullscreen takeover, z-50
- Background: Radial gradient from gold to brand primary
- Message: text-6xl font-bold, white, center, mb-4
- Field Recommendation: text-2xl, emphasized with bg-white px-6 py-3 rounded-full
- Fireworks: Canvas overlay, GSAP particles, 3-second duration
- Confetti: CSS particles falling from top, staggered animation

## Animations

**Interaction Micro-animations** (CSS transitions, 200-300ms)
- Button hovers: scale, shadow increase
- Square hovers: border color change, slight scale
- Modal appearance: fade + slide from center (scale 0.95 to 1)

**Feedback Animations** (GSAP, 400-600ms)
- Correct answer: Green wash + bounce
- Wrong answer: Red shake + fade
- Square completion: Pop + glow

**Celebration Animations** (GSAP)
- BINGO fireworks: Particle system, 60fps, 3-second spectacle
- Quest completion: Subtle confetti burst from card
- Column completion: Gold shimmer wave across all squares

## Responsive Breakpoints

- Mobile (base): Single column, stacked layout, bottom quest drawer
- Tablet (md: 768px): 5x5 grid comfortable, modals remain centered
- Desktop (lg: 1024px): Quest sidebar appears, optimal spacing, larger interactive targets

## Sound Design Integration

- **UI Feedback**: Sounds complement visual states (bing = 200ms after modal open, ding = simultaneous with green flash)
- **Volume**: Start at 50%, user control in settings (small icon top-right)
- **Celebration**: Layered audio (fireworks whoosh + cheerful melody) during BINGO

## Accessibility Notes

- Focus states: 2px offset outline in brand accent
- Color contrast: All text passes WCAG AA (4.5:1 minimum)
- Keyboard navigation: Tab through squares in reading order, Enter to select
- Screen reader labels: Announce square state changes, quest progress