<template>
  <div class="relative py-24 sm:py-32">
    <div
      aria-hidden="true"
      class="pointer-events-none absolute inset-x-0 top-[15rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-80rem)] lg:top-[calc(100%-10rem)]"
    >
      <div
        class="relative left-[calc(50%)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 -rotate-90 bg-gradient-to-tr from-primary-500 to-secondary opacity-30 sm:left-[calc(50%)] sm:w-[72.1875rem] lg:rotate-180"
        style="
          clip-path: polygon(
            74.1% 44.1%,
            100% 61.6%,
            97.5% 26.9%,
            85.5% 0.1%,
            80.7% 2%,
            72.5% 32.5%,
            60.2% 62.4%,
            52.4% 68.1%,
            47.5% 58.3%,
            45.2% 34.5%,
            27.5% 76.7%,
            0.1% 64.9%,
            17.9% 100%,
            27.6% 76.8%,
            76.1% 97.7%,
            74.1% 44.1%
          );
        "
      ></div>
    </div>

    <div class="mx-auto max-w-6xl overflow-x-hidden px-6 lg:px-8">
      <div class="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 overflow-hidden sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
        <div class="flex items-center lg:pl-8 lg:pt-4">
          <div class="lg:max-w-lg" data-aos="fade-up">
            <h2 class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Twilight prepare. You decide.</h2>
            <p class="mt-6 text-lg leading-8">
              Twilight is an AI-driven platform <span class="font-bold">simple to use and reliable</span>. No overcomplicated features and unnecessary
              settings.
            </p>
            <dl class="mt-10 max-w-xl space-y-8 text-base leading-7 lg:max-w-none">
              <div v-for="feature in features" :key="feature.name" class="relative pl-9">
                <dt class="inline font-bold">
                  <component :is="feature.icon" aria-hidden="true" class="absolute left-1 top-1 h-5 w-5" />
                  {{ feature.name }}
                </dt>
                {{ ' ' }}
                <dd class="inline">{{ feature.description ?? '' }}</dd>
              </div>
            </dl>
          </div>
        </div>
        <div
          class="relative -z-50 mt-auto flex flex-1 flex-col items-end justify-end rounded-3xl md:ml-4 lg:ml-0"
          data-aos="fade-left"
          data-aos-once="true"
        >
          <video ref="video" loop muted playsinline poster="~/assets/posters/notifications.png" preload="none">
            <source src="~/assets/videos/notifications.mp4" type="video/mp4" />
          </video>
          <Intersection
            class="absolute bottom-[50%] right-[50%] mb-10"
            @intersect="
              (e) => {
                if (e) ($refs.video as HTMLVideoElement).play();
                else ($refs.video as HTMLVideoElement).pause();
              }
            "
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { Component } from 'vue';
import FromEmily from '~/components/Demo/FromEmily.vue';
import Twilight from '~/components/Demo/Twilight.vue';
import { CalendarDaysIcon, ClipboardDocumentListIcon, LockOpenIcon } from '@heroicons/vue/24/outline';

const automationComponents: Component[] = [FromEmily, Twilight];
const count = ref(-1);
const interval = ref<NodeJS.Timeout | null>(null);
const isIntersecting = ref(false);
watch(isIntersecting, (value) => {
  if (value) {
    clearInterval(interval.value!);

    setTimeout(() => {
      count.value = -1;
      count.value++;
      interval.value = setInterval(() => {
        count.value++;
        if (count.value === automationComponents.length) {
          clearInterval(interval.value!);
        }
      }, 1500);
    }, 100);
  }
});

const features = [
  {
    name: 'Schedule and Reschedule meetings.',
    description: 'Accept or adjust it with ease.',
    icon: CalendarDaysIcon,
  },
  {
    name: 'Copy OTP and Open Confirmation Link.',
    description: 'Just a click away from you to use.',
    icon: LockOpenIcon,
  },
  {
    name: 'Summarize and delay informational content.',
    description: 'Save time and keep your focus.',
    icon: ClipboardDocumentListIcon,
  },
];
</script>
