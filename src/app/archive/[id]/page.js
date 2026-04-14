import Navbar from '@/components/nav';
import Footer from '@/components/footer';
import Button from '@/components/ui/Button';
import Watermark from '@/components/ui/Watermark';
import { notFound } from 'next/navigation';

const articles = {
  'architects-dilemma': {
    title:
      "The Architect's Dilemma: Balancing Immediate Velocity with Long-term Scalability",
    category: 'System Architecture',
    date: 'November 12, 2023',
    readTime: '12 min read',
    image:
      'https://images.unsplash.com/photo-1518770660439-4636190af475?w=1400&q=80',
    excerpt:
      'In high-growth environments, the pressure to deliver features often conflicts with the structural integrity of the codebase. This exploration details a framework for making informed trade-offs.',
    tags: ['Architecture', 'Engineering', 'Leadership'],
    sections: [
      {
        heading: 'The False Binary',
        body: "Engineering leaders are often presented with a false choice: move fast and break things, or move carefully and lose ground. This framing is intellectually dishonest. The most enduring systems I've architected were not built by choosing one extreme — they were built by developing a rigorous framework for deciding, feature by feature, where structural investment pays dividends.",
      },
      {
        heading: 'The Velocity Debt Model',
        body: "Traditional technical debt is well understood: shortcuts taken today that must be repaid tomorrow, with interest. But velocity debt is subtler — it's the accumulated cost of architectural decisions that slow future development without necessarily introducing bugs. A service with no clear domain boundary is not broken, but every engineer who touches it will be slower, more cautious, more likely to introduce regressions.",
      },
      {
        heading: 'A Framework for Trade-offs',
        body: "After nine years of shipping systems at scale, I've converged on a decision heuristic I call the 'Three-Quarter Rule'. When evaluating any shortcut or architectural compromise, ask: will this decision still make sense when this system is at 75% of its projected scale? If yes, ship it. If no, invest in the right solution now. The edge cases — decisions that are acceptable at 25% scale but not at 75% — are where most teams get into trouble.",
      },
      {
        heading: 'Case Study: The Reporting Engine',
        body: 'At UpKeep Technologies, we faced a classic dilemma. The product roadmap demanded a real-time reporting dashboard in six weeks. The correct architectural approach — a dedicated read-replica with materialised views and a streaming pipeline — would take twelve. We shipped a naive Postgres query layer in week two, fully aware of its limitations. But crucially, we left a deliberate architectural seam: all reporting queries routed through a single ReportingRepository class. Six months later, when volume forced the issue, the migration took four days instead of four months.',
      },
      {
        heading: 'The Role of Seams',
        body: "The architectural seam is the most underrated tool in a senior engineer's toolkit. A seam is any interface, abstraction, or indirection point that allows a system component to be replaced without cascading changes. Seams cost almost nothing to install early and are extraordinarily expensive to retrofit later. My rule: any component you know you'll need to replace in 18 months should have a seam today.",
      },
      {
        heading: 'Closing Thoughts',
        body: "The architect's dilemma is never really about speed versus quality. It's about visibility. The teams that navigate this well have one thing in common: they make their trade-offs explicit, document their reasoning, and build systems with the seams already installed. The debt is still incurred — but it's accounted for, and it's payable.",
      },
    ],
  },
  'atomic-design': {
    title: 'Atomic Design in Large Scale React Apps',
    category: 'Frontend Leadership',
    date: 'October 28, 2023',
    readTime: '8 min read',
    image:
      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1400&q=80',
    excerpt:
      'Moving beyond basic components to a hierarchical design system that serves 50+ engineers.',
    tags: ['React', 'Design Systems', 'Frontend'],
    sections: [
      {
        heading: 'Beyond the Component Library',
        body: 'Most React codebases start with a components/ folder. A few well-intentioned engineers add Button.jsx, Input.jsx, Modal.jsx — and for a year, everything is fine. Then the team grows. Product velocity increases. And suddenly the components/ folder contains 340 files, half of which are slight variations of each other, and no one knows which Button to use.',
      },
      {
        heading: 'Atoms, Molecules, Organisms',
        body: "Brad Frost's Atomic Design methodology provides a vocabulary that maps naturally to React's component model. Atoms are the smallest units — a Button, an Icon, a Label. Molecules are functional combinations of atoms — a SearchBar (Input + Button + Icon). Organisms are complete, self-contained UI sections — a NavigationHeader, a ProductCard, a CheckoutForm. The power of this model is not the naming — it's the explicit hierarchy it enforces.",
      },
      {
        heading: 'Scaling to 50+ Engineers',
        body: "When the Emtec platform grew to a 50-engineer frontend team, we implemented Atomic Design with a strict co-location rule: every component lives alongside its tests, its Storybook story, and its type definitions. Discoverability through Storybook became the contract. If a component wasn't in Storybook, it didn't exist for design purposes. This single constraint eliminated 80% of duplicate component creation.",
      },
      {
        heading: 'Token-Driven Theming',
        body: "The second pillar of our system was design tokens. Rather than hardcoding colours and spacing values — even as Tailwind classes — all stylistic decisions flowed through a semantic token layer. A button's colour isn't `#800020`; it's `--color-primary-container`. This abstraction allowed us to ship a complete dark mode in three days, not three months.",
      },
    ],
  },
  'data-informed': {
    title: 'Data-Informed Engineering: Measuring what actually matters',
    category: 'Product Strategy',
    date: 'September 15, 2023',
    readTime: '8 min read',
    image:
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1400&q=80',
    excerpt:
      'DORA metrics are just the start. Learn how we built a custom telemetry layer to monitor developer experience and code health in real-time.',
    tags: ['System Architecture', 'Product', 'DevEx'],
    sections: [
      {
        heading: 'The Metrics Trap',
        body: "Every engineering organisation eventually discovers DORA metrics: Deployment Frequency, Lead Time for Changes, Change Failure Rate, and Time to Restore Service. These are genuinely useful — but they're lagging indicators. By the time your DORA metrics degrade, months of accumulated friction have already slowed your team down.",
      },
      {
        heading: 'Building a Leading Indicator Stack',
        body: 'At Knovator Health, we built a custom telemetry layer that tracked not just system performance, but developer experience in real-time. We instrumented everything: local build times, test suite durations, PR review latency, and even IDE plugin crash rates. The goal was to answer a deceptively simple question: is it harder to ship code today than it was last quarter?',
      },
      {
        heading: 'The Developer Experience Score',
        body: 'We aggregated our telemetry into a weekly DevEx Score — a composite of build time trends, flakiness rates, and review queue depth. When the score dropped, we treated it with the same urgency as a production incident. This cultural shift — treating developer friction as a first-class problem — reduced our average lead time from 4.2 days to 1.1 days over six months.',
      },
    ],
  },
  'ai-collaborative-ides': {
    title: 'The Future of AI in Collaborative IDEs',
    category: 'Product Strategy',
    date: 'August 02, 2023',
    readTime: '5 min read',
    image:
      'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=1400&q=80',
    excerpt:
      "The next decade of engineering isn't about writing more code, but curating more intent.",
    tags: ['AI', 'Developer Tools', 'Future'],
    sections: [
      {
        heading: 'The Shift from Writing to Curating',
        body: "For the past decade, engineering productivity has been measured in lines of code, PRs merged, and velocity points delivered. This framing is already obsolete. With the emergence of capable code-generation models, the constraint is no longer the ability to write code — it's the ability to specify, evaluate, and integrate code with architectural integrity.",
      },
      {
        heading: 'Intent as the Primary Artefact',
        body: "The most significant shift in collaborative IDEs won't be autocomplete. It will be intent capture. Future development environments will make it as easy to record why a decision was made as it is to make the decision itself. The next git log won't just tell you what changed — it will tell you what problem was being solved, what alternatives were considered, and what constraints were active at the time.",
      },
      {
        heading: 'Collaborative Agents',
        body: "The collaborative IDE of 2026 won't just assist individual developers — it will coordinate across teams. Imagine an agent that notices two engineers solving the same problem in different parts of the codebase, surfaces the overlap in real-time, and facilitates a shared abstraction before the technical debt is incurred. This is the real promise of AI in engineering: not writing code faster, but building systems more coherently.",
      },
    ],
  },
};

