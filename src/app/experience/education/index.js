import React from 'react';
import EducationCard from './card';
import educations from '@/lib/educations';

const Education = () => {
  return (
    <div>
      <h2
        className="font-headline mb-10 text-4xl"
        style={{ color: 'var(--color-on-surface)' }}
      >
        School
      </h2>
      <div className="space-y-8">
        {educations.map((edu) => (
          <EducationCard {...edu} key={edu.degree} />
        ))}
      </div>
    </div>
  );
};

export default Education;
