import Navbar from '@/components/nav';
import Footer from '@/components/footer';
import Button from '@/components/ui/Button';
import Watermark from '@/components/ui/Watermark';
import { notFound } from 'next/navigation';
import { projects } from '@/lib/projects';
import ImpactCard from './impact-cards';
import ImageGallery from './image-gallery';

const projectsList = Object.values(projects);

export function generateStaticParams() {
  return projectsList.map((project) => ({ id: project.id }));
}

export async function generateMetadata({ params }) {
  const { id } = await params;
  const project = projectsList.find((p) => p.id === id);

  if (!project) return { title: 'Project Not Found' };
  return {
    title: `${project.title} Case Study — Vimal Desai`,
    description: project.tagline || project.overview,
  };
}

export default async function WorkDetailPage({ params }) {
  const { id } = await params;
  const project = projectsList.find((p) => p.id === id);

  if (!project) notFound();

  // Mapping lib data to UI expectations
  const uiProject = {
    ...project,
    subtitle: project.tagline,
    category: project.industries?.join(' · ') || project.tags?.join(' · '),
    year: project.period?.end || project.period?.start,
    duration: project.period?.end === 'Present' ? 'Ongoing' : `${project.period?.start} – ${project.period?.end}`,
    tags: project.skills?.filter(Boolean).map(s => s.label || s.name).slice(0, 6) || project.tags,
    hero: project.image,
    challenge: project.challenges?.[0]?.value || project.overview,
    approach: project.approach?.map((a) => ({
      icon: a.icon,
      title: a.title,
      desc: a.description,
    })),
    metrics: project.impacts || [],
    images: project.showcaseImages || [],
    accentColor: project.company?.accentColor || 'var(--color-primary)',
  };

  return (
    <>
      <Navbar
        brandName="Vimal Desai"
        ctaLabel="View All Work"
        ctaHref="/work"
      />

      {/* ── Hero Image ── */}
      <div
        className="relative w-full overflow-hidden"
        style={{ height: '70vh', marginTop: '80px' }}
      >
        <img
          src={uiProject.hero}
          alt={uiProject.title}
          className="h-full w-full object-cover object-top"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(to bottom, rgba(28,28,24,0.2) 0%, rgba(28,28,24,0.7) 100%)',
          }}
        />
        {/* Overlay text */}
        <div className="absolute right-0 bottom-0 left-0 mx-auto max-w-7xl px-8 pb-16">
          <p
            className="font-label mb-3 text-xs tracking-[0.2em] uppercase"
            style={{ color: 'rgba(252,249,243,0.7)' }}
          >
            {uiProject.category} · {uiProject.year}
          </p>
          <h1
            className="font-headline text-6xl leading-none tracking-tighter md:text-8xl"
            style={{ color: '#ffffff' }}
          >
            {uiProject.title}
          </h1>
          {uiProject.subtitle && (
            <p
              className="font-headline mt-3 text-2xl italic"
              style={{ color: 'rgba(255,179,181,0.9)' }}
            >
              {uiProject.subtitle}
            </p>
          )}
        </div>
      </div>

      <main className="mx-auto max-w-7xl px-8 pt-20 pb-24">
        {/* ── Meta bar ── */}
        <div
          className="mb-16 flex flex-wrap gap-8 pb-12"
          style={{ borderBottom: '1px solid var(--color-outline-variant)' }}
        >
          {[
            { label: 'Role', value: uiProject.role },
            { label: 'Duration', value: uiProject.duration },
            { label: 'Year', value: uiProject.year },
          ].map((m) => (
            <div key={m.label}>
              <p
                className="font-label mb-1 text-xs tracking-widest uppercase"
                style={{ color: 'var(--color-outline)' }}
              >
                {m.label}
              </p>
              <p
                className="font-body text-base font-medium"
                style={{ color: 'var(--color-on-surface)' }}
              >
                {m.value}
              </p>
            </div>
          ))}
          <div className="ml-auto flex flex-wrap items-center gap-2">
            {uiProject.tags?.map((tag) => (
              <span
                key={tag}
                className="font-label px-4 py-1.5 text-xs tracking-wide uppercase"
                style={{
                  backgroundColor: 'var(--color-surface-container-highest)',
                  color: 'var(--color-on-surface-variant)',
                  borderRadius: 'var(--radius-full)',
                }}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* ── Overview + Challenge ── */}
        <section className="mb-24 grid grid-cols-1 gap-16 lg:grid-cols-2">
          <div>
            <p
              className="font-label mb-4 text-xs font-bold tracking-[0.2em] uppercase"
              style={{ color: 'var(--color-outline)' }}
            >
              Overview
            </p>
            <p
              className="font-body text-lg leading-relaxed"
              style={{ color: 'var(--color-on-surface)' }}
            >
              {uiProject.overview}
            </p>
          </div>
          <div>
            <p
              className="font-label mb-4 text-xs font-bold tracking-[0.2em] uppercase"
              style={{ color: 'var(--color-outline)' }}
            >
              The Challenge
            </p>
            <p
              className="font-body text-lg leading-relaxed"
              style={{ color: 'var(--color-on-surface-variant)' }}
            >
              {uiProject.challenge}
            </p>
          </div>
        </section>

        {/* ── Approach ── */}
        {uiProject.approach && uiProject.approach.length > 0 && (
          <section className="mb-24">
            <p
              className="font-label mb-12 text-xs font-bold tracking-[0.2em] uppercase"
              style={{ color: 'var(--color-outline)' }}
            >
              Architectural Approach
            </p>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              {uiProject.approach.map((item, i) => (
                <div
                  key={item.title}
                  className="flex items-start gap-6 p-10"
                  style={{
                    backgroundColor: 'var(--color-surface-container-low)',
                    borderRadius: 'var(--radius-xl)',
                  }}
                >
                  <div
                    className="flex h-12 w-12 flex-shrink-0 items-center justify-center"
                    style={{
                      backgroundColor:
                        i === 0
                          ? uiProject.accentColor
                          : 'var(--color-surface-container-highest)',
                      borderRadius: 'var(--radius-lg)',
                    }}
                  >
                    <span
                      className="material-symbols-outlined"
                      style={{
                        color:
                          i === 0
                            ? 'var(--color-on-primary)'
                            : 'var(--color-on-surface-variant)',
                      }}
                    >
                      {item.icon}
                    </span>
                  </div>
                  <div>
                    <p
                      className="font-headline mb-2 text-xl"
                      style={{ color: 'var(--color-on-surface)' }}
                    >
                      {item.title}
                    </p>
                    <p
                      className="font-body text-sm leading-relaxed"
                      style={{ color: 'var(--color-on-surface-variant)' }}
                    >
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* ── Metrics ── */}
        <ImpactCard
          metrics={uiProject.metrics}
          accentColor={uiProject.accentColor}
        />

        {/* ── Screenshots ── */}
        <ImageGallery images={uiProject.images} title={uiProject.title} />

        {/* ── Navigation ── */}
        <div
          className="flex items-center justify-between pt-12"
          style={{ borderTop: '1px solid var(--color-outline-variant)' }}
        >
          <Button
            href="/work"
            variant="ghost"
            icon="arrow_back"
            className="flex-row-reverse gap-2"
          >
            All Work
          </Button>
          <Button href="/contact" icon="arrow_forward">
            Start a Project
          </Button>
        </div>
      </main>

      <Footer
        brandName="Vimal Desai"
        tagline="Building performant, scalable systems from concept to deployment."
      />
      <Watermark text={uiProject.title?.toLowerCase()} />
    </>
  );
}
