import { motion } from 'framer-motion'

const projects = [
  {
    title: 'AI Workflow Automation',
    tag: 'AI/Automation',
    desc: 'End-to-end automation using LLMs + tools to reduce cycle time by 70%.',
    link: '#',
  },
  {
    title: 'SaaS Landing + Onboarding',
    tag: 'Web/UX',
    desc: 'High-converting website and onboarding with crisp messaging and analytics.',
    link: '#',
  },
  {
    title: 'Go-to-Market Strategy',
    tag: 'Marketing/BA',
    desc: 'Positioning, ICP, and funnel strategy growing signups 3x over 8 weeks.',
    link: '#',
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-4 flex-wrap">
          <div>
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">Selected work</h2>
            <p className="mt-3 text-gray-700 max-w-2xl">Recent projects spanning AI engineering, product, and growth. Case studies available on request.</p>
          </div>
          <a href="#contact" className="inline-flex items-center rounded-full bg-black text-white text-sm px-5 py-3 h-max">Start a project</a>
        </div>

        <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <motion.a whileHover={{ y: -4 }} key={p.title} href={p.link} className="group rounded-2xl border border-gray-200 bg-white/70 backdrop-blur p-6 block">
              <div className="text-xs uppercase tracking-widest text-gray-600">{p.tag}</div>
              <h3 className="mt-2 font-semibold text-lg group-hover:underline">{p.title}</h3>
              <p className="mt-2 text-sm text-gray-700">{p.desc}</p>
              <div className="mt-4 text-sm font-medium text-gray-900">View details →</div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
