import {
  corpcommentImg,
  gfbsubmissionstableImg,
  hiskingdomImg,
  lynnknowledgebaseImg,
} from '@/public/images';

export const projectsData = [
  {
    title: 'His Kingdom',
    description:
      'A Christian social network with Firebase, supporting payments and email alerts for churches and believers.',
    tags: ['React', 'Node.js', 'Redux', 'Stripe', 'Firebase', 'MongoDB'],
    imageUrl: hiskingdomImg,
  },
  {
    title: 'GFB Platform V2',
    description:
      "A solution to manage AIESEC's financial data, replacing Google Sheets for improved data handling and analytics.",
    tags: ['React', 'TypeScript', 'Tailwind', 'Node.js', 'Firebase', 'GCP'],
    imageUrl: gfbsubmissionstableImg,
  },
  {
    title: 'Lynn',
    description:
      'AI-driven customer support enhancing experiences with personalized, multilingual interactions and analytics.',
    tags: [
      'React',
      'Next.js',
      'TypeScript',
      'Tailwind',
      'Node.js',
      'Stripe',
      'Firebase',
      'BigQuery',
      'GCP',
    ],
    imageUrl: lynnknowledgebaseImg,
  },
] as const;
