<script lang="ts" setup>
const element = ref<HTMLDivElement | null>(null);
const emits = defineEmits<{
  (e: 'intersect', isIntersecting: boolean): void;
}>();
onMounted(() => {
  new IntersectionObserver((entries) => emits('intersect', entries[0].isIntersecting)).observe(element.value!);
});
</script>

<template>
  <div ref="element">
    <slot />
  </div>
</template>

<style scoped></style>
