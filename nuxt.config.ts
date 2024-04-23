// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss', '@nuxt/image', 'nuxt-gtag', '@formkit/auto-animate/nuxt', 'nuxt-aos', '@nuxtjs/seo'],
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
          name: 'viewport',
          content: 'width=device-width, initial-scale=1',
        },
        {
          property: 'og:image',
          content: 'https://twilight-landing.vercel.app/splash.png',
        },
        {
          property: 'og:type',
          content: 'website',
        },
      ],
      link: [
        {
          href: 'https://fonts.googleapis.com/css2?family=Nunito+Sans:ital,opsz,wght@0,6..12,200..1000;1,6..12,200..1000&display=swap',
          rel: 'preload',
          as: 'style',
          onload: "this.onload=null;this.rel='stylesheet'",
        },
        {
          rel: 'icon',
          type: 'image/x-icon',
          href: '/favicon.ico',
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
    id: 'GTM-P3RJPX78',
  },
  aos: {
    duration: 1000,
  },
  site: {
    url: 'https://twilight-landing.vercel.app/',
    name: 'Twilight',
    description:
      'Twilight is the future of productivity that helps you organize your commitments and tasks minimizing the time spent on planning and organizing.',
    defaultLocale: 'en',
  },
});
