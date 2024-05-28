import { createElement } from 'react';
import { CgWorkAlt } from 'react-icons/cg';
import { FaReact } from 'react-icons/fa';
import { LuGraduationCap } from 'react-icons/lu';

export const experiencesData = [
  {
    title: 'Graduated',
    location: 'University of Ruhuna, LK',
    description: [
      'I proudly graduated with a Bachelor of Computer Science degree, achieving a GPA of 3.63 and Second Upper Class Honors.',
      'My coursework and projects provided me with a solid foundation in computer science principles and practical skills, which enabled me to secure my first role as a full-stack developer immediately after graduation.',
      'I was also a winner of the BattleCode v1.0 intra-university hackathon and a participant in Huawei Seeds for the Future 2020.',
    ],
    icon: createElement(LuGraduationCap),
    date: '2017 - 2022',
  },
  {
    title: 'Intern Full-Stack Developer',
    location: 'Spera Labs, LK',
    description: [
      'During my 8-month internship at Spera Labs, I collaborated on two major MERN stack projects. I was involved in both frontend and backend development, primarily utilizing React for the front end, Firebase for database and authentication services, and Node.js for server-side functionality.',
      'This role enhanced my collaborative development skills, understanding of team dynamics, and project deployment experience. I contributed to debugging and enhancing functionality, ensuring seamless performance and superior user experience.',
    ],
    icon: createElement(CgWorkAlt),
    date: '2020 - 2021',
  },
  {
    title: 'Full-Stack Developer',
    location: 'AI Team, LK',
    description: [
      'Currently thriving as a full-stack developer at the AI Team, I leverage a tech stack that includes React, Next.js, TypeScript, Tailwind, Firebase, and GCP. I contribute to the entire application lifecycle from design to deployment, focusing on problem-solving, scalability, and user experience.',
      "I've worked on multiple projects such as Lynn, an AI chatbot, where I played a key role in backend development and data management. Additionally, I transitioned AIESEC's financial data management system to a scalable platform. My passion for innovation drives me to continually learn and apply new technologies, aiming to create impactful solutions.",
    ],
    icon: createElement(FaReact),
    date: '2022 - present',
  },
] as const;
