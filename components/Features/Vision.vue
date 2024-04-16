<template>
  <div class="py-24 sm:py-32">
    <div class="mx-auto max-w-6xl px-6 lg:px-8" data-aos="fade-up">
      <div class="mx-auto max-w-2xl sm:text-center">
        <h2 class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Twilight's vision.</h2>
        <p class="mt-6 text-lg leading-8">
          Imagine in the near future where technologies integrate deeper into your life, whether it will be
          <span class="font-bold">Mixed Reality headset, the Metaverse or Holograms</span> —
          <span class="font-bold text-gray-700">Twilight wants to be there</span> — empowering you by knowing your schedule, your habits, your goals,
          your peaks, and your valleys.
        </p>
      </div>
    </div>
    <div class="relative overflow-hidden md:mt-[-2rem]">
      <div class="mx-auto max-w-6xl bg-gradient-to-b from-transparent to-primary/5 px-6 lg:px-8">
        <img alt="Future Tech" class="mb-[-12%]" data-aos="zoom-in" height="1080" loading="lazy" src="~/assets/images/futureTech.png" width="1920" />
        <div aria-hidden="true" class="relative">
          <div class="absolute -inset-x-20 bottom-0 bg-gradient-to-t from-primary/5 pt-[7%]" />
        </div>
      </div>
    </div>
    <div class="mx-auto mt-16 max-w-6xl px-6 sm:mt-20 md:mt-24 lg:px-8">
      <dl class="mx-auto grid max-w-2xl grid-cols-1 gap-x-6 gap-y-10 text-base leading-7 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:gap-x-8 lg:gap-y-16">
        <div v-for="feature in features" :key="feature.name" class="relative pl-9" data-aos="zoom-in">
          <dt class="inline font-bold">
            <component :is="feature.icon" aria-hidden="true" class="absolute left-1 top-1 h-5 w-5" />
            {{ feature.name }}.
          </dt>
          {{ ' ' }}
          <dd class="inline">{{ feature.description }}</dd>
        </div>
      </dl>
    </div>
  </div>
</template>

<script setup>
import { BeakerIcon, CogIcon, FireIcon, SparklesIcon } from '@heroicons/vue/24/outline';

const features = [
  {
    name: 'AI Assistance',
    description: "An AI that doesn't just assist but empowers and enriches your whole workflow.",
    icon: SparklesIcon,
  },
  {
    name: '3rd-party Integrations',
    description: 'Twilight will be the bridge between your favorite apps and services.',
    icon: CogIcon,
  },
  {
    name: 'Future Tech Integration',
    description: "Twilight is not only for today's world; it's crafted with tomorrow's revolution in mind.",
    icon: BeakerIcon,
  },
  {
    name: 'JARVIS for Everyone',
    description: 'Think JARVIS for Ironman, but for every one of us.',
    icon: FireIcon,
  },
];
</script>
