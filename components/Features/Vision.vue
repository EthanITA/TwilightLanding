<template>
  <div class="bg-gradient-to-b from-transparent to-primary/5 py-24 sm:py-32">
    <div class="mx-auto max-w-6xl px-6 lg:px-8" data-aos="fade-up">
      <div class="mx-auto max-w-2xl sm:text-center">
        <h2 class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">And more...</h2>
        <p class="mt-6 text-lg leading-8">
          Imagine a world where your productivity is not just a goal but a reality. Twilight is the first step to that world.
        </p>
      </div>
    </div>
    <div class="mx-auto max-w-6xl px-6 lg:px-8">
      <div class="mx-auto mt-16 max-w-6xl px-6 sm:mt-20 md:mt-24 lg:px-8">
        <dl
          class="mx-auto grid max-w-2xl grid-cols-1 gap-x-6 gap-y-10 text-base leading-7 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:gap-x-8 lg:gap-y-16"
        >
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
  </div>
</template>

<script setup>
import { CogIcon, FireIcon, SparklesIcon } from '@heroicons/vue/24/outline';
import { LockClosedIcon } from '@heroicons/vue/24/outline/index.js';

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
    name: 'Privacy First',
    description: "We don't just say it, we mean it. Your data is used to empower you, not to monetize or sell.",
    icon: LockClosedIcon,
  },
  {
    name: 'Personal Assistant',
    description: 'A personal assistant that knows you better than you know yourself.',
    icon: FireIcon,
  },
];
</script>
