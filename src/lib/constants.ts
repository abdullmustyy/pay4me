import Blog1 from '@/assets/images/pngs/blog-1.png'
import Blog2 from '@/assets/images/pngs/blog-2.png'
import Blog3 from '@/assets/images/pngs/blog-3.png'
import Across from '@/assets/images/webps/across.webp'
import Ampower from '@/assets/images/webps/ampower.webp'
import Monnify from '@/assets/images/webps/monnify.webp'
import Paystack from '@/assets/images/webps/paystack.webp'
import Prodigy from '@/assets/images/webps/prodigy.webp'
import Providus from '@/assets/images/webps/providus.webp'
import Stripe from '@/assets/images/webps/stripe.webp'
import Techstars from '@/assets/images/webps/techstars.webp'

export const companies = [
  { name: 'across', logo: Across },
  { name: 'ampower', logo: Ampower },
  { name: 'prodigy', logo: Prodigy },
  { name: 'techstars', logo: Techstars },
  { name: 'stripe', logo: Stripe },
  { name: 'paystack', logo: Paystack },
  { name: 'providus', logo: Providus },
  { name: 'monnify', logo: Monnify },
]

export const downloadSteps = [
  {
    id: 1,
    step: 'Locate the App Store on your device: Open the App Store app for iOS users, and the Google Play Store app for Android users.',
  },
  { id: 2, step: 'Download the official Pay4Me app from the App Store or Google Play Store.' },
  { id: 3, step: 'Open the Pay4Me app and create an account. Then you are ready to go!' },
]

export const blogs = [
  {
    id: 1,
    title: 'How to naviagate international payments for education without stress',
    intro:
      'Studying abroad can be an exciting journey, but it comes with its fair share of challenges—one of the biggest being...',
    image: Blog1,
    date: '19 dec 2024',
    author: 'Esther Ebere',
    link: '',
  },
  {
    id: 2,
    title: '5 Tips for Finding the Best App for International Tuition Payments',
    intro:
      'Choosing the right app for international tuition payments can be daunting. With many options available, students often struggle...',
    image: Blog2,
    date: '11 dec 2024',
    author: 'Esther Ebere',
    link: '',
  },
  {
    id: 3,
    title: "Why Universities Prefer Pay4Me App as their Africa's Payment Partner",
    intro:
      "Things fell apart for Adaobi Ekeh, a Nigerian student going to the United States of America for her master's in Artificial...",
    image: Blog3,
    date: '12 dec 2024',
    author: 'Ernest Emeka',
    link: '',
  },
]
