import Header from '@/components/header';
import './globals.css';
import { Inter } from 'next/font/google';
import ActiveSectionContextProvider from '@/context/active-section-context';
import Footer from '@/components/footer';
import ThemeSwitch from '@/components/theme-switch';
import ThemeContextProvider from '@/context/theme-context';
import { Toaster } from 'react-hot-toast';
import clsx from 'clsx';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Mewan | Personal Portfolio',
  description: 'Mewan is a full-stack developer with 2+ years of experience.',
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en' className='!scroll-smooth'>
      <body
        className={clsx(
          inter.className,
          'relative pt-28',
          'sm:pt-36',
          'bg-slate-200 text-gray-950 dark:bg-gray-900 dark:text-gray-100 dark:text-opacity-90'
        )}
      >
        <div
          className={clsx(
            'absolute top-[-6rem] -z-10 right-[10rem] h-[38rem] w-[32rem] rounded-full blur-[10rem]',
            'sm:w-[68.75rem]',
            'bg-[#91bbdb] dark:bg-[#47809a]'
          )}
        ></div>
        <div
          className={clsx(
            'absolute top-[-1rem] -z-10 left-[-35rem] h-[38rem] w-[50rem] rounded-full blur-[10rem]',
            'sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem]',
            'bg-[#5458bede] dark:bg-[#6b6a7c]'
          )}
        ></div>

        <ThemeContextProvider>
          <ActiveSectionContextProvider>
            <Header />
            {children}
            <Footer />

            <Toaster position='top-right' />
            <ThemeSwitch />
          </ActiveSectionContextProvider>
        </ThemeContextProvider>
      </body>
    </html>
  );
}
