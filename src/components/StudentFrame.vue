<script setup lang="ts">
import PlayCircle from './icons/PlayCircle.vue'
import StarIcon from './icons/StarIcon.vue'

defineProps({
  studentName: {
    type: String,
    required: true,
  },
})
</script>

<template>
  <div class="flex flex-col items-center -space-y-18">
    <div class="size-75 flex items-center justify-center bg-yellow-green rounded-full">
      <div class="size-65 flex items-center justify-center relative bg-primary rounded-full">
        <slot></slot>
        <PlayCircle class="absolute" />
      </div>
    </div>

    <div class="flex flex-col items-center justify-center w-[calc(100%-1rem)] h-22 bg-icy-blue rounded-2xl border border-primary/20 shadow-[0_4px_4px_#00000045] z-10">
      <span class="text-2xl">{{ studentName }}</span>
      <div class="flex items-center gap-2.5">
        <StarIcon v-for="(_, index) in Array.from({ length: 5 })" :key="index" />
      </div>
    </div>
  </div>
</template>
