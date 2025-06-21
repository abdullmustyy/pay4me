<script lang="ts" setup>
interface IWhyCardProps {
  heading: string
  description: string
}

defineProps<IWhyCardProps>()
</script>

<template>
  <div class="flex flex-col pt-10 rounded-4xl border border-black/20 overflow-hidden">
    <div class="flex flex-col gap-2 px-4">
      <h5 class="text-2xl font-bold">{{ heading }}</h5>
      <p class="text-foreground/80">{{ description }}</p>
    </div>

    <slot></slot>
  </div>
</template>
