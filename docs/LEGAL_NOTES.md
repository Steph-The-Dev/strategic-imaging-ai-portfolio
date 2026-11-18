# Legal notes: what the site loads and stores

These are the technical facts behind the texts on `/impressum` and `/datenschutz`.
The texts follow the setup of schneidenundfaerben.de. Both domains are served from
the same netcup server (identical A/AAAA records). This is **not** legal advice.

If anything below changes, update `src/pages/datenschutz.astro` as well.

## Matomo (web analytics)

**Where:** `src/layouts/Layout.astro`, on every page.

- Tracker: `//schneidenundfaerben.de/matomo/` (self-hosted on the same netcup
  server), site ID `1`.
- **No cookies:** `disableCookies` is called before `trackPageView`.
- **Objection is respected:** the tracker does not load when
  `localStorage["matomo-optout"] === "1"`, when Do Not Track is on, or when
  Global Privacy Control is on.
- It loads only after `load`, via `requestIdleCallback`, with a 2 s fallback.
- There is no `<noscript>` pixel, so nothing is measured without JavaScript.
- Calls: `disableCookies`, `trackPageView`, `enableLinkTracking`. There is no
  heartbeat timer.
- Opt-out UI: `src/components/MatomoOptOut.astro`, shown on `/datenschutz`.
- Whether IPs are shortened depends on the Matomo server settings
  (Administration → Privacy → Anonymize data). The Datenschutz text says
  "gekürzte IP-Adresse". Keep that setting on.

## Fonts

All fonts are self-hosted, and nothing is loaded from Google at runtime.

- Inter and JetBrains Mono come from `@fontsource-variable/*` (npm) and are
  bundled by Astro.
- Material Symbols uses `public/fonts/material-symbols-outlined-subset.woff2`,
  a subset that contains only the icons in use. To add an icon, download the
  subset again from `fonts.googleapis.com/css2?family=Material+Symbols+Outlined&icon_names=...`
  with the full list of icon names and replace the file.

## Browser storage

- `localStorage["theme"]` stores the light/dark choice.
- `localStorage["matomo-optout"]` stores the opt-out choice.

Neither value is sent anywhere.

## Outbound links

LinkedIn, GitHub and the Streamlit apps are only plain links. Nothing from
them is embedded.
