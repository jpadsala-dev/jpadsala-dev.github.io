// Single source of truth for everything on the site that comes from the résumé.
// Edit here; components only render what this file says.

export const profile = {
  name: 'Jay Padsala',
  role: 'Flutter Developer',
  location: 'Surat, Gujarat, India',
  email: 'jpadsala.developer@gmail.com',
  resume: '/jay-padsala-resume.pdf',
  links: {
    linkedin: 'https://linkedin.com/in/jay-padsala',
    github: '', // add your GitHub profile URL to show the link
  },
  intro:
    "I've spent 4+ years building iOS and Android apps with Flutter and Dart. I care about clean architecture, smooth UI and the unglamorous part: getting builds through store review and keeping them crash-free once they're out.",
};

/** Hero "release card" rows. All figures come from the résumé. */
export const releaseCard = {
  platforms: 'iOS + Android',
  experience: '4+ years',
  appsReleased: '15+',
  appsReleasedNote: 'production apps released at Kmphitech',
  crashFree: '99.5%+',
  crashFreeNote: 'crash-free users, tracked in Firebase Crashlytics',
};

export const skillRail = [
  'Dart', 'Flutter', 'BLoC', 'GoRouter', 'Clean Architecture', 'Firebase',
  'RevenueCat', 'Dio + Retrofit', 'Hive', 'RxDart', 'Platform Channels',
  'Widget tests', 'TestFlight', 'Play Console', 'NestJS',
];

export const principles = [
  {
    title: 'Architecture that survives the next feature',
    body: 'Clean Architecture, the repository pattern and dependency injection with get_it and injectable, so features stay testable and replaceable.',
  },
  {
    title: 'Smooth UI, measured',
    body: 'Design systems on ThemeExtensions, custom animations and CustomPaint. Heavy JSON parsing moves to isolates; rebuilds get profiled in DevTools.',
  },
  {
    title: 'Releasing is part of the job',
    body: 'Versioning, code signing, TestFlight, Play Console and store review handled end to end, rejections included.',
  },
  {
    title: 'AI in the loop, judgment at the wheel',
    body: 'Claude Code, Codex, Cursor and Antigravity speed up implementation and review. I still own the architecture, the API contracts and what ships.',
  },
];

export type Job = {
  role: string;
  company: string;
  dates: string;
  place: string;
  bullets: string[];
  /** Apps built for the employer or its clients. Never shown as personal work. */
  companyWork?: string[];
};

export const experience: Job[] = [
  {
    role: 'Flutter Developer',
    company: 'Kmphitech LLP',
    dates: 'Mar 2024 — Present',
    place: 'Surat, Gujarat',
    bullets: [
      'Architected, maintained and released 15+ production iOS and Android apps on Clean Architecture, holding a 99.5%+ crash-free user rate.',
      'Owned the release pipeline for all of them (versioning, code signing, Play Console, App Store Connect, TestFlight) and helped teammates through store rejections.',
      'Led the full-stack build of Shuffleburn (Flutter with Node.js / NestJS): defined the architecture and API contracts and directed AI coding agents through implementation and review.',
      'Shipped in-app purchases and subscriptions with in_app_purchase and RevenueCat; standardised networking and caching with Dio, Retrofit and Hive.',
    ],
    companyWork: [
      'Shuffleburn',
      'Flient — IoT smart locks',
      'PickupBuddy — cargo logistics',
      'ELIM — radio streaming',
      'La Dolce Vita — venue booking',
      'AI chatbot',
      'Twitch scheduler',
    ],
  },
  {
    role: 'Senior Flutter Developer',
    company: 'CodeInfosys',
    dates: 'Dec 2022 — Feb 2024',
    place: 'Surat, Gujarat',
    bullets: [
      'Built and shipped cross-platform apps with Clean Architecture and MVVM / MVC.',
      'Integrated REST APIs with local caching for reliable sync and offline use.',
      'Implemented in-app purchases and encrypted secure storage for user and transaction data.',
      'Mentored junior developers through code review and pairing; managed store releases.',
    ],
  },
  {
    role: 'Flutter Developer',
    company: 'Helsy Infotech Pvt. Ltd.',
    dates: 'Oct 2022 — Nov 2022',
    place: 'Surat, Gujarat',
    bullets: [
      'Delivered features alongside designers and backend developers on fixed timelines.',
      'Tested, debugged and tuned performance across devices; integrated Google AdMob.',
    ],
  },
  {
    role: 'Flutter Intern',
    company: 'iFlutter Institute',
    dates: 'Apr 2022 — Sep 2022',
    place: 'Surat, Gujarat',
    bullets: [
      'Wrote reusable, modular Flutter components.',
      'Integrated payment gateways, Google Maps, Shared Preferences and Sqflite.',
    ],
  },
];

export const education = {
  degree: 'Bachelor of Computer Applications',
  school: 'Bhagwan Mahavir University',
  dates: '2021 — 2024',
};

export const stack: { group: string; items: string }[] = [
  { group: 'Languages', items: 'Dart, Flutter, JavaScript, Node.js, NestJS, Express.js' },
  { group: 'State & routing', items: 'BLoC, Provider, GetX, GoRouter, Streams, RxDart' },
  { group: 'Architecture', items: 'SOLID, Clean Architecture, MVVM, MVC, Repository, get_it, injectable' },
  { group: 'Data', items: 'REST, Dio, Retrofit, Hive, Sqflite, Shared Preferences, Socket.IO' },
  { group: 'Firebase', items: 'Auth, Cloud Firestore, Cloud Messaging, Crashlytics' },
  { group: 'Auth & security', items: 'Google & Apple Sign-In, OAuth 2.0, JWT, Secure Storage, RBAC' },
  { group: 'Platform', items: 'Platform Channels, native views, Google Maps, deep links, i18n, IoT SDKs' },
  { group: 'Payments', items: 'In-App Purchases, RevenueCat, AdMob, third-party gateways' },
  { group: 'Quality', items: 'Widget & unit tests, accessibility checks, DevTools profiling, isolates' },
  { group: 'Shipping', items: 'Play Console, App Store Connect, TestFlight, Git, GitHub' },
];
