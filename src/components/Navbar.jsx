import { useState } from 'react'
import { Menu, X } from 'lucide-react'

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'Expertise', href: '#expertise' },
  { label: 'Projects', href: '#projects' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md/80 bg-white/60 border-b border-white/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#home" className="font-bold text-lg tracking-tight">AI Engineer • Portfolio</a>
        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="text-sm text-gray-700 hover:text-gray-900 transition-colors">
              {item.label}
            </a>
          ))}
          <a href="#contact" className="ml-2 inline-flex items-center rounded-full bg-black text-white text-sm px-4 py-2 hover:bg-gray-900 transition-colors">
            Let’s talk
          </a>
        </nav>
        <button className="md:hidden p-2" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-white/30 bg-white/70 backdrop-blur">
          <div className="px-4 py-3 flex flex-col gap-3">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="text-sm text-gray-800" onClick={() => setOpen(false)}>
                {item.label}
              </a>
            ))}
            <a href="#contact" className="inline-flex items-center rounded-full bg-black text-white text-sm px-4 py-2 w-max" onClick={() => setOpen(false)}>
              Let’s talk
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
