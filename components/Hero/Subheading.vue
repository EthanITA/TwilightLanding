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
</template>

<style scoped></style>
