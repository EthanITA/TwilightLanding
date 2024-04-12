<template>
  <div
    :class="{
      'opacity-100': mounted,
      'opacity-0': !mounted,
    }"
    class="mt-10 flex justify-center transition-all duration-[2s]"
  >
    <button
      :class="{
        'rounded-2xl bg-secondary text-base text-white shadow-2xl duration-1000 hover:border-primary hover:bg-primary hover:shadow-primary focus-visible:outline-primary':
          animationDone,
        'rounded-md text-sm text-secondary duration-300 hover:border-secondary hover:bg-secondary/95 hover:text-white focus-visible:outline-secondary':
          !animationDone,
        'before:ease before:absolute before:right-0 before:top-0 before:h-12 before:w-6 before:translate-x-12 before:rotate-6 before:bg-white before:opacity-10 before:duration-700 hover:before:-translate-x-52':
          animationDone,
      }"
      class="relative overflow-hidden border border-secondary px-4 py-3 font-semibold transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
    >
      <span class="relative z-10">Join the waiting list ✨</span>
    </button>
  </div>
</template>
<script lang="ts" setup>
const mounted = ref(false);
const animationDone = ref(false);

const props = defineProps<{
  animationWait?: number;
}>();
onMounted(() => {
  mounted.value = true;
  setTimeout(() => {
    animationDone.value = true;
  }, props.animationWait ?? 1000);
});
</script>

<style scoped></style>
