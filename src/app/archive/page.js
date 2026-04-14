import Navbar from '@/components/nav';
import Footer from '@/components/footer';
import Watermark from '@/components/ui/Watermark';
import Link from 'next/link';

export const metadata = {
  title: 'Archive — Portfolio',
  description:
    'Thoughts on Craft and System Design. A monograph of technical explorations.',
};

const articles = [
  {
    id: 'architects-dilemma',
    featured: true,
    date: 'November 12, 2023',
    readTime: '12 min read',
    category: 'System Architecture',
    title:
      "The Architect's Dilemma: Balancing Immediate Velocity with Long-term Scalability",
    excerpt:
      'In high-growth environments, the pressure to deliver features often conflicts with the structural integrity of the codebase. This exploration details a framework for making informed trade-offs...',
    image:
      'https://images.unsplash.com/photo-1518770660439-4636190af475?w=900&q=80',
    tags: ['Architecture', 'Engineering'],
  },
  {
    id: 'atomic-design',
    featured: false,
    date: 'Oct 28, 2023',
    readTime: '8 min read',
    category: 'Frontend Leadership',
    title: 'Atomic Design in Large Scale React Apps',
    excerpt:
      'Moving beyond basic components to a hierarchical design system that serves 50+ engineers.',
    image:
      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80',
    tags: ['React', 'Design Systems'],
  },
  {
    id: 'data-informed',
    featured: false,
    date: 'Sep 15, 2023',
    readTime: '8 min read',
    category: 'Product Strategy',
    title: 'Data-Informed Engineering: Measuring what actually matters',
    excerpt:
      'DORA metrics are just the start. Learn how we built a custom telemetry layer to monitor developer experience and code health in real-time.',
    image:
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80',
    tags: ['System Architecture', 'Product'],
  },
  {
    id: 'ai-collaborative-ides',
    featured: false,
    date: 'Aug 02, 2023',
    readTime: '5 min read',
    category: 'Product Strategy',
    title: 'The Future of AI in Collaborative IDEs',
    excerpt:
      "The next decade of engineering isn't about writing more code, but curating more intent.",
    image: null,
    tags: ['AI', 'Developer Tools'],
  },
];

const filterThemes = [
  'All Articles',
  'System Architecture',
  'Frontend Leadership',
  'Product Strategy',
];

