// @ts-check
import { defineConfig } from 'astro/config';

// Public URL (GitHub Pages user site). Used for canonical URLs and OG tags.
export default defineConfig({
  site: 'https://jpadsala-dev.github.io',
  // Hide Astro's floating dev toolbar so localhost looks like the real site.
  devToolbar: { enabled: false },
});
