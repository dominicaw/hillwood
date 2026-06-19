export interface FAQ {
  id: string
  question: string
  answer: string
}

export const faqs: FAQ[] = [
  {
    id: 'internet',
    question: 'Who is the internet service provider?',
    answer:
      'Frogfoot is the fibre network operator for Hillwood. You can choose any internet service provider you like (Mweb, Afrihost, etc).',
  },
  {
    id: 'refuse',
    question: 'When is refuse collected?',
    answer:
      'Thursday mornings. Our groundsman will put the bins out for collection.',
  },
  {
    id: 'gardens',
    question: 'Who maintains the gardens and common areas?',
    answer:
      'We have a groundsman who attends to the property three times a week.',
  },
  {
    id: 'visitors',
    question: 'Where can visitors park?',
    answer:
      'There is unfortunately no parking available for visitors. Please arrange for your visitors to park in the surrounding streets.',
  },
]
