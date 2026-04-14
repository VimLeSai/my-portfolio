export default function Testimonials() {
  return (
    <section className="bg-surface-container-lowest border-outline-variant/10 border-y px-8 py-32">
      <div className="mx-auto max-w-screen-2xl py-24">
        <p className="font-label text-outline mb-16 text-center text-sm tracking-[0.2em] uppercase">
          Echoes of Success
        </p>
        <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
          {/* Testimonial 1 */}
          <div className="relative">
            <span className="font-headline text-surface-container absolute -top-6 -left-4 text-8xl italic opacity-50">
              "
            </span>
            <p className="font-body text-on-surface relative z-10 mb-8 text-lg italic">
              Vimal possesses the rare ability to see the forest and the trees
              simultaneously. His code is as elegant as his architectural
              diagrams.
            </p>
            <div className="flex items-center gap-4">
              <div className="h-10 w-10 overflow-hidden rounded-full bg-stone-200">
                <img
                  alt="Sarah Chen"
                  data-alt="Portrait of a female technology executive"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDSE-GocWgnN8JxiyH3GrIOLNk1i4vQa-7bIgDLI704JPUmX75P8xgDI3dilg3SaZKLorTpjhREc8ogOfWcxKh7JZzPv6AoWp4UdtwQnULVkE2RWPF-H3G0OX-ikIRr5HlrdraPGqu9MoPirYkflthcPDdMfze4CKCy_tTXfEkxmYZU62phnNiiO1Ms_U4lCnmbH9qNfpVW8YD70psF2uXKKU4F2coBBzYNQHAatrf7qMP1ylI7lm6r6x-a9JS8dLTHbOT7T8wU1JM"
                />
              </div>
              <div>
                <p className="font-label text-xs font-bold tracking-widest uppercase">
                  Sarah Chen
                </p>
                <p className="font-label text-outline text-[10px] tracking-wider uppercase">
                  CTO, Emtec Financial
                </p>
              </div>
            </div>
          </div>
          {/* Testimonial 2 */}
          <div className="relative">
            <span className="font-headline text-surface-container absolute -top-6 -left-4 text-8xl italic opacity-50">
              "
            </span>
            <p className="font-body text-on-surface relative z-10 mb-8 text-lg italic">
              The monolithic scaling project he led was a masterclass in
              engineering discipline. We haven't seen a single crash in 18
              months.
            </p>
            <div className="flex items-center gap-4">
              <div className="h-10 w-10 overflow-hidden rounded-full bg-stone-200">
                <img
                  alt="Marcus Thorne"
                  data-alt="Portrait of a male business leader"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCDgYtHZgQM7e0fq-dqSBpTRP_uX_tqQernUWEVdwRH-XpNuxF3PhHBu8yuiN5p8Ao3sdgjI6H1LUJhWF4rSf3bmKuuBdIouFJ3nszsLLxGuGr4cDIqU57lOVkLj1BgJxNHMY53IWIsDtJuMfG6IwaqVWWSeApsuCHCKeQsWgvcrlmZqzHqRQJ2rR6mBE_yj-7mtXvxK8DqnE76hG9HK1k8s8f7C0jhiPwwHKAqds03U755_Y5Q1WcNAfCplsCqbtl3Zsb86SjgX4U"
                />
              </div>
              <div>
                <p className="font-label text-xs font-bold tracking-widest uppercase">
                  Marcus Thorne
                </p>
                <p className="font-label text-outline text-[10px] tracking-wider uppercase">
                  Product Lead, Knovator
                </p>
              </div>
            </div>
          </div>
          {/* Testimonial 3 */}
          <div className="relative">
            <span className="font-headline text-surface-container absolute -top-6 -left-4 text-8xl italic opacity-50">
              "
            </span>
            <p className="font-body text-on-surface relative z-10 mb-8 text-lg italic">
              Vimal didn't just join our team; he elevated our entire
              engineering culture through mentorship and rigorous standards.
            </p>
            <div className="flex items-center gap-4">
              <div className="h-10 w-10 overflow-hidden rounded-full bg-stone-200">
                <img
                  alt="Elena Rodriguez"
                  data-alt="Portrait of a female design director"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuC2L6Ca4KUiaic0K5EflrSBlrjmWf_nNix79UJDHq3C4cRkbnRrnRgiFluv2JGONaebLle4XNFIsxDa5JYHkt0e1QTmAym8kbmx_rIUQLvvriucymel5uaiy3mx2fB0OWFiwcGoIriSvVs5q7QFqmXRotJRa4zflj-rORv45wbRb-ozRa5JaPdWiGmuaWeUrtK76wsBjVllmm_lK3WpXM8csJQh-TOEPTERZfAnGz3lePTfvIIRHc-Xp0LsR-0H4iYMML0kLna2zB0"
                />
              </div>
              <div>
                <p className="font-label text-xs font-bold tracking-widest uppercase">
                  Elena Rodriguez
                </p>
                <p className="font-label text-outline text-[10px] tracking-wider uppercase">
                  Design Director, Prism
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
