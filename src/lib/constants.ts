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

export const faqs = [
  {
    id: 1,
    question: 'What is the Pay4Me App?',
    answer:
      'Pay4Me App is a platform that helps people across Africa complete cross-border payments services. Our core payment industry includes helping with payments to government and immigration agencies, colleges, universities, businesses, and organizations abroad.',
  },
  {
    id: 2,
    question: 'How does the Pay4Me App work?',
    answer:
      'The Pay4Me App works by allowing users to create an account, select the service they need, and follow the prompts to complete their payment. The app provides a secure and user-friendly interface for managing cross-border payments.',
  },
  {
    id: 3,
    question: 'What is the payment processing timeline on the Pay4Me App?',
    answer:
      'The payment processing timeline on the Pay4Me App varies depending on the type of payment and the recipients bank. Generally, payments are processed within 1-3 business days, but some transactions may take longer due to factors such as bank processing times and international regulations.',
  },
  {
    id: 4,
    question: 'How do i get started using the Pay4Me App?',
    answer:
      'To get started using the Pay4Me App, download the app from the App Store or Google Play Store, create an account, and follow the prompts to set up your profile. Once your profile is set up, you can start making payments.',
  },
  {
    id: 5,
    question: 'Who can use the Pay4Me App?',
    answer:
      'The Pay4Me App is designed for individuals and businesses across Africa who need to make cross-border payments. Whether you are a student paying tuition fees, a business making international transactions, or an individual sending money abroad, the Pay4Me App can help you complete your payments securely and efficiently.',
  },
]
export type { faqs as IFaqs }
