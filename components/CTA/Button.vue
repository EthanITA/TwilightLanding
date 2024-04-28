<template>
  <div class="flex justify-center" data-aos="zoom-in">
    <CTAModal v-model:open="open" />
    <button
      id="join-waitlist"
      ref="button"
      :class="{
        'rounded-2xl px-4 py-3 text-lg': big,
        'rounded-xl px-3 py-2 text-sm': !big,
      }"
      class="before:ease relative overflow-hidden border border-secondary bg-secondary font-semibold text-white shadow-2xl transition-all duration-1000 before:absolute before:right-0 before:top-0 before:h-12 before:w-6 before:translate-x-12 before:rotate-6 before:bg-white before:opacity-10 before:duration-700 hover:border-primary hover:bg-primary hover:shadow-primary hover:before:-translate-x-52 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary active:translate-y-0.5 active:shadow-none active:duration-150"
      @mouseup="() => (open = true)"
    >
      <span class="relative z-10">Sign up ✨</span>
    </button>
  </div>
</template>
<script lang="ts" setup>
const open = ref(false);
defineProps<{
  big?: boolean;
}>();
</script>

<style scoped></style>
