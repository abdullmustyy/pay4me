<script lang="ts" setup>
interface IBlogCardProps {
  id: number
  title: string
  intro: string
  image: string
  date: string
  author: string
  link: string
}

defineProps<IBlogCardProps>()
</script>

<template>
  <div class="bg-white">
    <div class="h-54"><img :src="image" alt="" class="size-full object-cover" /></div>
    <div class="flex flex-col gap-4 px-10 py-6">
      <p class="text-sm text-cool-gray">{{ date }} | By {{ author }}</p>
      <h3 class="text-2xl">{{ title }}</h3>
      <hr class="border-cloud-gray" />
      <p class="text-cool-gray">{{ intro }}</p>
      <RouterLink :to="link" class="w-fit">
        <div class="flex items-center gap-4 text-primary">
          <span class="text-sm font-semibold">READ MORE</span>
          <i class="pi pi-arrow-right text-xs!" />
        </div>
      </RouterLink>
    </div>
  </div>
</template>
