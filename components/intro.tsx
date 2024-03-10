'use client';

import Image from 'next/image';
import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { BsArrowRight, BsLinkedin } from 'react-icons/bs';
import { HiDownload } from 'react-icons/hi';
import { FaGithubSquare } from 'react-icons/fa';
import { useSectionInView } from '@/lib/hooks';
import { useActiveSectionContext } from '@/context/active-section-context';
import clsx from 'clsx';
import { profileImg } from '@/public/images';
import { Button } from '@/lib/components';

export default function Intro() {
  const { ref } = useSectionInView('Home', 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  return (
    <section
      ref={ref}
      id='home'
      className={clsx(
        'my-20 max-w-[50rem] text-center scroll-mt-[100rem]',
        'sm:mt-0 sm:mb-20'
      )}
    >
      <div className='flex items-center justify-center'>
        <div className='relative'>
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: 'tween',
              duration: 0.2,
            }}
          >
            <Image
              src={profileImg}
              alt='Mewan portrait'
              width='192'
              height='192'
              quality='95'
              priority={true}
              className='h-24 w-24 rounded-full object-cover border-[0.3rem] border-white shadow-xl'
            />
          </motion.div>

          <motion.span
            className='absolute bottom-0 right-0 text-4xl'
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: 'spring',
              stiffness: 125,
              delay: 0.1,
              duration: 0.7,
            }}
          >
            👋
          </motion.span>
        </div>
      </div>

      <motion.h1
        className='mb-10 mt-8 px-4 text-2xl font-medium !leading-[1.5] sm:text-3xl'
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className='font-bold'>Hello, I&apos;m Mewan,</span> a{' '}
        <span className='font-bold'>full-stack developer</span> with{' '}
        <span className='font-bold italic'>2+ years</span> of hands-on
        experience. I enjoy building{' '}
        <span className='italic'>websites and applications,</span> leveraging
        the power of <span className='font-bold'>TypeScript</span>. My focus is{' '}
        <span className='font-bold underline underline-offset-4'>
          React (Next.js)
        </span>
        .
      </motion.h1>

      <motion.div
        className='flex flex-wrap items-center justify-center gap-2 px-4 text-lg font-medium'
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
      >
        <Link
          href='#contact'
          onClick={() => {
            setActiveSection('Contact');
            setTimeOfLastClick(Date.now());
          }}
        >
          <Button>
            Contact me here
            <BsArrowRight className='opacity-70' />
          </Button>
        </Link>

        <a href='/files/CV.pdf' download>
          <Button variant='secondary'>
            Download CV <HiDownload className='opacity-70' />
          </Button>
        </a>

        <a href='https://www.linkedin.com/in/mewan-amarakoon/' target='_blank'>
          <Button
            variant='secondary'
            className={clsx(
              '!p-4 text-gray-700 !hover:text-gray-950 dark:text-white/60 dark:bg-white/10'
            )}
          >
            <BsLinkedin />
          </Button>
        </a>

        <a href='https://github.com/MewanAkoon' target='_blank'>
          <Button
            variant='secondary'
            className={clsx(
              '!p-4 text-gray-700 !hover:text-gray-950 dark:text-white/60 dark:bg-white/10'
            )}
          >
            <FaGithubSquare />
          </Button>
        </a>
      </motion.div>
    </section>
  );
}
