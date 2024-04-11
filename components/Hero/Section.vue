<template>
  <div class="relative isolate flex-1 px-6 pt-14 lg:px-8">
    <div aria-hidden="true" class="pointer-events-none absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
      <div
        class="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
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
    <div class="mx-auto max-w-2xl py-28 sm:py-32 lg:py-48">
      <div class="text-center">
        <h1
          :class="{
            'text-4xl opacity-100 sm:text-6xl': mounted,
            'text-xl opacity-0 sm:text-2xl': !mounted,
          }"
          class="font-semibold tracking-tight text-gray-900 transition-all duration-[2500ms] ease-in-out"
        >
          Embrace the Future of
          <span class="flex items-center justify-center gap-2 text-center font-bold text-secondary">
            <span> AI Productivity </span>
            <svg class="css-1xvso8j" fill="none" height="46" viewBox="0 0 44 46" width="44" xmlns="http://www.w3.org/2000/svg">
              <path
                d="m3.88 4 22.03 7.49a13.12 13.12 0 0 1 8.36 17.12l5.82 6.43-8.84 8-5.78-6.38A13.11 13.11 0 0 1 9.02 26.02zm0 0 18.05 19.95"
                stroke="currentColor"
                stroke-width="4"
              ></path>
              <path d="M24.12 26.72a3.58 3.58 0 1 1-4.8-5.3 3.58 3.58 0 0 1 4.8 5.3" fill="currentColor"></path>
            </svg>
          </span>
          with
          <span class="font-extrabold text-primary">Twilight.</span>
        </h1>
        <p class="mt-6 text-lg leading-8 text-gray-600">
          <span
            :class="{
              'opacity-100': mounted,
            }"
            class="opacity-0 transition-opacity delay-[2250ms] duration-1000"
          >
            Plan.
          </span>
          <span
            :class="{
              'opacity-100': mounted,
            }"
            class="opacity-0 transition-opacity delay-[3250ms] duration-1000"
          >
            Execute.
          </span>
          <span
            :class="{
              'opacity-100': mounted,
            }"
            class="opacity-0 transition-opacity delay-[4250ms] duration-1000"
          >
            Adapt.
          </span>
        </p>
        <div
          :class="{
            'opacity-100': mounted,
            'opacity-0': !mounted,
          }"
          class="mt-10 flex justify-center transition-all duration-[2s]"
        >
          <a
            :class="{
              'rounded-2xl bg-secondary text-base text-white shadow-2xl duration-1000 hover:border-primary hover:bg-primary hover:shadow-primary focus-visible:outline-primary':
                animationDone,
              'rounded-md text-sm text-secondary duration-300 hover:border-secondary hover:bg-secondary/95 hover:text-white focus-visible:outline-secondary':
                !animationDone,
              'before:ease before:absolute before:right-0 before:top-0 before:h-12 before:w-6 before:translate-x-12 before:rotate-6 before:bg-white before:opacity-10 before:duration-700 hover:before:-translate-x-52':
                animationDone,
            }"
            class="relative overflow-hidden border border-secondary px-4 py-3 font-semibold transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
            href="#"
          >
            <span class="relative z-10">Join the waiting list ✨</span>
          </a>
        </div>
      </div>
    </div>
    <div
      aria-hidden="true"
      class="pointer-events-none absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
    >
      <div
        class="from-primary-500 relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr to-secondary opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
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
  </div>
</template>

<script lang="ts" setup>
const mounted = ref(false);
const animationDone = ref(false);

onMounted(() => {
  mounted.value = true;
  setTimeout(() => {
    animationDone.value = true;
  }, 4750);
});
</script>
