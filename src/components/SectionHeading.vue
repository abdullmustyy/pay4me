<script setup lang="ts">
import SparkleLeft from './icons/SparkleLeft.vue'
import SparkleRight from './icons/SparkleRight.vue'

defineProps<{ heading: string }>()
</script>

<template>
  <div class="flex items-center justify-center gap-2 mb-6">
    <SparkleLeft />
    <h2 class="text-5xl font-bold">{{ heading }}</h2>
    <SparkleRight />
  </div>
</template>
