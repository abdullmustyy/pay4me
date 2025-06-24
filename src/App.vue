<script setup lang="ts">
import { useHead } from '@unhead/vue'
import { RouterView } from 'vue-router'
import AppFooter from './components/AppFooter.vue'
import AppNavbar from './components/AppNavbar.vue'

const metadataBaseUrl = 'https://abdul-pay4me.vercel.app'
const metadataBaseImage = `${metadataBaseUrl}/favicon.png`
const title = 'Pay4Me — Cross-border Payment for International Students'
const description =
  'The easiest and fastest way to pay tuition and fees to educational institutions, businesses, and government agencies worldwide.'

useHead({
  title: 'Home',
  titleTemplate: '%s %separator %siteName',
  templateParams: {
    siteName: title,
  },
  meta: [
    {
      name: 'description',
      content: description,
    },
    {
      name: 'keywords',
      content: 'payment, platform, secure, easy, payment gateway, online payment',
    },
    { name: 'author', content: 'Pay4Me Team' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    { property: 'og:title', content: '%s %separator %siteName' },
    {
      property: 'og:description',
      content: description,
    },
    { property: 'og:url', content: metadataBaseUrl },
    { property: 'og:site_name', content: title },
    { property: 'og:image', content: metadataBaseImage },
    { property: 'og:type', content: 'website' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:creator', content: '@pay4me' },
    { name: 'twitter:title', content: '%s %separator %siteName' },
    {
      name: 'twitter:description',
      content: description,
    },
    { name: 'twitter:image', content: metadataBaseImage },
  ],
})
</script>

<template>
  <AppNavbar />
  <RouterView />
  <AppFooter />
</template>
