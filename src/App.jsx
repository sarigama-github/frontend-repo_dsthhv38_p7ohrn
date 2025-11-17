import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Expertise from './components/Expertise'
import Projects from './components/Projects'
import About from './components/About'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-50 via-white to-pink-50 text-gray-900">
      <Navbar />
      <main className="pt-16">
        <Hero />
        <Expertise />
        <Projects />
        <About />
        <Contact />
      </main>
      <footer className="py-10 border-t border-gray-200 text-center text-sm text-gray-600">
        © {new Date().getFullYear()} Your Name — Built with care.
      </footer>
    </div>
  )
}

export default App