export default function ArchivePage() {
  const featuredArticle = articles.find((a) => a.featured);
  const otherArticles = articles.filter((a) => !a.featured);

  return (
    <>
      <Navbar
        brandName="Portfolio"
        ctaLabel="Get in Touch"
        ctaHref="/contact"
      />

      <main className="mx-auto max-w-7xl px-8 pt-40 pb-24">
        {/* ── Hero ── */}
        <header className="mb-20 grid grid-cols-1 items-end gap-12 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <p
              className="font-label mb-4 text-xs font-medium tracking-[0.2em] uppercase"
              style={{ color: 'var(--color-on-surface-variant)' }}
            >
              Engineering Journal
            </p>
            <h1
              className="font-headline text-6xl leading-none tracking-tighter md:text-8xl"
              style={{ color: 'var(--color-on-surface)' }}
            >
              Thoughts on{' '}
              <em style={{ color: 'var(--color-primary-container)' }}>Craft</em>
              <br />
              and System Design.
            </h1>
          </div>
          <div className="lg:col-span-4">
            <p
              className="font-body text-right text-sm leading-relaxed"
              style={{ color: 'var(--color-on-surface-variant)' }}
            >
              A monograph of technical explorations, leadership frameworks, and
              product-minded engineering.
            </p>
          </div>
        </header>

        {/* ── Filter Bar ── */}
        <div className="mb-16 flex flex-wrap items-center gap-3">
          <span
            className="font-label mr-4 text-xs tracking-wider uppercase"
            style={{ color: 'var(--color-outline)' }}
          >
            Filter by Theme
          </span>
          {filterThemes.map((theme, i) => (
            <button
              key={theme}
              className="font-label px-5 py-2 text-xs tracking-wide uppercase transition-all"
              style={{
                backgroundColor:
                  i === 0
                    ? 'var(--color-primary-container)'
                    : 'var(--color-surface-container-highest)',
                color:
                  i === 0
                    ? 'var(--color-on-primary)'
                    : 'var(--color-on-surface-variant)',
                borderRadius: 'var(--radius-full)',
              }}
            >
              {theme}
            </button>
          ))}
        </div>

        {/* ── Article Grid ── */}
        <section className="mb-32 grid grid-cols-1 gap-8 md:grid-cols-2">
          {/* Featured Article */}
          {featuredArticle && (
            <div
              className="group cursor-pointer md:col-span-1"
              style={{ gridRow: 'span 2' }}
            >
              <Link href={`/archive/${featuredArticle.id}`}>
                <div
                  className="relative mb-6 overflow-hidden"
                  style={{ borderRadius: 'var(--radius-xl)' }}
                >
                  <img
                    src={featuredArticle.image}
                    alt={featuredArticle.title}
                    className="w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    style={{ height: '380px' }}
                  />
                  <div
                    className="font-label absolute top-4 left-4 px-4 py-1.5 text-xs tracking-wider uppercase"
                    style={{
                      backgroundColor: 'var(--color-primary-container)',
                      color: 'var(--color-on-primary)',
                      borderRadius: 'var(--radius-full)',
                    }}
                  >
                    Featured
                  </div>
                </div>
                <div>
                  <p
                    className="font-label mb-3 text-xs tracking-wider uppercase"
                    style={{ color: 'var(--color-outline)' }}
                  >
                    {featuredArticle.date} · {featuredArticle.readTime}
                  </p>
                  <h2
                    className="font-headline group-hover:text-primary-container mb-4 text-3xl leading-snug transition-colors"
                    style={{ color: 'var(--color-on-surface)' }}
                  >
                    {featuredArticle.title}
                  </h2>
                  <p
                    className="font-body mb-5 text-sm leading-relaxed"
                    style={{ color: 'var(--color-on-surface-variant)' }}
                  >
                    {featuredArticle.excerpt}
                  </p>
                  <span
                    className="font-label inline-flex items-center gap-2 text-xs tracking-wider uppercase"
                    style={{ color: 'var(--color-primary-container)' }}
                  >
                    Read Article
                    <span className="material-symbols-outlined text-base">
                      arrow_forward
                    </span>
                  </span>
                </div>
              </Link>
            </div>
          )}

          {/* Other articles */}
          {otherArticles.map((article) => (
            <div key={article.id} className="group">
              <Link href={`/archive/${article.id}`}>
                {article.image && (
                  <div
                    className="relative mb-5 overflow-hidden"
                    style={{ borderRadius: 'var(--radius-xl)' }}
                  >
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full object-cover transition-transform duration-700 group-hover:scale-105"
                      style={{ height: '200px' }}
                    />
                  </div>
                )}
                {!article.image && (
                  <div
                    className="mb-5 flex items-center gap-3 p-6"
                    style={{
                      backgroundColor: 'var(--color-surface-container-low)',
                      borderRadius: 'var(--radius-xl)',
                      minHeight: '80px',
                    }}
                  >
                    <span
                      className="material-symbols-outlined text-3xl"
                      style={{ color: 'var(--color-primary-container)' }}
                    >
                      tips_and_updates
                    </span>
                  </div>
                )}
                <p
                  className="font-label mb-2 text-xs tracking-wider uppercase"
                  style={{ color: 'var(--color-outline)' }}
                >
                  {article.date} · {article.readTime}
                </p>
                <h3
                  className="font-headline mb-2 text-2xl leading-snug"
                  style={{ color: 'var(--color-on-surface)' }}
                >
                  {article.title}
                </h3>
                <p
                  className="font-body mb-4 text-sm leading-relaxed"
                  style={{ color: 'var(--color-on-surface-variant)' }}
                >
                  {article.excerpt}
                </p>
                <div className="flex flex-wrap gap-2">
                  {article.tags.map((tag) => (
                    <span
                      key={tag}
                      className="font-label px-3 py-1 text-xs tracking-wider uppercase"
                      style={{
                        backgroundColor:
                          'var(--color-surface-container-highest)',
                        color: 'var(--color-on-surface-variant)',
                        borderRadius: 'var(--radius-full)',
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </Link>
            </div>
          ))}
        </section>

        {/* ── Subscribe Banner ── */}
        <section
          className="grid grid-cols-1 items-center gap-12 px-12 py-16 md:grid-cols-2"
          style={{
            backgroundColor: 'var(--color-surface-container-low)',
            borderRadius: 'var(--radius-xl)',
          }}
        >
          <div>
            <h2
              className="font-headline text-4xl"
              style={{ color: 'var(--color-on-surface)' }}
            >
              Subscribe to the{' '}
              <em style={{ color: 'var(--color-primary-container)' }}>
                Monograph.
              </em>
            </h2>
            <p
              className="font-body mt-4 text-sm leading-relaxed"
              style={{ color: 'var(--color-on-surface-variant)' }}
            >
              Monthly deep-dives into software craft, architectural patterns,
              and engineering management directly to your inbox.
            </p>
            <div
              className="mt-8 flex gap-0 overflow-hidden"
              style={{ borderRadius: 'var(--radius-lg)' }}
            >
              <input
                type="email"
                placeholder="email@address.com"
                className="font-body flex-1 px-5 py-4 text-sm focus:outline-none"
                style={{
                  backgroundColor: 'var(--color-surface-container-lowest)',
                  color: 'var(--color-on-surface)',
                  border: 'none',
                }}
              />
              <button
                className="font-label px-6 py-4 text-xs font-bold tracking-wider whitespace-nowrap uppercase transition-opacity hover:opacity-80"
                style={{
                  backgroundColor: 'var(--color-secondary)',
                  color: 'var(--color-on-secondary)',
                }}
              >
                Join 2,400+ Engineers
              </button>
            </div>
          </div>

          {/* decorative lines */}
          <div className="hidden flex-col items-end gap-3 md:flex">
            {[100, 70, 40].map((w) => (
              <div
                key={w}
                className="h-2"
                style={{
                  width: `${w}%`,
                  backgroundColor: 'var(--color-surface-container-highest)',
                  borderRadius: 'var(--radius-full)',
                }}
              />
            ))}
          </div>
        </section>
      </main>

      <Footer
        brandName="Portfolio"
        tagline="A digital space dedicated to the intersection of complex system engineering and intentional user interface design."
      />
      <Watermark text="craft" />
    </>
  );
}
