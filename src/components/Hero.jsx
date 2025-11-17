import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] flex items-center">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-white/60 via-white/30 to-white/80 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-24">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="max-w-3xl">
          <span className="inline-flex items-center text-xs uppercase tracking-widest bg-black text-white rounded-full px-3 py-1 mb-4">Available for collaborations</span>
          <h1 className="text-4xl sm:text-6xl font-bold leading-tight tracking-tight">
            Building AI-driven products with clarity, speed, and impact
          </h1>
          <p className="mt-5 text-lg text-gray-700">
            AI Engineer • Website Builder • Marketing Strategist • Business Analyst • UX • Management • Video Editing
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#projects" className="inline-flex items-center rounded-full bg-black text-white text-sm px-5 py-3 hover:bg-gray-900 transition-colors">See my work</a>
            <a href="#contact" className="inline-flex items-center rounded-full bg-white text-gray-900 text-sm px-5 py-3 border border-gray-300 hover:bg-gray-50 transition-colors">Start a project</a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
