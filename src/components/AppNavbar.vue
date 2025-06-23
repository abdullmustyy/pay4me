<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>
  <nav class="bg-icy-blue px-12 flex items-center justify-between h-30">
    <RouterLink to="/">
      <img src="@/assets/images/webps/logo.webp" alt="Logo" class="h-20" />
    </RouterLink>

    <ul class="flex items-center gap-4 font-medium">
      <li>
        <RouterLink to="" class="before-hover-transform-link">About</RouterLink>
      </li>
      <li>
        <RouterLink to="" class="before-hover-transform-link">Blog</RouterLink>
      </li>
      <li>
        <RouterLink to="" class="before-hover-transform-link">Support</RouterLink>
      </li>
    </ul>

    <button class="button-primary">Make a payment</button>
  </nav>
</template>
