# alhudahuda website

English and Arabic marketing and onboarding website for alhudahuda. This is a buildless static Site. Publish the website folder with the Sites source workflow.

## Content and scope

- Company name stays lowercase: `alhudahuda`.
- English tagline: `Your Online Arabian Marketplace`.
- Current markets: Malaysia and Nigeria. Upcoming markets: Oman and Indonesia.
- Website introduces the mobile app and prepares customers, merchants, and delivery partners for onboarding. There is no web store, payment processing, account registration, or personal-data submission.
- Phone UI is explicitly labeled as an illustrative app experience, not a screenshot of the production app.
- Service coverage, ordering, payment and delivery availability are qualified by location and rollout. No unsupported fees, delivery promises, testimonials, or usage statistics are included.

## Connect official app links

Edit `site-config.js` to add verified HTTPS `androidUrl` and `iosUrl` values. Until supplied, buttons open a platform-specific explanation of link availability. The shared status text and FAQ automatically adapt when one or both URLs are added. Do not use API/backend URLs as download links.

## Language and interactions

- `?lang=en` and `?lang=ar` open the relevant language. The switch updates `lang`, `dir`, title, descriptions, visible text and accessible labels.
- Language preference is the only persistent browser setting. Checklist progress remains in memory and is not submitted.
- Accessible role tabs support arrow keys, Home and End; dialogs support Escape, backdrop dismissal and focus restoration.
- Checklists vary by role and country, include upcoming-market notices, preserve current-session progress and have a print layout.
- All assets and fonts are hosted locally. No third-party trackers, external font calls or analytics are included.

## Design and assets

Brand teal `#073B3A`, warm ivory and sage, with white and bright green (`#88df38`) wordmarks matching the supplied brand reference. DM Sans, DM Serif Display, Outfit and Noto Sans Arabic are self-hosted; licenses are in `assets/`. Body, supporting and interface text are enlarged; every original hero headline font-size is preserved.

Hero asset saved in this project: `assets/arabian-still-life.png`.

Generation method: built-in Image Generation tool. Final prompt:

> Use case: ads-marketing. Create one premium photographic hero image for the alhudahuda Arabian marketplace website. Asset will occupy the right half of a luxury editorial web page, portrait ratio about 4:5. A beautiful curated Arabian lifestyle still life in warm Mediterranean morning light: a refined brass Arabic dallah coffee pot and two small ivory coffee cups on a pale travertine table, a shallow handmade dark olive ceramic bowl holding glossy dates, a small elegant unlabelled amber oud perfume bottle, a softly folded cream linen fabric with a subtle woven edge. Organic olive branches at edge. Background a sand-colored plaster wall with a broad pointed architectural arch opening with muted deep teal (#073B3A) interior, gentle palm-frond shadows, elegant textured surfaces. Objects arranged naturally in lower two thirds leaving quiet airy space above. Palette chalk ivory, warm sand, deep muted forest teal, restrained bronze. Photography like a considered upscale design magazine, realistic materials and natural light, tactile, slightly filmic, professional art direction, visually rich but minimal. No text, no lettering, no logos, no UI, no watermarks, no price tags, no people, no generic shopping bag. Not a flat illustration or 3D render. Return a high-quality portrait image suited to a 700 px wide website hero.

The user-supplied bird-and-parcel icon is used unchanged in the header, footer, app illustration, download section and favicon. The lowercase wordmark uses white `alhuda` and bright green `huda`, following the second supplied logo. The full second reference image is used for sharing metadata. Country line illustrations remain SVG.

## Verification

- JavaScript syntax checks.
- HTML IDs, internal fragments, local asset references and all 143 translation keys checked.
- Desktop English and Arabic reviewed in the browser.
- Mobile English and Arabic checked in 390px and 375px iframe viewports; no horizontal overflow.
- Role selection, market selection, checklist progress, Arabic mobile menu, upcoming-market messaging, Android and iPhone availability dialogs checked.
- Typography and supplied-logo revision reviewed in desktop English/Arabic and mobile English/Arabic on 2026-10-28; Arabic caption uses a horizontal reading direction.
- Temporary responsive QA fixture removed before publication.

New Site is owner-private by default. Audience changes are managed through Sites.
