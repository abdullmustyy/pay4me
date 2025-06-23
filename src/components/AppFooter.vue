<script setup lang="ts">
import FooterPills from '@/assets/images/pngs/footer-pills.png'
import { footerLinks, socialLinks } from '@/lib/constants'
</script>

<template>
  <footer class="relative">
    <div
      class="absolute inset-0 blur-[200px] opacity-20 bg-linear-[90deg,rgba(68,255,154,0.6)_-0.55%,rgba(41,218,107,0.6)_22.86%,rgba(245,108,44,0.6)_48.36%,rgba(122,197,45,0.6)_73.33%,rgba(235,255,112,0.6)_99.34%] -z-10 rounded-lg"
    />

    <section class="grid gap-8 px-12 pt-16 pb-20">
      <p class="text-center text-2xl">
        Pay4Me facilitates quick and easy tuition and fee payments for international students and
        immigrants through partnerships with licensed financial institutions. All mentioned brands
        are trademarks of their respective owners and do not imply endorsement.
      </p>

      <div class="w-full h-1.5 bg-foreground/5" />

      <div class="flex items-start justify-around mt-6">
        <div class="flex flex-col gap-2">
          <RouterLink to="">
            <img src="@/assets/images/webps/logo.webp" alt="Logo" class="h-20" />
          </RouterLink>
          <span class="text-xl">© 2020 - 2024 Pay4Me, Inc</span>
          <div class="grid gap-2 mt-4">
            <h6 class="text-xl font-medium">Follow us to stay updated!</h6>
            <div class="flex items-center gap-1.5">
              <RouterLink v-for="{ name, icon, to } in socialLinks" :key="name" :to="to">
                <component :is="icon" />
              </RouterLink>
            </div>
          </div>
        </div>

        <div v-for="{ category, links } in footerLinks" :key="category" class="flex flex-col gap-2">
          <h6 class="text-2xl font-medium">{{ category }}</h6>
          <RouterLink v-for="{ name, to } in links" :key="name" :to="to" class="text-2xl">{{
            name
          }}</RouterLink>
        </div>
      </div>
    </section>

    <figure>
      <img :src="FooterPills" alt="" />
    </figure>
  </footer>
</template>
