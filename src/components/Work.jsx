import { motion } from 'framer-motion'

const projects = [
  {
    title: 'AI Product Dashboard',
    description: 'A data-rich dashboard with real-time analytics and a clean, modern UI.',
    tags: ['React', 'Tailwind', 'Framer Motion'],
  },
  {
    title: '3D Interactive Landing',
    description: 'A playful hero built with Spline and buttery-smooth scroll animations.',
    tags: ['Spline', 'GSAP', 'Design Systems'],
  },
  {
    title: 'E-commerce Experience',
    description: 'High-converting storefront with delightful microinteractions and accessibility.',
    tags: ['Next.js', 'Stripe', 'A11y'],
  },
]

function Work() {
  return (
    <section id="work" className="py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">Selected Work</h2>
          <p className="text-gray-600 mt-2">A few highlights from recent projects.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, idx) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="group rounded-xl border border-black/10 bg-white p-5 hover:shadow-xl hover:-translate-y-0.5 transition-all"
            >
              <div className="aspect-video rounded-lg bg-gradient-to-br from-indigo-100 via-fuchsia-100 to-cyan-100 mb-4" />
              <h3 className="font-semibold text-lg">{p.title}</h3>
              <p className="text-sm text-gray-600 mt-1">{p.description}</p>
              <div className="flex flex-wrap gap-2 mt-3">
                {p.tags.map((t) => (
                  <span key={t} className="text-xs px-2 py-1 rounded-full bg-gray-100 text-gray-700 ring-1 ring-black/5">{t}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Work
