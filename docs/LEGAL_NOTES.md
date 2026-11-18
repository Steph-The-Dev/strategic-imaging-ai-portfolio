# Legal notes: what the site loads and stores

Technical facts for writing the Impressum / Datenschutz texts.
This is **not** legal advice. `TODO(Stephan): Rechtstexte prüfen/ergänzen`.

## Matomo (web analytics)

**Where:** `src/layouts/Layout.astro`, i.e. on every page.

- JS tracker in `<head>` (`<!-- Matomo -->` block): loads
  `//schneidenundfaerben.de/matomo/matomo.js` and sends hits to
  `//schneidenundfaerben.de/matomo/matomo.php`, site ID `1`.
  The data goes to a Matomo instance on the domain schneidenundfaerben.de,
  not on stephthedev.de.
- `<noscript>` pixel at the end of `<body>`:
  `//schneidenundfaerben.de/matomo/matomo.php?idsite=1&rec=1` (only when
  JavaScript is off).

**Configured calls:** `setDocumentTitle`, `setCookieDomain(".stephthedev.de")`,
`setDomains`, `trackPageView`, `enableLinkTracking`, `enableHeartBeatTimer`,
plus another `trackPageView` after Astro view-transition swaps.

**Cookies: yes, by default.** Nothing calls `disableCookies` or
`requireConsent`/`requireCookieConsent`, and `setCookieDomain` is set
explicitly. So the JS tracker sets Matomo's standard first-party cookies on
`.stephthedev.de` (typically `_pk_id.*` for about 13 months and `_pk_ses.*`
for 30 minutes, plus `_pk_ref.*` when a visitor arrives from a referrer).
There is **no consent banner**.

- `enableHeartBeatTimer` sends extra requests while the tab is in focus, to
  measure time on page.
- `enableLinkTracking` records outbound link clicks and downloads.
- The noscript pixel does not set first-party cookies. Whether the Matomo
  server sets any cookies of its own (and whether it anonymizes IPs) depends
  on that instance's server settings, which this repo cannot show. Check that
  in the Matomo admin (Privacy → Anonymize data).

Options for later, not done here: `_paq.push(['disableCookies'])` for
cookie-less tracking, or a consent mechanism.

## Other third parties and storage

- **Google Fonts:** `fonts.googleapis.com` / `fonts.gstatic.com` (Inter,
  JetBrains Mono, Material Symbols) are loaded from Google on every page, so
  the visitor's IP address reaches Google. Self-hosting the fonts would avoid
  that.
- **localStorage:** key `theme` (`light` / `dark`) stores the dark-mode choice.
  It never leaves the browser.
- **Outbound links:** LinkedIn, GitHub and Streamlit apps are only plain
  links. Nothing from them is embedded.
