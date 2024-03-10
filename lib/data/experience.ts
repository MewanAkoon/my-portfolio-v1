import { createElement } from 'react';
import { CgWorkAlt } from 'react-icons/cg';
import { FaReact } from 'react-icons/fa';
import { LuGraduationCap } from 'react-icons/lu';

export const experiencesData = [
  {
    title: 'Graduated',
    location: 'University of Ruhuna, SL',
    description:
      'I proudly graduated with a Bachelor of Computer Science degree, equipped with solid theoretical knowledge and practical skills. I immediately landed on my first role as a full-stack developer.',
    icon: createElement(LuGraduationCap),
    date: '2017 - 2022',
  },
  {
    title: 'Intern Full-Stack Developer',
    location: 'Spera Labs, SL',
    description:
      'During my 8-month internship at Spera Labs, I collaborated on two major projects, where I primarily utilized React, Firebase, and Node.js.',
    icon: createElement(CgWorkAlt),
    date: '2019 - 2020',
  },
  {
    title: 'Full-Stack Developer',
    location: 'AI Team, SL',
    description:
      "Currently thriving as a full-stack developer at the AI Team. My tech stack comprises React, Next.js, TypeScript, Tailwind, Firebase, and GCP. I'm passionate about leveraging these tools to create innovative solutions and always open to exploring new opportunities in the field.",
    icon: createElement(FaReact),
    date: '2022 - present',
  },
] as const;
