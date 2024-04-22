<template>
  <div class="mt-10 flex justify-center" data-aos="zoom-in">
    <CTAModal v-model:open="open" />
    <button
      id="join-waitlist"
      ref="button"
      :class="{
        '!translate-y-0.5 !shadow-none !duration-150': clicked,
      }"
      class="before:ease relative overflow-hidden rounded-2xl border border-secondary bg-secondary px-4 py-3 text-base font-semibold text-white shadow-2xl transition-all duration-700 before:absolute before:right-0 before:top-0 before:h-12 before:w-6 before:translate-x-12 before:rotate-6 before:bg-white before:opacity-10 before:duration-700 hover:border-primary hover:bg-primary hover:shadow-primary hover:before:-translate-x-52 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
      @mousedown="CtaClick"
    >
      <span class="relative z-10">Join Waitlist ✨</span>
    </button>
  </div>
</template>
<script lang="ts" setup>
const open = ref(false);
const clicked = ref(false);
const CtaClick = () => {
  if (clicked.value) return;
  clicked.value = true;
  setTimeout(() => {
    clicked.value = false;
    open.value = true;
  }, 220);
};
</script>

<style scoped></style>
