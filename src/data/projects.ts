// Personal demo projects ONLY. Employer / client apps belong in profile.ts → experience.
//
// Add a project by appending an object below. Each one gets:
//   • a card in the "Personal projects" section of the home page
//   • its own page at /projects/<slug>
// While this list is empty, the home page shows an honest "on the way" panel instead.

export type Project = {
  slug: string; // url-safe, e.g. 'habit-tracker'
  title: string;
  tagline: string; // one sentence for the card
  summary: string; // a short paragraph for the project page
  stack: string[]; // e.g. ['Flutter', 'BLoC', 'Hive']
  highlights: string[]; // what was interesting / hard, one line each
  year: string;
  links?: { source?: string; demo?: string; playStore?: string; appStore?: string };
  image?: string; // path under /public, e.g. '/projects/habit-tracker.png'
};

export const projects: Project[] = [
  // {
  //   slug: 'example-app',
  //   title: 'Example App',
  //   tagline: 'What it does, in one sentence.',
  //   summary: 'Why you built it and what problem it solves.',
  //   stack: ['Flutter', 'BLoC', 'GoRouter'],
  //   highlights: ['Offline-first sync with Hive', 'Custom animated charts with CustomPaint'],
  //   year: '2026',
  //   links: { source: 'https://github.com/…', demo: 'https://…' },
  //   image: '/projects/example-app.png',
  // },
];
