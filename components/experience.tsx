'use client';

import React from 'react';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { experiencesData } from '@/lib/data';
import { useSectionInView } from '@/lib/hooks';
import { useTheme } from '@/context/theme-context';
import { SectionHeading } from '@/lib/components';

export default function Experience() {
  const { ref } = useSectionInView('Experience', 0.5);
  const { theme } = useTheme();

  return (
    <section id='experience' ref={ref} className='scroll-mt-28 mb-28 sm:my-20'>
      <SectionHeading>My Experience</SectionHeading>
      <VerticalTimeline
        lineColor={theme === 'light' ? '#f3f4f6' : 'rgba(255, 255, 255, 0.05)'}
        animate={false}
      >
        {experiencesData.map((item, index) => (
          <React.Fragment key={index}>
            <VerticalTimelineElement
              contentStyle={{
                background:
                  theme === 'light' ? '#f3f4f6' : 'rgba(255, 255, 255, 0.05)',
                boxShadow: 'none',
                border: '1px solid rgba(0, 0, 0, 0.05)',
                textAlign: 'left',
                padding: '1.3rem 2rem',
              }}
              contentArrowStyle={{
                borderRight:
                  theme === 'light'
                    ? '0.4rem solid #9ca3af'
                    : '0.4rem solid rgba(255, 255, 255, 0.5)',
              }}
              date={item.date}
              icon={item.icon}
              iconStyle={{
                background:
                  theme === 'light' ? 'white' : 'rgba(255, 255, 255, 0.15)',
                fontSize: '1.5rem',
              }}
            >
              <h3 className='font-semibold capitalize'>{item.title}</h3>
              <p className='font-normal !mt-0'>{item.location}</p>
              <div className='!font-normal text-gray-700 dark:text-white/75 text-justify'>
                {item.description.map((section, idx) => (
                  <p key={`section-${idx}`}>{section}</p>
                ))}
              </div>
            </VerticalTimelineElement>
          </React.Fragment>
        ))}
      </VerticalTimeline>
    </section>
  );
}
