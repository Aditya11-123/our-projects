import { motion } from 'framer-motion';
import Container from '../components/common/Container';

export default function About() {
  return (
    <main className="pt-1 pt-1 min-h-screen">
      {/* Header banner */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="mb-16"
      >
        <Container>
          <div className="max-w-2xl">
            <h1 className="font-display font-bold text-4xl md:text-5xl text-white mb-4">
              About the s company
            </h1>
            <p className="text-blue-100/70 text-lg leading-relaxed">
              We engineer scalable digital solutions that transform operations and drive growth.
            </p>
          </div>
        </Container>
      </motion.div>

      <Container>
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.2 }
            }
          }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start"
        >
          {/* Left Cards */}
          <div className="lg:col-span-8 flex flex-col gap-8">
            {/* Mission */}
            <motion.div 
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
              }}
              className="bg-white/5 border border-white/10 backdrop-blur-sm rounded-2xl p-8 shadow-[0_4px_24px_rgba(37,99,235,0.15)] hover:shadow-[0_8px_32px_rgba(37,99,235,0.4)] transition-all duration-300 relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 bottom-0 w-1 bg-brand-primary" />
              <h2 className="text-xl font-display font-bold text-white mb-4">
                Our Mission
              </h2>
              <p className="text-blue-100/70 text-sm leading-relaxed">
                To design, develop, and deploy software that stands out. We don't believe in generic
                solutions or copy-paste templates. We build bespoke systems engineered for performance,
                visual impact, and reliable scale.
              </p>
            </motion.div>

            {/* Philosophy */}
            <motion.div 
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
              }}
              className="bg-white/5 border border-white/10 backdrop-blur-sm rounded-2xl p-8 shadow-[0_4px_24px_rgba(37,99,235,0.15)] hover:shadow-[0_8px_32px_rgba(37,99,235,0.4)] transition-all duration-300 relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 bottom-0 w-1 bg-brand-primary" />
              <h2 className="text-xl font-display font-bold text-white mb-4">
                Precision Engineering
              </h2>
              <p className="text-blue-100/70 text-sm leading-relaxed">
                Every line of code we write is optimized for speed, stability, and efficiency. From asset 
                delivery pipeline optimization to robust backend architectures, we design for peak performance.
              </p>
            </motion.div>
          </div>

          {/* Right Cards / Tech summary */}
          <motion.div 
            variants={{
              hidden: { opacity: 0, x: 20 },
              visible: { opacity: 1, x: 0, transition: { duration: 0.5 } }
            }}
            className="lg:col-span-4 bg-white/5 border border-white/10 backdrop-blur-sm rounded-2xl p-8 shadow-[0_4px_24px_rgba(37,99,235,0.15)] hover:shadow-[0_8px_32px_rgba(37,99,235,0.4)] transition-all duration-300"
          >
            <h2 className="text-sm font-display font-bold uppercase tracking-wider text-blue-100/50 mb-6 border-b border-white/10 pb-4">
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
                      <span key={item} className="text-[11px] font-semibold uppercase px-2.5 py-1 rounded-full bg-transparent border border-white/10 shadow-[0_4px_24px_rgba(37,99,235,0.15)] hover:shadow-[0_8px_32px_rgba(37,99,235,0.4)] transition-all duration-300 text-blue-100/70 shadow-sm">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </Container>
    </main>
  );
}
