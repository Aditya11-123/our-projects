import TechBadge from '../components/ui/TechBadge';

export default function About() {
  return (
    <main className="bg-[#07070a] text-white min-h-screen pt-28 pb-16">
      {/* Header banner */}
      <div className="border-b border-white/5 pb-8 mb-12 bg-gradient-to-b from-[#121216]/20 to-transparent">
        <div className="container mx-auto px-4 md:px-8 text-left">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-primary mb-2">
            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
            ORGANIZATION
          </div>
          <h1 className="text-3xl md:text-5xl font-display font-extrabold uppercase italic tracking-wide">
            About We Pro
          </h1>
          <p className="text-gray-400 text-xs md:text-sm mt-2 max-w-xl">
            A collective of engineers pushing the boundaries of what's possible on the web.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-8 text-left">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Cards */}
          <div className="lg:col-span-8 flex flex-col gap-6">
            {/* Mission */}
            <div className="bg-[#0b0b0f] border border-white/5 rounded-md p-6 relative overflow-hidden">
              <div className="absolute top-0 left-0 bottom-0 w-[3px] bg-primary" />
              <h2 className="text-lg font-display font-extrabold uppercase italic tracking-wide mb-3">
                Our Mission
              </h2>
              <p className="text-gray-400 text-xs md:text-sm leading-relaxed">
                To design, develop, and deploy software that stands out. We don't believe in generic
                solutions or copy-paste templates. We build bespoke systems engineered for performance,
                visual impact, and reliable scale.
              </p>
            </div>

            {/* Philosophy */}
            <div className="bg-[#0b0b0f] border border-white/5 rounded-md p-6 relative overflow-hidden">
              <div className="absolute top-0 left-0 bottom-0 w-[3px] bg-primary" />
              <h2 className="text-lg font-display font-extrabold uppercase italic tracking-wide mb-3">
                Precision Coding
              </h2>
              <p className="text-gray-400 text-xs md:text-sm leading-relaxed">
                Just like a Formula 1 car, every line of code we write is optimized for speed, stability,
                and efficiency. From asset delivery pipeline optimization to real-time sync algorithms,
                we design for peak performance.
              </p>
            </div>
          </div>

          {/* Right Cards / Tech summary */}
          <div className="lg:col-span-4 bg-[#0b0b0f] border border-white/5 rounded-md p-6">
            <h2 className="text-sm font-display font-extrabold uppercase tracking-widest text-gray-400 mb-6 border-b border-white/5 pb-2">
              Our Technological Focus
            </h2>

            <div className="flex flex-col gap-6">
              {[
                {
                  category: 'Frontend',
                  items: ['React', 'Next.js', 'Vite', 'Three.js', 'Tailwind', 'Canvas API'],
                },
                {
                  category: 'Backend & Data',
                  items: ['Node.js', 'Express', 'Socket.io', 'PostgreSQL', 'MongoDB', 'Redis'],
                },
                {
                  category: 'AI/ML & Cloud',
                  items: ['OpenAI API', 'TensorFlow.js', 'Docker', 'AWS', 'Supabase'],
                },
              ].map((group) => (
                <div key={group.category}>
                  <h4 className="text-[10px] uppercase font-bold text-primary tracking-wider mb-2.5">
                    {group.category}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <TechBadge key={item} name={item} />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
