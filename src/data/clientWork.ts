// Company & client apps: built as an employee, for employers and their clients.
// NOT personal projects (those live in projects.ts). Rendered on /client-work.
//
// The resume lists these in one line each and links to /client-work for the details,
// so keep this the detailed version. Each `id` is the page anchor (/client-work#flient).

export type ClientApp = {
  id: string;
  name: string;
  kind: string; // what the app is, a few words
  stack: string[];
  summary: string; // one or two sentences
  role: string; // what I owned on it
  highlights: string[];
  playStore?: string;
  appStore?: string;
};

export const clientWork: ClientApp[] = [
  {
    id: 'shuffleburn',
    name: 'Shuffleburn',
    kind: 'Full-stack application',
    stack: ['Flutter', 'Node.js', 'NestJS', 'AI-assisted development'],
    summary: 'A full-stack product with a Flutter app on top of a Node.js / NestJS backend.',
    role: 'Led the build end to end, from specification to store release.',
    highlights: [
      'Wrote the feature specifications and designed the frontend and backend architecture.',
      'Defined the API contracts between the Flutter app and the NestJS backend.',
      'Directed AI coding agents (Claude Code, Codex, Cursor, Antigravity) for implementation and code review.',
      'Handled the store release.',
    ],
  },
  {
    id: 'flient',
    name: 'Flient',
    kind: 'IoT smart lock app',
    stack: ['Flutter', 'TTLock SDK', 'Bluetooth (BLE)', 'NFC', 'Biometrics'],
    summary: 'A custom-branded smart lock app for a partner ecosystem.',
    role: 'Developed the app independently: native SDK integration, REST APIs, feature delivery and debugging.',
    highlights: [
      'Bluetooth lock control, digital key sharing and access records through the TTLock native SDK.',
      'NFC card reading that writes card IDs to the lock over Bluetooth.',
      'Biometric unlock.',
      'Single-session user management for secure access across devices.',
    ],
    playStore: 'https://play.google.com/store/apps/details?id=com.flient.app',
    appStore: 'https://apps.apple.com/in/app/flient/id6746534836',
  },
  {
    id: 'pickupbuddy',
    name: 'PickupBuddy',
    kind: 'Transportation & logistics platform',
    stack: ['Flutter', 'Cloud Firestore', 'Google Maps', 'FCM'],
    summary:
      'A real-time cargo booking platform supporting multiple vehicle and cargo types, on a serverless Firestore backend.',
    role: 'Built the app and its Firestore data flows.',
    highlights: [
      'Job postings, driver availability and live trip updates that sync in real time through Firestore.',
      'Zone-based and layered filtering so drivers find relevant jobs quickly.',
      'Google Maps live tracking, route display and navigation.',
      'Driver-customer chat, push notifications, PowerTranz payments, and Google and Apple Sign-In.',
    ],
  },
  {
    id: 'elim',
    name: 'ELIM',
    kind: 'Quran recitation streaming app',
    stack: ['Flutter', 'Cloud Firestore', 'RxDart'],
    summary: 'Multi-track audio streaming of Quran recitations.',
    role: 'Built the player and the content backend.',
    highlights: [
      'Background audio playback across multiple tracks.',
      'A Firestore content backend, so new reciters and tracks go live without an app update.',
      'RxDart to manage audio playback and real-time data streams together.',
    ],
    playStore: 'https://play.google.com/store/apps/details?id=com.radios.elim.app',
    appStore: 'https://apps.apple.com/in/app/radios-elim/id6502156622',
  },
  {
    id: 'sentinelle',
    name: 'Sentinelle',
    kind: 'Insider trading tracker',
    stack: ['Flutter'],
    summary:
      'A finance app that tracks publicly reported stock trades by executives, investors and political figures, from official filings (SEC Form 4).',
    role: 'Built the Flutter app.',
    highlights: ['Transaction history.', 'Portfolio movement views.', 'Market data.'],
    playStore: 'https://play.google.com/store/apps/details?id=com.sentinellemobile.app',
    appStore: 'https://apps.apple.com/in/app/sentinelle-bourse-insiders/id6769673763',
  },
];

/** Smaller apps, listed by name only. */
export const otherClientWork: { name: string; kind: string }[] = [
  { name: 'La Dolce Vita', kind: 'Venue listing and booking platform in Dubai' },
  { name: 'AI support chatbot', kind: 'AI-powered customer support app' },
  { name: 'Twitch scheduler', kind: 'Stream schedule manager with Twitch sign-in' },
];
