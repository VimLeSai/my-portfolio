import Vink from '@/components/ui/vink';
import { projects } from '@/lib/projects';

export default function SelectedArtifacts() {
  const { stringerp, masterylogistics, micqro } = projects;

  const selectedProjects = [stringerp, masterylogistics, micqro];
  return (
    <section
      className="border-outline-variant/20 mx-auto max-w-7xl border-t px-8 py-32"
      id="work"
    >
      <div className="grid gap-12 lg:grid-cols-12 lg:gap-24">
        <div className="h-fit lg:sticky lg:top-40 lg:col-span-4">
          <span className="label-sm text-primary mb-6 block font-bold tracking-widest uppercase">
            Selected Projects
          </span>
          <h2 className="font-headline mb-8 text-5xl leading-tight">
            Engineering solutions for complex problems.
          </h2>
          <p className="text-on-surface-variant mb-8 text-lg leading-relaxed italic">
            A curation of enterprise applications and high-traffic platforms
            built with precision.
          </p>
          <div className="bg-primary/30 hidden h-px w-24 lg:block" />
          <Vink
            href="/archive"
            // variant="secondary"
            mode="text"
            showArrow
            className="label-sm group-hover:text-primary font-bold tracking-widest uppercase"
          >
            View All
          </Vink>
        </div>
        <div className="space-y-32 lg:col-span-8">
          {selectedProjects?.map((project) => {
            return (
              <div className="group" key={project.id}>
                <div className="bg-surface-container-low mb-8 overflow-hidden rounded-xl shadow-[0_20px_80px_rgba(88,65,65,0.06)] transition-all duration-500 group-hover:shadow-[0_20px_80px_rgba(88,65,65,0.12)]">
                  <img
                    className="h-80 w-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0"
                    data-alt="Dashboard interface for StringERP with data visualizations"
                    src={project.image}
                  />
                </div>
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="font-headline text-3xl">{project.title}</h3>
                    <h6 className="font-body mb-2 text-sm">
                      {project.tagline}
                    </h6>
                    <div className="flex gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="bg-surface-container-highest text-on-surface-variant rounded-full px-3 py-1 text-[10px] font-bold tracking-wider uppercase"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <Vink
                      href={`/work/${project.id}`}
                      mode="icon"
                      hoverStyle="fill"
                      className="group-hover:bg-[var(--color-primary-container)] duration-700 group-hover:text-[var(--color-on-primary)]"
                    >
                      <span className="material-symbols-outlined">
                        north_east
                      </span>
                    </Vink>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
