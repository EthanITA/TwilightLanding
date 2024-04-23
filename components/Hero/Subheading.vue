<script lang="ts" setup>
const mounted = ref(false);

onMounted(() => {
  mounted.value = true;
});
</script>

<template>
  <p class="mt-6 text-lg leading-8 text-gray-600">
    <span
      :class="{
        'opacity-100': mounted,
      }"
      class="opacity-0 transition-opacity delay-[1000ms] duration-1000 ease-in-out"
    >
      Easy.
    </span>
    <span
      :class="{
        'opacity-100': mounted,
      }"
      class="opacity-0 transition-opacity delay-[1750ms] duration-1000 ease-in-out"
    >
      Efficient.
    </span>
    <span
      :class="{
        'opacity-100': mounted,
      }"
      class="opacity-0 transition-opacity delay-[2500ms] duration-1000 ease-in-out"
    >
      Proactive.
    </span>
  </p>
</template>

<style scoped></style>
