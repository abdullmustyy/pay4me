<script lang="ts" setup>
import AppleIcon from './icons/AppleIcon.vue'
import GooglePlay from './icons/GooglePlay.vue'

interface IStoreBadgeProps {
  storeName: 'apple' | 'google'
  storeUrl?: string
}

defineProps<IStoreBadgeProps>()
</script>

<template>
  <RouterLink to="">
    <div
      class="flex items-center gap-1.5 bg-icy-blue px-4 py-2 rounded-2xl border border-steel-gray"
    >
      <div
        class="flex items-center gap-1.5"
      >
        <AppleIcon v-if="storeName === 'apple'" />
        <GooglePlay v-else-if="storeName === 'google'" />
        <span class="text-xl text-foreground/70"
          >{{ storeName === 'apple' ? 'App' : 'Play' }} Store</span
        >
      </div>

      <div class="h-8 w-[1px] bg-black" />

      <span class="text-xl text-black">More Reviews</span>
    </div>
  </RouterLink>
</template>
