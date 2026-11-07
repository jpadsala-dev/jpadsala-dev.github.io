// Single source of truth for everything on the site that comes from the resume.
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
    '4+ years building iOS and Android apps in Dart. I focus on clean architecture, smooth UI and the unglamorous part: getting builds through review and keeping them crash-free.',
};

/** Hero "release card" rows. All figures come from the resume. */
export const releaseCard = {
  platforms: 'iOS + Android',
  experience: '4+ years',
  appsReleased: '15+',
  appsReleasedNote: 'production apps released across company roles',
  crashFree: '99.5%+',
  crashFreeNote: 'crash-free users, tracked in Firebase Crashlytics',
};

export const skillRail = [
  'Dart', 'Flutter', 'BLoC', 'GoRouter', 'Clean Architecture', 'Firebase',
  'RevenueCat', 'Dio + Retrofit', 'Hive', 'RxDart', 'Platform channels',
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

/**
 * "Shipped features": what users got in production apps, as opposed to the tools in `stack`.
 * Add one by appending { tag, title, body }. Keep `body` to one plain sentence about the user-facing result.
 */
export const features: { tag: string; title: string; body: string }[] = [
  // Ordered by priority: revenue and rare integrations first, then core product features, then polish.
  { tag: 'Payments', title: 'In-app purchases & subscriptions', body: 'One-off purchases and subscriptions on both stores, with the native in_app_purchase plugin and RevenueCat.' },
  { tag: 'Payments', title: 'Payment gateways', body: 'Card payments through PowerTranz and other third-party gateways.' },
  { tag: 'Device', title: 'IoT smart locks', body: 'Lock control, digital key sharing and access history through the TTLock SDK and native platform code.' },
  { tag: 'Device', title: 'Maps & live tracking', body: 'Google Maps with live location, route display and navigation for drivers and customers.' },
  { tag: 'AI', title: 'AI interaction', body: 'Conversational AI chat that answers users and handles support automatically.' },
  { tag: 'Device', title: 'Wake-word detection', body: 'On-device wake-word models, so the app responds to a spoken phrase hands-free.' },
  { tag: 'Real-time', title: 'Live chat', body: 'Real-time messaging between users, backed by push notifications when the app is closed.' },
  { tag: 'Real-time', title: 'Live updates', body: 'Job postings, driver availability and trip status that update on screen the moment they change.' },
  { tag: 'Security', title: 'OAuth 2.0 sign-in', body: 'Google, Apple and Twitch sign-in, with tokens kept in secure storage.' },
  { tag: 'Security', title: 'Roles & multi-user access', body: 'Role-based permissions, multiple users per account and single-session sign-in across devices.' },
  { tag: 'Media', title: 'Audio players', body: 'Streaming audio that keeps playing in the background, with tracks added remotely without an app update.' },
  { tag: 'Media', title: 'Video players', body: 'In-app video playback with player controls built to match the app.' },
  { tag: 'Engagement', title: 'Push notifications', body: 'Firebase Cloud Messaging alerts that bring users back to the right screen.' },
  { tag: 'Engagement', title: 'Deep links', body: 'Links from emails, ads and notifications that open straight to the matching page in the app.' },
  { tag: 'Data', title: 'Offline mode', body: 'Local caching with Hive and Sqflite, so the app keeps working on a bad connection and syncs when it returns.' },
  { tag: 'Security', title: 'Encrypted storage', body: 'User and transaction data encrypted at rest in secure local storage.' },
  { tag: 'Payments', title: 'Ads', body: 'Google AdMob placements tuned for revenue without getting in the way.' },
  { tag: 'Device', title: 'Native integrations', body: 'Platform channels and native Android and iOS views wherever Flutter alone falls short.' },
  { tag: 'UI', title: 'Animations', body: 'Custom transitions, micro-interactions and CustomPaint drawing, profiled so they stay smooth on mid-range phones.' },
  { tag: 'UI', title: 'Theming', body: 'Design systems built on ThemeExtensions, so brand colours and type change in one place instead of in every widget.' },
  { tag: 'UI', title: 'Graphs & charts', body: 'Interactive charts that turn app data into something users can read at a glance.' },
  { tag: 'UI', title: 'Localisation', body: 'Apps translated into multiple languages from one set of strings.' },
  { tag: 'UI', title: 'Accessibility', body: 'Screen-reader labels, readable contrast and tap targets checked before release.' },
];

export type Job = {
  role: string;
  company: string;
  dates: string;
  place: string;
  bullets: string[];
  /** Apps built for the employer or its clients. Never shown as personal work. */
  companyWork?: string[];
  /** Trailing summary chip after companyWork, e.g. "15+ more". */
  companyWorkMore?: string;
};

export const experience: Job[] = [
  {
    role: 'Senior Flutter Developer',
    company: 'Kmphitech LLP',
    dates: 'Mar 2024 – Present',
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
    companyWorkMore: '15+ more',
  },
  {
    role: 'Senior Flutter Developer',
    company: 'CodeInfosys',
    dates: 'Dec 2022 – Feb 2024',
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
    dates: 'Oct 2022 – Nov 2022',
    place: 'Surat, Gujarat',
    bullets: [
      'Delivered features alongside designers and backend developers on fixed timelines.',
      'Tested, debugged and tuned performance across devices; integrated Google AdMob.',
    ],
  },
  {
    role: 'Flutter Intern',
    company: 'iFlutter Institute',
    dates: 'Apr 2022 – Sep 2022',
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
  dates: '2021 – 2024',
};

export const stack: { group: string; items: string }[] = [
  { group: 'Languages & frameworks', items: 'Dart, Flutter, JavaScript, Node.js, NestJS, Express.js' },
  { group: 'State & routing', items: 'BLoC, Provider, GetX, GoRouter, Streams, RxDart' },
  { group: 'Architecture', items: 'SOLID, Clean Architecture, MVVM, MVC, repository pattern, get_it, injectable' },
  { group: 'Data', items: 'REST, Dio, Retrofit, Hive, Sqflite, Shared Preferences, Socket.IO' },
  { group: 'Firebase', items: 'Auth, Cloud Firestore, Cloud Messaging, Crashlytics' },
  { group: 'Auth & security', items: 'Google & Apple Sign-In, OAuth 2.0, JWT, secure storage, RBAC' },
  { group: 'Platform', items: 'Platform channels, native views, Google Maps, deep links, i18n, IoT SDKs' },
  { group: 'Payments', items: 'In-app purchases, RevenueCat, AdMob, third-party gateways' },
  { group: 'Quality', items: 'Widget & unit tests, accessibility checks, DevTools profiling, isolates' },
  { group: 'Shipping', items: 'Play Console, App Store Connect, TestFlight, Git, GitHub' },
];
