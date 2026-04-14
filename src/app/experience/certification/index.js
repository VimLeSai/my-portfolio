import React from 'react'
import CertificationCard from './card'
import certifications from '@/lib/certifications'



const Certifications = () => {
  return (
     <div>
            <h2
              className="font-headline mb-10 text-4xl"
              style={{ color: 'var(--color-on-surface)' }}
            >
              Professional Accreditations
            </h2>
            <div className="grid grid-cols-2 gap-4">
              {certifications.map((cert) => (
                <CertificationCard {...cert} key={cert.name} />
              ))}
            </div>
          </div>
  )
}

export default Certifications