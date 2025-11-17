import { Code2, Globe, LineChart, Brain, Users2, Video, Sparkles } from 'lucide-react'

const skills = [
  { icon: Brain, title: 'AI Engineering', desc: 'Applied AI, LLMs, automation, and ML systems that ship.' },
  { icon: Globe, title: 'Website Builder', desc: 'Fast, modern, conversion-focused websites with clean UX.' },
  { icon: LineChart, title: 'Marketing Strategy', desc: 'Positioning, funnels, analytics, and growth loops that work.' },
  { icon: Users2, title: 'Business Analysis', desc: 'Lean discovery, clear specs, KPIs, and measurable outcomes.' },
  { icon: Sparkles, title: 'User Experience', desc: 'Research, flows, and delightful interfaces that drive action.' },
  { icon: Code2, title: 'Management', desc: 'Roadmaps, ops, delivery, and team orchestration at pace.' },
  { icon: Video, title: 'Video Editing', desc: 'Punchy edits, motion, and narrative for product and brand.' },
]

export default function Expertise() {
  return (
    <section id="expertise" className="relative py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">What I do</h2>
          <p className="mt-3 text-gray-700">I approach every task from the other person’s perspective and deliver exactly what’s required with value, clarity, and a strong sense of collaboration.</p>
        </div>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-2xl border border-gray-200 bg-white/70 backdrop-blur p-6 hover:shadow-lg transition-shadow">
              <div className="w-10 h-10 rounded-lg bg-black text-white flex items-center justify-center">
                <Icon size={20} />
              </div>
              <h3 className="mt-4 font-semibold text-lg">{title}</h3>
              <p className="mt-2 text-sm text-gray-700">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
