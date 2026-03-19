import React from 'react';
import { SidebarSection } from './SidebarSection';
import HighlightItem from './HighlightItem';
import SkillGroup from './SkillGroup';
import { resumeMeta, highlights, skillGroups } from '@lib/resume-data';

export default function Sidebar() {
  return (
    <aside>
      {/* Key Numbers */}
      <SidebarSection label="By the Numbers" delay="350ms">
        {highlights.map((item, i) => (
          <HighlightItem key={i} item={item} />
        ))}
      </SidebarSection>

      {/* Skills */}
      <SidebarSection label="Technical Skills" delay="450ms">
        {skillGroups.map((group, i) => (
          <SkillGroup key={i} group={group} />
        ))}
      </SidebarSection>

      {/* Recognition */}
      <SidebarSection label="Recognition" delay="550ms">
        <div className="award-item mb-2.5">
          <div className="award-name text-ink before:text-accent flex items-center gap-1.5 text-[0.82rem] font-semibold before:text-[0.7rem] before:content-['★']">
            Leader of the Month
          </div>
          <div className="award-desc text-muted mt-0.5 text-[0.74rem]">
            UpKeep Technologies — ownership, innovation & cross-functional
            impact
          </div>
        </div>
        <div className="award-item mb-2.5">
          <div className="award-name text-ink before:text-accent flex items-center gap-1.5 text-[0.82rem] font-semibold before:text-[0.7rem] before:content-['★']">
            AI Hackathon — 3rd Place
          </div>
          <div className="award-desc text-muted mt-0.5 text-[0.74rem]">
            POC improving data consistency and system quality at scale
          </div>
        </div>
        <div className="award-item mb-2.5">
          <div className="award-name text-ink before:text-accent flex items-center gap-1.5 text-[0.82rem] font-semibold before:text-[0.7rem] before:content-['★']">
            Release Engineer
          </div>
          <div className="award-desc text-muted mt-0.5 text-[0.74rem]">
            Led zero-downtime platform-wide deployments for 2 months
          </div>
        </div>
      </SidebarSection>

      {/* Education */}
      <SidebarSection label="Education" delay="650ms">
        <div className="edu-degree text-ink mb-0.5 font-serif text-[1rem]">
          Bachelor of Computer Applications
        </div>
        <div className="edu-school text-accent2 mb-0.5 text-[0.78rem] font-medium">
          Dr. Sarvepalli Radhakrishnan University
        </div>
        <div className="edu-year text-muted font-mono text-[0.68rem]">
          Bhopal, MP &nbsp;·&nbsp; 2015 – 2018
        </div>
      </SidebarSection>
    </aside>
  );
}
