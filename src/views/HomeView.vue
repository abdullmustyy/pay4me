<script setup lang="ts">
import Chiamaka from '@/assets/images/webps/chiamaka.webp'
import Musa from '@/assets/images/webps/musa.webp'
import Obafemi from '@/assets/images/webps/obafemi.webp'
import Precious from '@/assets/images/webps/precious.webp'
import SectionHeading from '@/components/SectionHeading.vue'
import StoreBadge from '@/components/StoreBadge.vue'
import StudentFrame from '@/components/StudentFrame.vue'
import WhyCard from '@/components/WhyCard.vue'
import { companies, downloadSteps } from '@/lib/constants'
</script>

<template>
  <header
    class="bg-[url(@/assets/images/webps/line-1.webp),url(@/assets/images/webps/line-2.webp)] bg-no-repeat bg-position-[top_right,left_60%] grid gap-16 pt-8 pb-10"
  >
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
      <img src="@/assets/images/webps/mobile-home-mockup.webp" alt="" />
      <img src="@/assets/images/webps/mobile-payment-mockup.webp" alt="" />
      <div
        class="flex items-center bg-yellow-green border-2 border-primary shadow-[0_5.66px_5.66px_black] pl-4 pr-3 absolute bottom-10 right-0 translate-x-4/5 h-12.5"
      >
        <span class="text-lg">Backed by</span>
        <img src="@/assets/images/webps/techstars-transparent.webp" alt="" />
      </div>
    </div>

    <div class="w-4/5 place-self-center grid mt-4">
      <SectionHeading heading="In Good Company" />
      <div class="flex items-center justify-center gap-8 flex-wrap">
        <img :src="logo" v-for="{ name, logo } in companies" :key="name" class="basis-1/8" />
      </div>
      <RouterLink
        to=""
        class="mt-8 text-center text-primary text-2xl font-bold underline underline-offset-2"
        >See More Partners</RouterLink
      >
    </div>
  </header>

  <main>
    <!--------------------------- Students section ----------------------------->
    <section class="grid gap-16 bg-white px-12 pt-16 pb-20">
      <div class="flex justify-center gap-2">
        <img src="/src/assets/images/webps/globe-bg.webp" alt="" class="self-start" />
        <h2 class="text-5xl font-bold">
          Trusted by thousands of students<br />
          and immigrants around the world
        </h2>
        <img src="/src/assets/images/webps/voltage-bg.webp" alt="" class="self-end" />
      </div>

      <div class="flex flex-col gap-12">
        <div class="relative flex items-center justify-around">
          <StudentFrame student-name="Precious Mike">
            <img :src="Precious" alt="" />
          </StudentFrame>
          <div class="flex flex-col gap-5">
            <StoreBadge store-name="google" class="z-10" />
            <StoreBadge store-name="apple" class="z-10" />
          </div>
          <StudentFrame student-name="Musa Ahmad">
            <img :src="Musa" alt="" />
          </StudentFrame>
          <div
            class="absolute top-12 size-100 rounded-full bg-linear-[148.79deg,rgba(122,197,45,0.5)_12.9%,rgba(236,135,78,0.5)_29.15%,rgba(173,221,28,0.5)_41.54%,rgba(122,197,45,0.5)_54.7%,rgba(122,197,45,0.5)_70.18%,rgba(122,197,45,0.5)_87.21%] blur-[164px]"
          />
        </div>

        <div class="flex items-center justify-around">
          <StudentFrame student-name="Obafemi Akinde">
            <img :src="Obafemi" alt="" />
          </StudentFrame>
          <StudentFrame student-name="Chiamaka Chike">
            <img :src="Chiamaka" alt="" />
          </StudentFrame>
        </div>
      </div>
    </section>

    <!--------------------------- Why Pay4Me section ----------------------------->
    <section
      class="bg-[url(@/assets/images/pngs/line-3.png),url(@/assets/images/pngs/line-4.png)] bg-no-repeat bg-position-[100%_-20%,left_60%] grid gap-16 px-12 pt-16 pb-20"
    >
      <SectionHeading heading="Why We Built the Pay4me App" />

      <div class="flex gap-4">
        <div class="flex-2/5">
          <WhyCard
            heading="To Facilitate Global Education Payments"
            description="Pay4Me empowers international students to easily fund their educational pursuits by offering a diverse range of payment options, including visa fees, tuition, and other essential educational expenses."
            class="bg-zest-yellow/10 rounded-none rounded-t-4xl px-4 gap-8 h-full"
          >
            <figure class="size-full">
              <img src="/src/assets/images/pngs/iphone-14-pro.png" alt="" class="size-full" />
            </figure>
          </WhyCard>
        </div>

        <div class="flex-3/10 flex flex-col gap-4">
          <WhyCard
            heading="To Foster Financial Inclusion"
            description="Pay4Me App makes international payments more accessible to individuals who may not have access to traditional banking services."
            class="bg-tangerine/10 gap-8 min-h-fit"
          >
            <figure>
              <img src="/src/assets/images/pngs/tranfer.png" alt="" />
            </figure>
          </WhyCard>
          <WhyCard
            heading="Bridging Geographical Boundaries"
            description="Pay4Me app connects students and institutions across borders, enabling seamless payment flows regardless of location."
            class="bg-pale-lime/10 h-full"
          >
            <div class="size-full relative flex items-center justify-center">
              <img src="/src/assets/images/pngs/canada.png" alt="" class="absolute top-6 left-12" />
              <img
                src="/src/assets/images/pngs/britain.png"
                alt=""
                class="absolute top-6 right-14"
              />
              <img src="/src/assets/images/pngs/america.png" alt="" />
              <img
                src="/src/assets/images/pngs/sweden.png"
                alt=""
                class="absolute bottom-6 left-14"
              />
              <img
                src="/src/assets/images/pngs/korea.png"
                alt=""
                class="absolute bottom-8 right-20"
              />
            </div>
          </WhyCard>
        </div>

        <div class="flex-3/10 flex flex-col gap-4">
          <WhyCard
            heading="To Improve Convenience and Accessibility"
            description="Pay4Me App provides access to payment services anytime, anywhere, making it convenient for users across different time zones."
            class="bg-spring-green/10"
          >
            <figure class="ml-auto">
              <img src="/src/assets/images/pngs/atom.png" alt="" />
            </figure>
          </WhyCard>
          <WhyCard
            heading="To enhance security and trust"
            description="Pay4Me app prioritizes user security by integrating with industry-leading payment gateways like Stripe and PayPal. These gateways employ robust security measures, including encryption, tokenization, and sophisticated fraud detection systems."
            class="bg-creame-white"
          >
            <figure class="ml-auto">
              <img src="/src/assets/images/pngs/padlock.png" alt="" />
            </figure>
          </WhyCard>
        </div>
      </div>
    </section>

    <!--------------------------- How to use Pay4Me section ----------------------------->
    <section class="bg-white pl-12 pt-16">
      <SectionHeading heading="How to Download and Use the Pay4Me App" class="pr-12" />

      <div class="flex items-center">
        <div class="flex flex-col gap-12 w-3/5">
          <h3 class="text-4xl font-bold">
            Here's a step-by-step guide to downloading the Pay4Me app and getting started:
          </h3>
          <ul class="flex flex-col gap-8">
            <li
              v-for="{ id, step } in downloadSteps"
              :key="id"
              class="border-l-4 border-primary pl-4 text-[1.6875rem] text-foreground/80"
            >
              {{ step }}
            </li>
          </ul>
        </div>

        <div class="w-2/5">
          <img src="/src/assets/images/pngs/pay4me-download-mockup.png" alt="" />
        </div>
      </div>
    </section>
  </main>
</template>
