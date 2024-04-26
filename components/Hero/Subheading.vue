<script lang="ts" setup>
const mounted = ref(false);

onMounted(() => {
  mounted.value = true;
});
</script>

<template>
  <p class="mt-6 max-w-xl text-lg leading-8 text-gray-600 md:text-xl">
    Twilight helps busy people to stay <span class="font-bold">ahead</span> of their schedule <span class="font-bold">effortlessly</span>
    with AI-driven suggestions.
  </p>
</template>

<style scoped></style>
