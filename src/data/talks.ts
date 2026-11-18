export interface Talk {
  /** Display date, e.g. "24 Nov 2026" */
  date: string;
  /** ISO date for the <time> element */
  isoDate: string;
  format: string;
  event: string;
  title: string;
  /** Optional translation when the talk title is not in English */
  subtitle?: string;
  abstract: string;
  slidesUrl?: string;
}

export const talks: Talk[] = [
  {
    date: "24 Nov 2026",
    isoDate: "2026-11-24",
    format: "Talk (German)",
    event: "tfz Medical Cluster Insights, Technologie Forum Zug, Rotkreuz",
    title:
      "Domain Shift & Datenqualität: Wie Bildstandardisierung KI-Modelle in der Praxis robuster macht",
    subtitle:
      "(Domain shift & data quality: how image standardization makes AI models more robust in practice)",
    abstract:
      "Why color variation across labs and scanners breaks pathology models – and what stain normalization can and cannot fix.",
    // TODO(Stephan): Folien-Link nach dem 24.11. ergänzen (slidesUrl)
  },
];
