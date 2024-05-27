'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useSectionInView } from '@/lib/hooks';
import { SectionHeading } from '@/lib/components';

export default function About() {
  const { ref } = useSectionInView('About', 0.95);

  return (
    <motion.section
      id='about'
      ref={ref}
      className='max-w-[45rem] text-center leading-8 sm:my-20 scroll-mt-28'
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
    >
      <SectionHeading>About me</SectionHeading>
      <p className='mb-3'>
        Ever since I can remember, I&apos;ve been super into coding and cracking
        tricky problems. After finishing up my Computer Science degree, I dived
        straight into the world of web development. I&apos;m totally at home
        with React, Node, Express, and Next.js, especially when it comes to
        adding a bit of TypeScript magic. I absolutely love putting together
        full-stack applications, using these tools and whatever else fits the
        job!
      </p>

      <p>
        When I&apos;m not tapping away at the keyboard, you&apos;ll usually find
        me strumming my guitar or getting lost in some intense FPS gaming
        sessions. It&apos;s all about finding that balance between coding and
        chilling out!
      </p>
    </motion.section>
  );
}
