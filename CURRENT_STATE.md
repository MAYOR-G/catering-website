# Current State

## What Was Built

A premium, clean, responsive catering and event food business website template for `Savory Table Catering`. The site includes a sticky navbar, editorial hero, services, packages, six-step process, trust/benefits section, event gallery, testimonials, booking CTA, and footer.

## Folder Path

`web-template-project/templates/catering-website`

## Main Design Decisions

- Event-first positioning instead of a restaurant menu layout.
- Editorial hero with rotating event concepts and layered catering imagery.
- Package cards with dollar pricing and realistic guest ranges.
- Six-step process to communicate planning confidence.
- Gallery cards organized by event occasion rather than dish categories.
- Business content centralized in `src/data/siteContent.ts` for easy replacement.

## Color Palette And Style Direction

- Warm cream: `#fff8ed`
- Ivory: `#fffdf8`
- Deep charcoal: `#20201d`
- Olive green: `#566247`
- Terracotta: `#b86f4b`
- Soft gold: `#c8a35d`
- Neutral linen/beige: `#f3e8d7`, `#e6d5bd`

The style direction is elegant, warm, premium, professional, event-focused, and polished for US/UK catering brands.

## Components Created

- `Navbar`
- `Hero`
- `SectionHeader`
- `ServiceCard`
- `PackageCard`
- `ProcessStep`
- `FeatureCard`
- `GalleryCard`
- `TestimonialCard`
- `CTA`
- `Footer`
- `ButtonLink`
- `ImageFrame`

## How To Run It

```bash
cd web-template-project/templates/catering-website
npm install
npm run dev
```

## Known Issues

- Images use remote Unsplash URLs as replaceable placeholders.
- No backend booking form is included; the CTA uses email and phone links.

## Suggested Next Improvements

- Replace placeholder images with client-owned photography.
- Add a real booking/contact form connected to a CRM or email service.
- Add a packages detail page for larger catering businesses.
- Add local SEO content blocks for the target city or service region.

## Upgrade Pass - 2026-06-11

### What Was Improved

- Replaced the old central-plus-corner-image hero with a rolling event-scene carousel.
- Added five event visual states so weddings, corporate receptions, cocktail tables, private dinners, and buffets rotate through the hero.
- Rewrote the hero heading and supporting copy to feel more strategic, polished, and event-focused.
- Added reveal-on-scroll polish across services, packages, process, why-us, gallery, testimonials, and CTA.
- Rewrote visible builder-facing copy into client-ready catering copy.
- Improved mobile gallery heights for cleaner event imagery.

### Files Changed

- `src/App.tsx`
- `src/index.css`
- `src/components/Reveal.tsx`
- `src/components/Hero.tsx`
- `src/components/GalleryCard.tsx`
- `src/components/CTA.tsx`
- `src/components/Footer.tsx`

### Responsive Fixes Made

- Large gallery cards now use smaller mobile heights and fuller desktop heights.
- Hero event visuals now show the active image with shadowed previous/next cards instead of small corner thumbnails.
- Cards and section headers stack with cleaner mobile rhythm.

### Motion / Interaction Improvements Added

- Added Intersection Observer reveal animations with reduced-motion support.
- Added automatic hero event carousel rotation with manual controls and dot navigation.
- Preserved existing hover and image scale interactions.

### Known Issues Remaining

- No real event inquiry form or CRM integration is connected.
- Remote placeholder imagery should be replaced with client-owned event photography.

### Suggested Next Improvements

- Add event inquiry form, menu download, venue partner section, and service-specific landing pages.

### Latest Hero Adjustment

- Removed the outer carousel placeholder frame so the catering images sit directly on the page.
- Moved the active event detail panel below the image carousel instead of overlaying it on top of the imagery.
