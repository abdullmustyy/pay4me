<script setup lang="ts">
import { useHead } from '@unhead/vue'
import { RouterView } from 'vue-router'
import AppFooter from './components/AppFooter.vue'
import AppNavbar from './components/AppNavbar.vue'

const metadataBaseUrl = 'https://abdul-pay4me.vercel.app'
const metadataBaseImage = `${metadataBaseUrl}/favicon.png`

useHead({
  title: 'Home',
  titleTemplate: '%s %separator %siteName',
  templateParams: {
    siteName: 'Pay4Me',
  },
  meta: [
    {
      name: 'description',
      content:
        'The easiest and fastest way to pay tuition and fees to educational institutions, businesses, and government agencies worldwide.',
    },
    {
      name: 'keywords',
      content: 'payment, platform, secure, easy, payment gateway, online payment',
    },
    { name: 'author', content: 'Pay4Me Team' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    { name: 'og:title', content: 'Pay4Me - Cross-border Payment for International Students.' },
    {
      name: 'og:description',
      content:
        'The easiest and fastest way to pay tuition and fees to educational institutions, businesses, and government agencies worldwide.',
    },
    { name: 'og:image', content: metadataBaseImage },
    { name: 'og:image:alt', content: 'Pay4Me Logo' },
    { name: 'og:image:type', content: 'image/png' },
    { name: 'og:image:width', content: '1200' },
    { name: 'og:image:height', content: '630' },
    { name: 'og:site_name', content: 'Pay4Me' },
    { name: 'og:url', content: metadataBaseUrl },
    { name: 'og:type', content: 'website' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: 'Pay4Me - Cross-border Payment for International Students.' },
    {
      name: 'twitter:description',
      content:
        'The easiest and fastest way to pay tuition and fees to educational institutions, businesses, and government agencies worldwide.',
    },
    { name: 'twitter:image', content: metadataBaseImage },
    { name: 'twitter:image:alt', content: 'Pay4Me Logo' },
    { name: 'twitter:image:type', content: 'image/png' },
    { name: 'twitter:image:width', content: '1200' },
    { name: 'twitter:image:height', content: '630' },
    { name: 'twitter:site:id', content: '@pay4me' },
    { name: 'twitter:site', content: '@pay4me' },
    { name: 'twitter:creator', content: '@pay4me' },
  ],
})
</script>

<template>
  <AppNavbar />
  <RouterView />
  <AppFooter />
</template>
