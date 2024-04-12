<script lang="ts" setup>
import { onMounted } from 'vue';

const mounted = ref(false);
onMounted(() => {
  mounted.value = true;
});
</script>

<template>
  <h1
    :class="{
      'text-4xl opacity-100 sm:text-6xl': mounted,
      'text-xl opacity-0 sm:text-2xl': !mounted,
    }"
    class="font-semibold tracking-tight text-gray-900 transition-all duration-[2500ms] ease-in-out"
  >
    Embrace the Future of
    <span class="flex items-center justify-center gap-2 text-center font-bold text-secondary">
      <span class="selection:bg-secondary/40"> AI Productivity </span>
      <IconPen />
    </span>
    with
    <span class="select font-extrabold text-primary selection:bg-primary/40">Twilight.</span>
  </h1>
</template>

<style scoped></style>
