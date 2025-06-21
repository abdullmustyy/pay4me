<script setup lang="ts">
import PlayCircle from './icons/PlayCircle.vue'
</script>

<template>
  <div class="size-75 flex items-center justify-center bg-yellow-green rounded-full">
    <div class="size-65 flex items-center justify-center relative bg-primary rounded-full">
      <slot></slot>
      <PlayCircle class="absolute" />
    </div>
  </div>
</template>
