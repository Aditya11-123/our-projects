import Container from '../components/common/Container';

export default function About() {
  return (
    <main className="pt-32 pb-24 min-h-screen">
      {/* Header banner */}
      <div className="mb-16">
        <Container>
          <div className="max-w-2xl">
            <h1 className="font-display font-bold text-4xl md:text-5xl text-gray-900 mb-4">
              About Our Solutions
            </h1>
            <p className="text-gray-600 text-lg leading-relaxed">
              We engineer scalable digital solutions that transform operations and drive growth.
            </p>
          </div>
        </Container>
      </div>

      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Cards */}
          <div className="lg:col-span-8 flex flex-col gap-8">
            {/* Mission */}
            <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm relative overflow-hidden">
              <div className="absolute top-0 left-0 bottom-0 w-1 bg-brand-primary" />
              <h2 className="text-xl font-display font-bold text-gray-900 mb-4">
                Our Mission
              </h2>
              <p className="text-gray-600 text-sm leading-relaxed">
                To design, develop, and deploy software that stands out. We don't believe in generic
                solutions or copy-paste templates. We build bespoke systems engineered for performance,
                visual impact, and reliable scale.
              </p>
            </div>

            {/* Philosophy */}
            <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm relative overflow-hidden">
              <div className="absolute top-0 left-0 bottom-0 w-1 bg-brand-primary" />
              <h2 className="text-xl font-display font-bold text-gray-900 mb-4">
                Precision Engineering
              </h2>
              <p className="text-gray-600 text-sm leading-relaxed">
                Every line of code we write is optimized for speed, stability, and efficiency. From asset 
                delivery pipeline optimization to robust backend architectures, we design for peak performance.
              </p>
            </div>
          </div>

          {/* Right Cards / Tech summary */}
          <div className="lg:col-span-4 bg-gray-50 border border-gray-200 rounded-2xl p-8 shadow-sm">
            <h2 className="text-sm font-display font-bold uppercase tracking-wider text-gray-500 mb-6 border-b border-gray-200 pb-4">
              Core Technologies
            </h2>

            <div className="flex flex-col gap-6">
              {[
                {
                  category: 'Frontend',
                  items: ['React', 'Next.js', 'Vite', 'Tailwind CSS'],
                },
                {
                  category: 'Backend & Data',
                  items: ['Node.js', 'Express', 'PostgreSQL', 'Redis'],
                },
                {
                  category: 'Cloud & Infrastructure',
                  items: ['Docker', 'AWS', 'CI/CD Pipelines'],
                },
              ].map((group) => (
                <div key={group.category}>
                  <h4 className="text-xs uppercase font-bold text-brand-primary tracking-wide mb-3">
                    {group.category}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <span key={item} className="text-[11px] font-semibold uppercase px-2.5 py-1 rounded-full bg-white border border-gray-200 text-gray-600 shadow-sm">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </main>
  );
}
