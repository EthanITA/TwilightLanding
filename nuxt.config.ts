// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss', '@nuxt/image', 'nuxt-gtag', '@formkit/auto-animate/nuxt', 'nuxt-aos'],
  devtools: { enabled: false, telemetry: false },
  app: {
    head: {
      htmlAttrs: {
        lang: 'en',
      },
      meta: [
        {
          charset: 'utf-8',
        },
        {
          name: 'description',
          content:
            'Twilight is the future of productivity that helps you organize your commitments and tasks minimizing the time spent on planning and organizing.',
        },
        {
          name: 'viewport',
          content: 'width=device-width, initial-scale=1',
        },
        // Open Graph
        {
          property: 'og:title',
          content: 'Twilight: Embrace The Future of Productivity',
        },
        {
          property: 'og:description',
          content:
            'Twilight is the future of productivity that helps you organize your commitments and tasks minimizing the time spent on planning and organizing.',
        },
        {
          property: 'og:image',
          content: 'https://twilight-landing.vercel.app/splash.png',
        },
        {
          property: 'og:url',
          content: 'https://twilight-landing.vercel.app/',
        },
        {
          property: 'og:type',
          content: 'website',
        },
        {
          property: 'og:site_name',
          content: 'Twilight',
        },
        // Twitter
        {
          name: 'twitter:card',
          content: 'summary_large_image',
        },
        {
          name: 'twitter:title',
          content: 'Twilight: Embrace The Future of Productivity',
        },
        {
          name: 'twitter:description',
          content:
            'Twilight is the future of productivity that helps you organize your commitments and tasks minimizing the time spent on planning and organizing.',
        },
        {
          name: 'twitter:image',
          content: 'https://twilight-landing.vercel.app/splash.png',
        },
      ],
      title: 'Twilight: Embrace The Future of Productivity',
      link: [
        {
          href: 'https://fonts.googleapis.com/css2?family=Nunito+Sans:ital,opsz,wght@0,6..12,200..1000;1,6..12,200..1000&display=swap',
          rel: 'preload',
          as: 'style',
          onload: "this.onload=null;this.rel='stylesheet'",
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
              'Twilight is the future of productivity that helps you organize your commitments and tasks minimizing the time spent on planning and organizing.',
          }),
        },
      ],
    },
  },
  css: ['~/assets/css/main.css'],
  gtag: {
    id: 'G-5GTWL3S8GP',
  },
  aos: {
    duration: 1000,
  },
});
