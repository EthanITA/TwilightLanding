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
      <div class="mx-auto grid max-w-2xl grid-cols-1 justify-end gap-x-8 gap-y-16 overflow-hidden sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
        <div class="flex items-center lg:pl-8 lg:pt-4">
          <div class="flex flex-col lg:max-w-lg" data-aos="fade-up">
            <h2 class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Adapt your schedule</h2>
            <p class="mt-6 text-lg leading-8">
              Focus on what truly matters. Twilight will keep your schedules <span class="font-bold text-gray-700">clean and organized</span>
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
          class="relative mt-auto flex flex-1 flex-col items-end justify-end rounded-lg p-4 md:ml-4 lg:ml-0 [&>*]:w-4/5"
          data-aos="fade-left"
          data-aos-once="true"
        >
          <video
            ref="video"
            class="rounded-3xl border border-gray-100 bg-white p-2 shadow-sm"
            loop
            muted
            playsinline
            poster="~/assets/posters/autoreschedule.png"
            preload="none"
          >
            <source src="~/assets/videos/autoreschedule.mp4" type="video/mp4" />
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
import { ClockIcon, RectangleStackIcon, ShieldExclamationIcon } from '@heroicons/vue/24/outline';

const features = [
  {
    name: 'Reschedule your plan.',
    description: 'Automatically tasks rescheduling based on your availability.',
    icon: RectangleStackIcon,
  },
  {
    name: 'Protect from overbooking.',
    description: 'Avoid double-booking and overlapping schedules.',
    icon: ShieldExclamationIcon,
  },
  {
    name: 'Delay low-priority tasks.',
    description: 'Automatically delay tasks that are not urgent.',
    icon: ClockIcon,
  },
];
</script>

<style scoped></style>
