// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxt/ui', '@nuxt/image', '@vite-pwa/nuxt'],
  pwa: {
    manifest: {
      name: 'Twilight',
      short_name: 'Twilight',
      description:
        'Twilight is the next generation productivity tool that helps you organize your commitments and tasks minimizing the time spent on planning and organizing.',
      theme_color: '#6365f1',
      background_color: '#111827',
      display: 'standalone',
      lang: 'en',
      scope: '/',
      start_url: '/',
      icons: [
        {
          src: '/favicon.svg',
          sizes: '192x192',
          type: 'image/svg+xml',
        },
      ],
    },
  },
  devtools: { enabled: false, telemetry: false },
  app: {
    head: {
      htmlAttrs: {
        lang: 'en',
      },
      meta: [
        {
          name: 'description',
          content:
            'Twilight is the next generation productivity tool that helps you organize your commitments and tasks minimizing the time spent on planning and organizing.',
        },
        {
          name: 'viewport',
          content: 'width=device-width, initial-scale=1',
        },
        // Open Graph
        {
          property: 'og:title',
          content: 'Twilight: Next generation productivity tool',
        },
        {
          property: 'og:description',
          content:
            'Twilight is the next generation productivity tool that helps you organize your commitments and tasks minimizing the time spent on planning and organizing.',
        },
        {
          property: 'og:image',
          content: 'https://twilight-landing.vercel.app/splash.png',
        },
        {
          property: 'og:url',
          content: 'https://twilight-landing.vercel.app/',
        },
        // Twitter
        {
          name: 'twitter:card',
          content: 'summary_large_image',
        },
        {
          name: 'twitter:title',
          content: 'Twilight: Next generation productivity tool',
        },
        {
          name: 'twitter:description',
          content:
            'Twilight is the next generation productivity tool that helps you organize your commitments and tasks minimizing the time spent on planning and organizing.',
        },
        {
          name: 'twitter:image',
          content: 'https://twilight-landing.vercel.app/splash.png',
        },
      ],
      title: 'Twilight: Next generation productivity tool',
      link: [
        {
          href: 'https://fonts.googleapis.com/css2?family=Nunito+Sans:ital,opsz,wght@0,6..12,200..1000;1,6..12,200..1000&display=swap',
          rel: 'stylesheet',
        },
        {
          rel: 'icon',
          type: 'image/svg+xml',
          href: '/favicon.svg',
        },
      ],
      script: [
        {
          type: 'application/ld+json',
          innerHTML: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'SoftwareApplication',
            name: 'Twilight',
            url: 'https://twilight-landing.vercel.app/',
            logo: 'https://twilight-landing.vercel.app/favicon.svg',
            description:
              'Twilight is the next generation productivity tool that helps you organize your commitments and tasks minimizing the time spent on planning and organizing.',
          }),
        },
      ],
    },
  },
  css: ['~/assets/css/main.css'],
});
