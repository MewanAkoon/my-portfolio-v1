'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useSectionInView } from '@/lib/hooks';
import { sendEmail } from '@/actions/send-email';
import toast from 'react-hot-toast';
import { Button, SectionHeading } from '@/lib/components';
import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import clsx from 'clsx';
import { FaPaperPlane } from 'react-icons/fa';

const MAX_EMAIL_LENGTH = 500;
const MAX_MESSAGE_LENGTH = 5000;

const formSchema = z.object({
  email: z
    .string()
    .email({ message: 'Invalid email address' })
    .max(MAX_EMAIL_LENGTH),
  message: z
    .string()
    .min(1, { message: 'Message is required' })
    .max(MAX_MESSAGE_LENGTH),
});

type FormData = z.infer<typeof formSchema>;

export default function Contact() {
  const { ref } = useSectionInView('Contact');
  const [pending, setPending] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit: SubmitHandler<FormData> = async ({ email, message }) => {
    setPending(true);
    const { error } = await sendEmail(email, message);
    setPending(false);

    if (error) {
      toast.error(error.toString());
      return;
    }

    reset();
    toast.success('Email sent successfully!');
  };

  return (
    <motion.section
      id='contact'
      ref={ref}
      className='mb-20 sm:my-20 w-[min(100%,38rem)] text-center'
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      viewport={{
        once: true,
      }}
    >
      <SectionHeading>Contact Me</SectionHeading>

      <p className='text-gray-700 -mt-4 dark:text-white/80'>
        Please contact me directly at{' '}
        <a className='underline' href='mailto:example@gmail.com'>
          damithamewan201@gmail.com
        </a>{' '}
        or through this form.
      </p>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className='mt-10 flex flex-col dark:text-black'
      >
        <input
          {...register('email')}
          className={clsx(
            'h-14 px-4 rounded-lg borderBlack dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all outline-gray-500 dark:outline-none',
            { '!border-red-400': !!errors.email }
          )}
          type='email'
          placeholder='Your email'
          maxLength={MAX_EMAIL_LENGTH}
        />
        {errors.email && (
          <p className='text-xs text-red-600 dark:text-red-500 mr-auto px-2 mt-1'>
            {errors.email.message}
          </p>
        )}
        <textarea
          {...register('message')}
          className={clsx(
            'h-52 mt-3 rounded-lg borderBlack p-4 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all outline-gray-500 dark:outline-none',
            { '!border-red-400': !!errors.message }
          )}
          placeholder='Your message'
          maxLength={MAX_MESSAGE_LENGTH}
        />
        {errors.message && (
          <p className='text-xs text-red-600 dark:text-red-500 mr-auto px-2 mt-1'>
            {errors.message.message}
          </p>
        )}
        <Button
          type='submit'
          disabled={pending}
          className='!h-[3rem] w-full sm:w-[8rem] mx-auto mt-3'
        >
          {pending ? (
            <div className='h-5 w-5 animate-spin rounded-full border-b-2 border-white' />
          ) : (
            <>
              Submit{' '}
              <FaPaperPlane className='text-xs opacity-70 transition-all group-hover:translate-x-1 group-hover:-translate-y-1' />{' '}
            </>
          )}
        </Button>
      </form>
    </motion.section>
  );
}
