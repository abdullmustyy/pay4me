<script setup lang="ts">
import SparkleLeft from '@/components/icons/SparkleLeft.vue'
import SparkleRight from '@/components/icons/SparkleRight.vue'

const companies: Array<Record<'name' | 'logo', string>> = [
  { name: 'across', logo: '/src/assets/images/webps/across.webp' },
  { name: 'ampower', logo: '/src/assets/images/webps/ampower.webp' },
  { name: 'prodigy', logo: '/src/assets/images/webps/prodigy.webp' },
  { name: 'techstars', logo: '/src/assets/images/webps/techstars.webp' },
  { name: 'stripe', logo: '/src/assets/images/webps/stripe.webp' },
  { name: 'paystack', logo: '/src/assets/images/webps/paystack.webp' },
  { name: 'providus', logo: '/src/assets/images/webps/prodigy.webp' },
  { name: 'monnify', logo: '/src/assets/images/webps/monnify.webp' },
]
</script>

<template>
  <header class="grid gap-16 pt-8 pb-10">
    <div
      class="bg-yellow-green/16 w-fit mx-auto rounded-2xl flex items-center gap-3.5 h-12 px-5 py-4 border border-primary border-dashed"
    >
      <img src="@/assets/images/webps/avatars.webp" alt="" />
      <span class="text-primary text-sm font-extrabold"
        >Joined by a global community of students</span
      >
    </div>

    <div
      class="bg-[url(@/assets/images/webps/header-left-frame.webp),url(@/assets/images/webps/header-right-frame.webp)] bg-no-repeat bg-contain bg-position-[left,right] place-self-center text-center flex flex-col gap-3 w-4/5"
    >
      <h1 class="text-5xl leading-15 font-bold">
        Cross-border
        <span
          class="relative before:absolute before:bottom-0 before:bg-primary before:h-2 before:w-full"
          >Payment</span
        >
        for<br />
        International Students
      </h1>
      <p class="text-foreground/70 text-2xl">
        The easiest and fastest way to pay tuition and fees to<br />
        educational institutions, businesses, and government<br />
        agencies worldwide.
      </p>
      <button class="button-primary w-37.5 mx-auto mt-3">Read More</button>
    </div>

    <div class="w-fit place-self-center relative flex items-center gap-2">
      <img src="/src/assets/images/webps/mobile-home-mockup.webp" alt="" />
      <img src="/src/assets/images/webps/mobile-payment-mockup.webp" alt="" />
      <div
        class="flex items-center bg-yellow-green border-2 border-primary shadow-[0_5.66px_5.66px_black] pl-4 pr-3 absolute bottom-10 right-0 translate-x-4/5 h-12.5"
      >
        <span class="text-lg">Backed by</span>
        <img src="/src/assets/images/webps/techstars-transparent.webp" alt="" />
      </div>
    </div>

    <div class="w-4/5 place-self-center grid mt-4">
      <div class="flex items-center justify-center gap-2 mb-6">
        <SparkleLeft />
        <h2 class="text-5xl font-bold">In Good Company</h2>
        <SparkleRight />
      </div>
      <div class="flex items-center justify-center gap-8 flex-wrap">
        <img :src="logo" v-for="{ name, logo } in companies" :key="name" class="basis-1/8" />
      </div>
      <RouterLink to="" class="mt-8 text-center text-primary text-2xl font-bold underline underline-offset-2">See More Partners</RouterLink>
    </div>
  </header>

  <main></main>
</template>
