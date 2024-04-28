<script lang="ts" setup>
import { computed } from 'vue';

const props = defineProps<{
  color?: 'primary' | 'none';
}>();

const color = computed(() =>
  props.color === 'primary'
    ? 'bg-primary text-gray-50 shadow-sm hover:shadow-md focus-visible:bg-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 active:shadow-none active:duration-150 active:translate-y-0 hover:-translate-y-0.5'
    : 'bg-none text-gray-500 hover:bg-gray-100 focus-visible:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2',
);
</script>

<template>
  <button :class="color" class="rounded-2xl px-4 py-2 transition-all duration-200">
    <slot />
  </button>
</template>

<style scoped></style>