export function generateStaticParams() {
  return Object.keys(articles).map((id) => ({ id }));
}

export async function generateMetadata({ params }) {
  const article = articles[params.id];
  if (!article) return { title: 'Not Found' };
  return {
    title: `${article.title} — Portfolio`,
    description: article.excerpt,
  };
}

export default function ArticleDetailPage({ params }) {
  const article = articles[params.id];
  if (!article) notFound();

  return (
    <>
      <Navbar
        brandName="Portfolio"
        ctaLabel="Get in Touch"
        ctaHref="/contact"
      />

      {/* ── Hero ── */}
      <div
        className="relative w-full overflow-hidden"
        style={{ height: '55vh', marginTop: '80px' }}
      >
        <img
          src={article.image}
          alt={article.title}
          className="h-full w-full object-cover"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(to bottom, rgba(28,28,24,0.1) 0%, rgba(28,28,24,0.6) 100%)',
          }}
        />
        <div className="absolute right-0 bottom-0 left-0 mx-auto max-w-4xl px-8 pb-12">
          <p
            className="font-label mb-3 text-xs tracking-[0.2em] uppercase"
            style={{ color: 'rgba(252,249,243,0.7)' }}
          >
            {article.category}
          </p>
          <h1
            className="font-headline text-4xl leading-tight tracking-tighter md:text-6xl"
            style={{ color: '#ffffff' }}
          >
            {article.title}
          </h1>
        </div>
      </div>

      <main className="mx-auto max-w-4xl px-8 pt-16 pb-24">
        {/* ── Meta ── */}
        <div
          className="mb-10 flex items-center justify-between pb-10"
          style={{ borderBottom: '1px solid var(--color-outline-variant)' }}
        >
          <div className="flex items-center gap-6">
            <p
              className="font-label text-xs tracking-wider uppercase"
              style={{ color: 'var(--color-outline)' }}
            >
              {article.date}
            </p>
            <span style={{ color: 'var(--color-outline-variant)' }}>·</span>
            <p
              className="font-label text-xs tracking-wider uppercase"
              style={{ color: 'var(--color-outline)' }}
            >
              {article.readTime}
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            {article.tags.map((tag) => (
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

        {/* ── Excerpt ── */}
        <p
          className="font-headline mb-16 text-2xl leading-relaxed italic"
          style={{
            color: 'var(--color-on-surface)',
            borderLeft: `3px solid var(--color-primary-container)`,
            paddingLeft: '1.5rem',
          }}
        >
          {article.excerpt}
        </p>

        {/* ── Body Sections ── */}
        <div className="space-y-14">
          {article.sections.map((section) => (
            <div key={section.heading}>
              <h2
                className="font-headline mb-5 text-3xl"
                style={{ color: 'var(--color-on-surface)' }}
              >
                {section.heading}
              </h2>
              <p
                className="font-body text-lg leading-relaxed"
                style={{
                  color: 'var(--color-on-surface-variant)',
                  lineHeight: '1.9',
                }}
              >
                {section.body}
              </p>
            </div>
          ))}
        </div>

        {/* ── Navigation ── */}
        <div
          className="mt-20 flex items-center justify-between pt-12"
          style={{ borderTop: '1px solid var(--color-outline-variant)' }}
        >
          <Button
            href="/archive"
            variant="ghost"
            icon="arrow_back"
            className="flex-row-reverse"
          >
            Back to Archive
          </Button>
          <Button href="/contact" icon="arrow_forward">
            Work Together
          </Button>
        </div>
      </main>

      <Footer
        brandName="Portfolio"
        tagline="A digital space for technical craft and system design."
      />
      <Watermark text="read" />
    </>
  );
}
