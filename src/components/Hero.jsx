import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

function Hero() {
  return (
    <section className="relative pt-24 sm:pt-28 lg:pt-32 pb-12 sm:pb-20 lg:pb-28">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-32 -left-32 h-96 w-96 rounded-full bg-indigo-500/20 blur-3xl" />
        <div className="absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-cyan-500/20 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div className="order-2 lg:order-1">
            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight"
            >
              Portfolio, but make it playful
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="mt-5 text-lg sm:text-xl text-gray-600 max-w-xl"
            >
              A modern, interactive space showcasing your best work with a 3D hero you can move around.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mt-8 flex items-center gap-3"
            >
              <a href="#work" className="inline-flex items-center justify-center rounded-md bg-gray-900 text-white px-5 py-3 text-sm font-semibold shadow hover:bg-gray-800 transition-colors">
                View Work
              </a>
              <a href="#contact" className="inline-flex items-center justify-center rounded-md bg-white text-gray-900 px-5 py-3 text-sm font-semibold shadow ring-1 ring-black/10 hover:bg-gray-50 transition-colors">
                Contact Me
              </a>
            </motion.div>
          </div>
          <div className="order-1 lg:order-2 h-[420px] sm:h-[520px] lg:h-[580px] relative rounded-xl overflow-hidden ring-1 ring-black/10 bg-white/30 backdrop-blur">
            <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white/60 via-transparent to-white/20" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
