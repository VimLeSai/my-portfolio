import React from 'react'

const WorkHeroSection = () => {
  return (
      <div className="mb-16 max-w-4xl">
            <span className="mb-4 block text-[0.6875rem] font-semibold tracking-[0.2em] text-[#6b6456] uppercase">
              Curated Repository
            </span>
            <h1 className="font-headline text-primary text-6xl leading-[0.9] font-bold tracking-tighter italic md:text-8xl">
              Architecting
              <br />
              <span className="text-on-surface not-italic">
                Intentionality.
              </span>
            </h1>
            <p className="text-on-surface-variant font-body mt-8 max-w-2xl text-lg leading-relaxed md:text-xl">
              A retrospective of 24+ projects focused on distributed systems,
              reactive architectures, and high-fidelity user interfaces. Each
              entry represents a unique challenge in scale and elegance.
            </p>
          </div>
  )
}

export default WorkHeroSection