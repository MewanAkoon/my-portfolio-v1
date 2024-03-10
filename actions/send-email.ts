'use server';

import React from 'react';
import { Resend } from 'resend';
import { getErrorMessage } from '@/lib/utils';
import EmailContactForm from '@/email/email-contact-form';
import { FROM_EMAIL, MY_EMAIL } from '@/lib/constants';

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (email: string, message: string) => {
  try {
    const data = await resend.emails.send({
      from: FROM_EMAIL,
      to: MY_EMAIL,
      subject: 'Message from contact form',
      reply_to: email,
      react: React.createElement(EmailContactForm, {
        message: message,
        senderEmail: email,
      }),
    });

    return data;
  } catch (error: unknown) {
    return {
      error: getErrorMessage(error),
    };
  }
};
