import Navbar from '@/components/nav';
import Footer from '@/components/footer';
import Button from '@/components/ui/Button';
import Watermark from '@/components/ui/Watermark';
import { notFound } from 'next/navigation';
import { projects, projectsArray } from '@/lib/projects';
import ImpactCard from './impact-cards';
import ImageGallery from './image-gallery';
import CaseStudyPager from './pager';

const projectsList = Object.values(projects);

export function generateStaticParams() {
  return projectsList.map((project) => ({ id: project.id }));
}

export async function generateMetadata({ params }) {
  const { id } = await params;
  const project = projectsList.find((p) => p.id === id);

  if (!project) return { title: 'Project Not Found' };
  return {
    title: `${project.title}`,
    description: project.tagline || project.overview,
  };
}

export default async function WorkDetailPage({ params }) {
  const { id } = await params;
  const project = projectsList.find((p) => p.id === id);

  if (!project) notFound();

  const hasHeroImage = Boolean(project.image);
  const index = projectsArray.findIndex((p) => p.id === project.id);
  const prev = index > 0 ? projectsArray[index - 1] : null;
  const next =
    index >= 0 && index < projectsArray.length - 1
      ? projectsArray[index + 1]
      : null;

  // Mapping lib data to UI expectations
  const uiProject = {
    ...project,
    subtitle: project.tagline,
    category: project.industries?.join(' · ') || project.tags?.join(' · '),
    year: project.period?.end || project.period?.start,
    duration: project.period?.end === 'Present' ? 'Ongoing' : `${project.period?.start} – ${project.period?.end}`,
    tags: project.skills?.filter(Boolean).map(s => s.label || s.name).slice(0, 6) || project.tags,
    hero: project.image || project.images?.[0] || '/assets/projects/placeholder.png',
    challenges: project.challenges || [],
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
        brandName={project.title}
        ctaLabel="View All Work"
        ctaHref="/work"
      />

      {hasHeroImage ? (
        <div className="relative mt-20 h-[min(56vh,560px)] w-full overflow-hidden md:mt-[80px]">
          <img
            src={uiProject.hero}
            alt={uiProject.title}
            className="h-full w-full object-cover object-top"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                'linear-gradient(to bottom, rgba(28,28,24,0.15) 0%, rgba(28,28,24,0.72) 100%)',
            }}
          />
          <div className="absolute right-0 bottom-0 left-0 mx-auto max-w-7xl px-8 pb-12 md:pb-16">
            <p className="font-label mb-3 text-xs tracking-[0.2em] uppercase text-white/70">
              {uiProject.category} · {uiProject.year}
            </p>
            <h1 className="font-headline text-5xl leading-[0.95] tracking-tight text-white md:text-7xl">
              {uiProject.title}
            </h1>
            {uiProject.subtitle && (
              <p className="font-body mt-4 max-w-2xl text-base leading-relaxed text-white/80 md:text-lg">
                {uiProject.subtitle}
              </p>
            )}
          </div>
        </div>
      ) : (
        <header className="mx-auto max-w-7xl px-8 pt-32 pb-8 md:pt-40 md:pb-12">
          <p className="font-label mb-4 text-xs tracking-[0.2em] uppercase text-[var(--color-outline)]">
            {uiProject.category} · {uiProject.year}
          </p>
          <h1 className="font-headline text-5xl leading-[0.95] tracking-tight text-[var(--color-on-surface)] md:text-7xl">
            {uiProject.title}
          </h1>
          {uiProject.subtitle && (
            <p className="font-body mt-5 max-w-2xl text-lg leading-relaxed text-[var(--color-on-surface-variant)]">
              {uiProject.subtitle}
            </p>
          )}
        </header>
      )}

      <main
        className={`mx-auto max-w-7xl px-8 pb-24 ${
          hasHeroImage ? 'pt-16 md:pt-20' : 'pt-6 md:pt-8'
        }`}
      >
        {/* ── Meta bar ── */}
        <div
          className="mb-16 flex flex-wrap gap-8 pb-12"
          style={{ borderBottom: '1px solid var(--color-outline-variant)' }}
        >
          {[
            { label: 'Role', value: uiProject.role },
            project.company?.name
              ? { label: 'Company', value: project.company.name }
              : null,
            { label: 'Duration', value: uiProject.duration },
            { label: 'Year', value: uiProject.year },
          ]
            .filter(Boolean)
            .map((m) => (
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
            {uiProject.challenges.length > 1 ? (
              <ul className="space-y-5">
                {uiProject.challenges.map((c) => (
                  <li key={c.label}>
                    <p
                      className="font-headline mb-1 text-lg"
                      style={{ color: 'var(--color-on-surface)' }}
                    >
                      {c.label}
                    </p>
                    <p
                      className="font-body text-base leading-relaxed"
                      style={{ color: 'var(--color-on-surface-variant)' }}
                    >
                      {c.value}
                    </p>
                  </li>
                ))}
              </ul>
            ) : (
              <p
                className="font-body text-lg leading-relaxed"
                style={{ color: 'var(--color-on-surface-variant)' }}
              >
                {uiProject.challenges[0]?.value || uiProject.overview}
              </p>
            )}
          </div>
        </section>

        {/* ── Approach ── */}
        {uiProject.approach && uiProject.approach.length > 0 && (
          <section className="mb-24">
            <p
              className="font-label mb-12 text-xs font-bold tracking-[0.2em] uppercase"
              style={{ color: 'var(--color-outline)' }}
            >
              Approach
            </p>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              {uiProject.approach.map((item, i) => (
                <div
                  key={item.title}
                  className="flex items-start gap-6 p-10 transition-transform duration-300 hover:-translate-y-0.5"
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

        <CaseStudyPager prev={prev} next={next} />

        <div className="mt-8 flex items-center justify-between">
          <Button
            href="/work"
            variant="ghost"
            icon="arrow_back"
            className="flex-row-reverse gap-2"
          >
            All Work
          </Button>
          <Button href="/contact" icon="arrow_forward">
            Get in touch
          </Button>
        </div>
      </main>

      <Footer
        brandName="Vimal Desai"
        tagline="Full-stack engineer. Ten years building products that ship and stay up."
      />
      <Watermark text={uiProject.title?.toLowerCase()} />
    </>
  );
}
