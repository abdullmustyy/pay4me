<script lang="ts" setup>
import { faqs } from '@/lib/constants'
import { ref } from 'vue'

type IFaqs = typeof faqs
interface IAppAccordionProps {
  items: IFaqs
}

defineProps<IAppAccordionProps>()

const openIndex = ref<number | null>(null)

const toggleAccordion = (index: number) => {
  openIndex.value = openIndex.value === index ? null : index
}
</script>

<template>
  <div class="flex flex-col gap-5">
    <div
      v-for="({ id, question, answer }, index) in faqs"
      :key="id"
      class="bg-white relative flex flex-col gap-3 border border-pearl-gray rounded-lg p-6"
      :class="{
        'before:absolute before:inset-10 before:blur-3xl before:-z-10 before:bg-linear-[148.79deg,rgba(122,197,45,0.5)_12.9%,rgba(236,135,78,0.5)_29.15%,rgba(173,221,28,0.5)_41.54%,rgba(122,197,45,0.5)_54.7%,rgba(122,197,45,0.5)_70.18%,rgba(122,197,45,0.5)_87.21%]':
          openIndex === index,
      }"
    >
      <div class="flex items-center justify-between cursor-pointer" @click="toggleAccordion(index)">
        <h4 class="text-xl font-medium">{{ question }}</h4>
        <i v-if="openIndex === index" class="pi pi-minus-circle text-midnight-blue text-xl!" />
        <i v-else class="pi pi-plus-circle text-midnight-blue text-xl!" />
      </div>
      <p v-show="openIndex === index" class="font-medium text-foreground/80">{{ answer }}</p>
    </div>
  </div>
</template>
