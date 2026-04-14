'use client';

import { motion } from 'motion/react';
import {
  History,
  Rocket,
  Users,
  Award,
  ArrowUpRight,
  Globe,
  Terminal,
  PencilRuler,
  Sprout,
} from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Top Navigation Shell */}
      <nav className="glass shadow-editorial fixed top-0 z-50 w-full">
        <div className="mx-auto flex max-w-screen-2xl items-center justify-between px-8 py-6">
          <div className="font-headline text-primary text-2xl font-bold">
            Senior Engineer
          </div>
          <div className="hidden items-center gap-12 md:flex">
            <a
              className="text-primary border-primary/30 font-headline border-b-2 pb-1 text-lg tracking-tight italic"
              href="#"
            >
              Work
            </a>
            <a
              className="text-on-surface-variant hover:text-primary font-headline text-lg tracking-tight italic transition-colors"
              href="#"
            >
              Expertise
            </a>
            <a
              className="text-on-surface-variant hover:text-primary font-headline text-lg tracking-tight italic transition-colors"
              href="#"
            >
              Journal
            </a>
            <a
              className="text-on-surface-variant hover:text-primary font-headline text-lg tracking-tight italic transition-colors"
              href="#"
            >
              About
            </a>
          </div>
          <button className="bg-primary-container text-on-primary font-label rounded-md px-6 py-2 text-xs tracking-widest uppercase shadow-[inset_0_1px_2px_rgba(0,0,0,0.2)] transition-all hover:opacity-90">
            Contact
          </button>
        </div>
      </nav>

      <main className="pt-32">
        {/* Hero Section */}
        <section className="mx-auto mb-40 max-w-screen-2xl px-8">
          <div className="grid grid-cols-1 items-end gap-8 md:grid-cols-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="md:col-span-8"
            >
              <h1 className="font-headline text-on-surface mb-12 text-7xl leading-[0.85] tracking-tight md:text-9xl">
                Crafting <br />
                <span className="text-primary italic">Monolithic</span> <br />
                Digital <br />
                Experiences.
              </h1>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="pb-4 md:col-span-4"
            >
              <div className="shadow-editorial relative aspect-[3/4] overflow-hidden rounded-lg">
                <img
                  alt="Portrait of Vimal Desai, Senior Engineer"
                  className="h-full w-full object-cover grayscale transition-all duration-700 hover:grayscale-0"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAUm-zyBKlzRyDWokgVGi61fAfJ4WufR2t5RrcqQ3vU75UrGdQOHQ-2YgrIXLxJRxapX3zEN7klBdjhl2Eb8eE3ZXw8fEDj8ze6VRA4xcRK94HhlIU9IyK_J0WN_fP5OXdKMsOUclqUeb2EZQIw210BjeITMNYofOBXyL38qDzl7iCqUY29Qvz2w9h7n5JGLgM3xx1n7A-PfSMc3GpHskJ5XE5mbTMhN5BFuBJNmMNKYNpTcWyhrH1CpQUUTIvbZOqfgggF-mtOFF0"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute bottom-6 left-6 z-10 text-white">
                  <p className="font-label text-[10px] tracking-[0.2em] uppercase opacity-80">
                    Based in London, UK
                  </p>
                  <p className="font-headline text-2xl italic">Vimal Desai</p>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-40"></div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Biography & Stats Tile Grid */}
        <section className="bg-surface-container-low mb-40 px-8 py-32">
          <div className="mx-auto grid max-w-screen-2xl grid-cols-1 gap-16 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <p className="font-label text-on-surface-variant/60 mb-8 text-xs tracking-[0.2em] uppercase">
                The Philosophy
              </p>
              <h2 className="font-headline text-on-surface max-w-2xl text-4xl leading-tight italic md:text-5xl">
                "Engineering is the bridge between raw imagination and
                functional permanence. I build systems that don't just work—they
                endure."
              </h2>
              <p className="font-body text-on-surface-variant mt-12 max-w-xl text-xl leading-relaxed">
                With over a decade of experience navigating the complexities of
                high-scale architecture, I specialize in transforming fragmented
                visions into cohesive, robust digital products. My approach is
                rooted in structural integrity and aesthetic precision.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4 lg:col-span-5">
              <div className="bg-primary-container flex aspect-square flex-col justify-between rounded-xl p-8">
                <History className="text-on-primary h-10 w-10" />
                <div>
                  <p className="font-headline text-on-primary text-4xl">9+</p>
                  <p className="font-label text-on-primary/70 text-[10px] tracking-widest uppercase">
                    Years Experience
                  </p>
                </div>
              </div>
              <div className="bg-secondary flex aspect-square flex-col justify-between rounded-xl p-8">
                <Rocket className="h-10 w-10 text-white" />
                <div>
                  <p className="font-headline text-4xl text-white">40+</p>
                  <p className="font-label text-[10px] tracking-widest text-white/70 uppercase">
                    Projects Launched
                  </p>
                </div>
              </div>
              <div className="bg-surface-container-highest flex aspect-square flex-col justify-between rounded-xl p-8">
                <Users className="text-on-surface h-10 w-10" />
                <div>
                  <p className="font-headline text-on-surface text-4xl">12</p>
                  <p className="font-label text-on-surface-variant text-[10px] tracking-widest uppercase">
                    Teams Mentored
                  </p>
                </div>
              </div>
              <div className="bg-surface-container-highest/50 flex aspect-square flex-col justify-between rounded-xl p-8">
                <Award className="text-on-surface h-10 w-10" />
                <div>
                  <p className="font-headline text-on-surface text-4xl">06</p>
                  <p className="font-label text-on-surface-variant text-[10px] tracking-widest uppercase">
                    Design Awards
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Workflow Section */}
        <section className="mx-auto mb-40 max-w-screen-2xl px-8">
          <div className="mb-16 flex items-end justify-between">
            <div>
              <p className="font-label text-on-surface-variant/60 mb-4 text-xs tracking-[0.2em] uppercase">
                The Methodology
              </p>
              <h2 className="font-headline text-5xl italic">
                Pipeline of Intent
              </h2>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                num: '01',
                title: 'Discovery',
                desc: 'Deep immersion into the business problem, user psychology, and technical constraints.',
                items: ['Stakeholder Interviews', 'Technical Audit'],
              },
              {
                num: '02',
                title: 'Architecture',
                desc: 'Drafting the structural blueprint, database schema, and scalability roadmaps.',
                items: ['System Design', 'Schema Mapping'],
              },
              {
                num: '03',
                title: 'Execution',
                desc: 'High-fidelity development using modern stacks with extreme attention to detail.',
                items: ['Code Craftsmanship', 'Agile Sprints'],
              },
              {
                num: '04',
                title: 'Optimization',
                desc: 'Rigorous testing, performance tuning, and deployment orchestration.',
                items: ['CI/CD Pipelines', 'Performance Audit'],
              },
            ].map((step, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -10 }}
                className="bg-surface shadow-editorial rounded-xl p-8"
              >
                <div className="text-primary font-headline mb-6 text-xl italic">
                  {step.num}. {step.title}
                </div>
                <p className="text-on-surface-variant mb-6 text-sm leading-relaxed">
                  {step.desc}
                </p>
                <ul className="space-y-3">
                  {step.items.map((item, j) => (
                    <li
                      key={j}
                      className="font-label text-on-surface flex items-center gap-2 text-[10px] tracking-wider uppercase"
                    >
                      <span className="bg-primary-container h-1.5 w-1.5 rounded-full"></span>{' '}
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Selected Projects */}
        <section className="mx-auto mb-40 max-w-screen-2xl px-8">
          <div className="mb-16">
            <p className="font-label text-on-surface-variant/60 mb-4 text-xs tracking-[0.2em] uppercase">
              Selected Case Studies
            </p>
            <h2 className="font-headline text-5xl italic">
              Architectural Footprint
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-16 md:grid-cols-2">
            <ProjectCard
              title="Emtec Financial Hub"
              desc="Lead Infrastructure for a multi-tenant banking platform serving 2M+ active users. Redesigned core transaction ledger for 40% efficiency gains."
              impact="40% Speed Up"
              role="Lead Engineer"
              img="https://lh3.googleusercontent.com/aida-public/AB6AXuBfDdLBSBCKxFtzvWxab0bjYNF39B24p-Nr4LT3Jio4XlTV4V-jaaUGc93822DL-ir5wSFYr7CE2K0OTDU3MZz_dfGTaQE3GTo30uQ23AZM8CQkzhrFHveSpFOdLaN6s2jSq8nog2oF4BJ7huaPRs1Ce_eoefUkZf003NILqG5VL2XbnsNE-ehix0kuBZ7tbD6PoxPQk2TQK-wWmjuvETQyI9zExTbvue4iIEYzsPahwbwYp9XpaS9p8B_HQQ5RJF3-QTDGK8x19Pk"
            />
            <ProjectCard
              title="Knovator Health"
              desc="Unified disparate medical data sources into a real-time provider dashboard. Implemented HIPAA-compliant encryption standards across all touchpoints."
              impact="Zero Downtime Migration"
              role="Architect"
              img="https://lh3.googleusercontent.com/aida-public/AB6AXuDBYZHf6xOR_J7FSM8K5nNUPPhzjcMTEKdWm7ZJ_CimkhcEXm39WhwTvT_UOsUKifrMkyM-HnigGRwbu8BTQ8B3dSN2JbaMwXCVXWBwhhMHgdKbaUdZKZP-dAKA8rhl9vmasAwH6rcI_kLhAWA2cfIwSoQSgh9kwwvxQHMyezirHdqiGKJWxjtSONKP-387A47aR7TmfLB8dZEuZCR3G00t4Q_SpyOs6xnXk1m8YZRbrLNIcZM9eQPyxG2ZX9DsBGSxVfW_vZmdLvs"
            />
          </div>
        </section>

        {/* Testimonials */}
        <section className="bg-surface-container-lowest mb-40 px-8 py-32">
          <div className="mx-auto max-w-screen-2xl">
            <p className="font-label text-on-surface-variant/60 mb-16 text-center text-xs tracking-[0.2em] uppercase">
              Echoes of Success
            </p>
            <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
              <Testimonial
                quote="Vimal possesses the rare ability to see the forest and the trees simultaneously. His code is as elegant as his architectural diagrams."
                author="Sarah Chen"
                role="CTO, Emtec Financial"
                img="https://lh3.googleusercontent.com/aida-public/AB6AXuDSE-GocWgnN8JxiyH3GrIOLNk1i4vQa-7bIgDLI704JPUmX75P8xgDI3dilg3SaZKLorTpjhREc8ogOfWcxKh7JZzPv6AoWp4UdtwQnULVkE2RWPF-H3G0OX-ikIRr5HlrdraPGqu9MoPirYkflthcPDdMfze4CKCy_tTXfEkxmYZU62phnNiiO1Ms_U4lCnmbH9qNfpVW8YD70psF2uXKKU4F2coBBzYNQHAatrf7qMP1ylI7lm6r6x-a9JS8dLTHbOT7T8wU1JM"
              />
              <Testimonial
                quote="The monolithic scaling project he led was a masterclass in engineering discipline. We haven't seen a single crash in 18 months."
                author="Marcus Thorne"
                role="Product Lead, Knovator"
                img="https://lh3.googleusercontent.com/aida-public/AB6AXuCDgYtHZgQM7e0fq-dqSBpTRP_uX_tqQernUWEVdwRH-XpNuxF3PhHBu8yuiN5p8Ao3sdgjI6H1LUJhWF4rSf3bmKuuBdIouFJ3nszsLLxGuGr4cDIqU57lOVkLj1BgJxNHMY53IWIsDtJuMfG6IwaqVWWSeApsuCHCKeQsWgvcrlmZqzHqRQJ2rR6mBE_yj-7mtXvxK8DqnE76hG9HK1k8s8f7C0jhiPwwHKAqds03U755_Y5Q1WcNAfCplsCqbtl3Zsb86SjgX4U"
              />
              <Testimonial
                quote="Vimal didn't just join our team; he elevated our entire engineering culture through mentorship and rigorous standards."
                author="Elena Rodriguez"
                role="Design Director, Prism"
                img="https://lh3.googleusercontent.com/aida-public/AB6AXuC2L6Ca4KUiaic0K5EflrSBlrjmWf_nNix79UJDHq3C4cRkbnRrnRgiFluv2JGONaebLle4XNFIsxDa5JYHkt0e1QTmAym8kbmx_rIUQLvvriucymel5uaiy3mx2fB0OWFiwcGoIriSvVs5q7QFqmXRotJRa4zflj-rORv45wbRb-ozRa5JaPdWiGmuaWeUrtK76wsBjVllmm_lK3WpXM8csJQh-TOEPTERZfAnGz3lePTfvIIRHc-Xp0LsR-0H4iYMML0kLna2zB0"
              />
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="mx-auto mb-40 max-w-screen-2xl px-8 text-center">
          <div className="bg-primary shadow-editorial relative overflow-hidden rounded-3xl py-32">
            <div className="absolute inset-0 opacity-10">
              <svg
                className="h-full w-full"
                preserveAspectRatio="none"
                viewBox="0 0 100 100"
              >
                <path
                  d="M0,50 Q25,0 50,50 T100,50"
                  fill="none"
                  stroke="white"
                  strokeWidth="0.5"
                ></path>
                <path
                  d="M0,60 Q25,10 50,60 T100,60"
                  fill="none"
                  stroke="white"
                  strokeWidth="0.5"
                ></path>
              </svg>
            </div>
            <div className="relative z-10 px-8">
              <h2 className="font-headline mb-12 text-5xl text-white italic md:text-7xl">
                Let's build something <br /> remarkable together.
              </h2>
              <div className="flex flex-col items-center justify-center gap-6 md:flex-row">
                <a
                  className="text-primary font-label rounded-full bg-white px-12 py-5 text-xs tracking-widest uppercase transition-transform hover:scale-105"
                  href="mailto:vimal@engineer.com"
                >
                  Start a Project
                </a>
                <div className="font-label flex items-center gap-4 text-xs tracking-widest text-white/70">
                  <Globe className="h-4 w-4" />
                  Available for Global Engagements
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer Section */}
      <footer className="bg-surface-container-low px-12 py-20">
        <div className="mx-auto grid max-w-screen-xl grid-cols-1 items-start gap-16 md:grid-cols-3">
          <div className="space-y-8">
            <div className="font-headline text-primary text-4xl">
              Vimal Desai
            </div>
            <p className="font-body text-on-surface-variant max-w-xs text-sm leading-relaxed">
              Curating high-integrity digital products through a lens of
              architectural precision and engineering excellence.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-8">
            <div className="space-y-4">
              <p className="font-label text-primary mb-6 text-[10px] font-bold tracking-[0.2em] uppercase">
                Capabilities
              </p>
              <a
                className="text-on-surface-variant font-label block text-xs uppercase transition-transform duration-200 hover:translate-x-1"
                href="#"
              >
                Case Studies
              </a>
              <a
                className="text-on-surface-variant font-label block text-xs uppercase transition-transform duration-200 hover:translate-x-1"
                href="#"
              >
                Tech Stack
              </a>
              <a
                className="text-on-surface-variant font-label block text-xs uppercase transition-transform duration-200 hover:translate-x-1"
                href="#"
              >
                Open Source
              </a>
            </div>
            <div className="space-y-4">
              <p className="font-label text-primary mb-6 text-[10px] font-bold tracking-[0.2em] uppercase">
                Presence
              </p>
              <a
                className="text-on-surface-variant font-label block text-xs uppercase transition-transform duration-200 hover:translate-x-1"
                href="#"
              >
                LinkedIn
              </a>
              <a
                className="text-on-surface-variant font-label block text-xs uppercase transition-transform duration-200 hover:translate-x-1"
                href="#"
              >
                GitHub
              </a>
              <a
                className="text-on-surface-variant font-label block text-xs uppercase transition-transform duration-200 hover:translate-x-1"
                href="#"
              >
                Read.cv
              </a>
            </div>
          </div>
          <div className="space-y-8 md:text-right">
            <p className="font-label text-on-surface-variant/60 text-[10px] tracking-widest uppercase">
              © 2026 Editorial Curator. All rights reserved.
            </p>
            <div className="border-outline-variant/20 flex gap-6 border-t pt-8 md:justify-end">
              <Terminal className="text-on-surface-variant/40 h-5 w-5" />
              <PencilRuler className="text-on-surface-variant/40 h-5 w-5" />
              <Sprout className="text-on-surface-variant/40 h-5 w-5" />
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

function ProjectCard({ title, desc, impact, role, img }) {
  return (
    <div className="group">
      <div className="bg-surface-container-low shadow-editorial mb-8 aspect-video overflow-hidden rounded-lg">
        <img
          alt={title}
          className="h-full w-full object-cover grayscale transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0"
          src={img}
          referrerPolicy="no-referrer"
        />
      </div>
      <div className="flex items-start justify-between gap-4">
        <div className="max-w-md">
          <h3 className="font-headline mb-4 text-3xl">{title}</h3>
          <p className="text-on-surface-variant mb-6 text-sm leading-relaxed">
            {desc}
          </p>
          <div className="flex flex-wrap gap-2">
            <span className="bg-surface-container-highest font-label rounded-full px-3 py-1 text-[9px] font-semibold tracking-widest uppercase">
              Impact: {impact}
            </span>
            <span className="bg-surface-container-highest font-label rounded-full px-3 py-1 text-[9px] font-semibold tracking-widest uppercase">
              Role: {role}
            </span>
          </div>
        </div>
        <button className="border-outline-variant/30 group-hover:bg-primary-container group-hover:text-on-primary flex h-12 w-12 items-center justify-center rounded-full border transition-colors">
          <ArrowUpRight className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
}

function Testimonial({ quote, author, role, img }) {
  return (
    <div className="relative">
      <span className="font-headline text-surface-container-highest/30 absolute -top-6 -left-4 text-8xl italic">
        "
      </span>
      <p className="font-body text-on-surface relative z-10 mb-8 text-lg italic">
        {quote}
      </p>
      <div className="flex items-center gap-4">
        <div className="bg-surface-container-highest h-10 w-10 overflow-hidden rounded-full">
          <img
            alt={author}
            src={img}
            className="h-full w-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
        <div>
          <p className="font-label text-[10px] font-bold tracking-widest uppercase">
            {author}
          </p>
          <p className="font-label text-on-surface-variant/60 text-[9px] tracking-wider uppercase">
            {role}
          </p>
        </div>
      </div>
    </div>
  );
}
