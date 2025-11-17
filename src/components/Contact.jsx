import { useState } from 'react'

export default function Contact() {
  const [status, setStatus] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setStatus('')

    const form = new FormData(e.currentTarget)
    const payload = {
      name: form.get('name'),
      email: form.get('email'),
      subject: form.get('subject'),
      message: form.get('message'),
    }

    try {
      const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
      const res = await fetch(`${baseUrl}/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })
      if (!res.ok) throw new Error('Failed to send')
      setStatus('Thanks! I\'ll get back to you shortly.')
      e.currentTarget.reset()
    } catch (err) {
      setStatus('Something went wrong. Please try again later.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="contact" className="py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">Let’s collaborate</h2>
        <p className="mt-3 text-gray-700">Tell me about your goals. I’ll reply with next steps and a clear plan.</p>

        <form onSubmit={handleSubmit} className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
          <input required name="name" placeholder="Your name" className="col-span-1 sm:col-span-1 rounded-xl border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black" />
          <input required type="email" name="email" placeholder="Email" className="col-span-1 sm:col-span-1 rounded-xl border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black" />
          <input name="subject" placeholder="Subject (optional)" className="col-span-1 sm:col-span-2 rounded-xl border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black" />
          <textarea required name="message" placeholder="Tell me about your project" rows="5" className="col-span-1 sm:col-span-2 rounded-xl border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black" />
          <div className="col-span-1 sm:col-span-2 flex items-center gap-3">
            <button disabled={loading} className="inline-flex items-center rounded-full bg-black text-white text-sm px-6 py-3 disabled:opacity-60">
              {loading ? 'Sending…' : 'Send message'}
            </button>
            <span className="text-sm text-gray-700">{status}</span>
          </div>
        </form>
      </div>
    </section>
  )
}
