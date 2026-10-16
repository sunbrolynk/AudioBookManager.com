import { markdownSafeUrls } from './src/lib/markdown-safe-urls.mjs';
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import { satteri } from '@astrojs/markdown-satteri';
import locales from './src/locales.json' with { type: 'json' };
import sidebarLabels from './src/sidebar-labels.json' with { type: 'json' };
import { htmlAsText } from './src/lib/html-as-text.mjs';

export default defineConfig({
  site: 'https://audiobookmanager.com',
  // Stylesheets as files, so the Content-Security-Policy needs no inline-style allowance for them.
  build: { inlineStylesheets: 'never' },
  markdown: { processor: satteri({ mdastPlugins: [htmlAsText, markdownSafeUrls] }) },
  integrations: [
    starlight({
      title: 'AudioBook Manager',
      description: 'Documentation and release notes for AudioBook Manager (ABM).',
      // English is the root. Only locales that scripts/check-locales.mjs finds complete may be in locales.json.
      defaultLocale: 'root',
      locales: { root: { label: 'English (US)', lang: 'en' }, ...locales },
      favicon: '/favicon.png',
      social: [
        { icon: 'github', label: 'GitHub', href: 'https://github.com/sunbrolynk/AudioBook-Manager' },
      ],
      customCss: ['./src/styles/custom.css'],
      components: {
        Header: './src/components/overrides/Header.astro',
        PageTitle: './src/components/overrides/PageTitle.astro',
        Footer: './src/components/overrides/Footer.astro',
        ThemeSelect: './src/components/overrides/ThemeSelect.astro',
      },
      sidebar: [
        { label: 'Getting started', translations: sidebarLabels['Getting started'], items: ['installation', 'getting-started/quick-start'] },
        { label: 'Using ABM', translations: sidebarLabels['Using ABM'], items: ['using/library', 'using/add-new', 'library-import', 'using/series-tracking', 'using/wanted', 'using/activity', 'using/calendar', 'using/discover', 'audible', 'using/conversions', 'using/chapters', 'using/sidecars', 'phone'] },
        { label: 'Metadata & Libex', translations: sidebarLabels['Metadata & Libex'], items: ['metadata/libex', 'metadata/control', 'metadata/cover-lock', 'metadata/choosing-a-source'] },
        { label: 'Settings', translations: sidebarLabels['Settings'], items: ['settings/media-management', 'settings/audible', 'settings/conversions', 'settings/discover', 'settings/profiles', 'settings/indexers', 'settings/download-clients', 'settings/import-lists', 'settings/connect', 'settings/metadata', 'settings/tags', 'settings/general', 'settings/security', 'settings/ui', 'configuration'] },
        { label: 'System', translations: sidebarLabels['System'], items: ['system/status', 'system/tasks', 'system/activity-log', 'system/logs', 'system/backups', 'system/calibration', 'system/api', 'api-reference'] },
        { label: 'Guides', translations: sidebarLabels['Guides'], items: ['guides/reverse-proxy', 'guides/coming-from-readarr-sonarr', 'guides/moving-a-library-in'] },
        { label: 'Help', translations: sidebarLabels['Help'], items: ['faq', 'troubleshooting', 'help/glossary', 'updates'] },
      ],
    }),
  ],
});
