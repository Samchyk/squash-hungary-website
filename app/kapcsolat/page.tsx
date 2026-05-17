'use client'

import { useState } from 'react'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { PageHeader } from '@/components/page-header'

export default function KapcsolatPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    consent: false,
  })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!formData.consent) {
      alert('Kérlek, fogadd el az adatvédelmi nyilatkozatot!')
      return
    }

    setLoading(true)
    
    // Simulate form submission
    setTimeout(() => {
      setSubmitted(true)
      setLoading(false)
      setFormData({ name: '', email: '', message: '', consent: false })
      
      // Hide success message after 5 seconds
      setTimeout(() => setSubmitted(false), 5000)
    }, 1000)
  }

  return (
    <main className="min-h-screen flex flex-col">
      <Navigation />
      <PageHeader
        subtitle="Lépj Kapcsolatba"
        title="Kapcsolat"
        description="Van egy kérdésed vagy ötleted? Szeretnénk hallani tőled! Küldjük el az üzeneted az alábbi formán keresztül."
      />

      <section className="py-20 md:py-32 px-4 md:px-8 max-w-4xl mx-auto w-full">
        <div className="grid md:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div className="space-y-8 animate-slide-in-left">
            <div className="hover:translate-x-2 transition-transform duration-300">
              <h3 className="font-playfair text-2xl font-bold mb-2">Email</h3>
              <a href="mailto:info@magyarsquash.hu" className="text-accent font-bold hover:opacity-80 transition-opacity">
                info@magyarsquash.hu
              </a>
            </div>
            
            <div className="hover:translate-x-2 transition-transform duration-300">
              <h3 className="font-playfair text-2xl font-bold mb-2">Hely</h3>
              <p className="text-foreground leading-relaxed">
                Budapest<br />
                Magyarország
              </p>
            </div>

            <div className="hover:translate-x-2 transition-transform duration-300">
              <h3 className="font-playfair text-2xl font-bold mb-2">Nyitva tartás</h3>
              <p className="text-foreground leading-relaxed">
                Hétfő - Péntek: 9:00 - 18:00<br />
                Szombat - Vasárnap: Zárva
              </p>
            </div>

            <div className="pt-8 border-t border-border">
              <h4 className="font-bold text-sm uppercase tracking-wide text-accent mb-4">Közösségi Média</h4>
              <p className="text-sm text-muted-foreground">
                Kövesd a hungarysquash-t a közösségi médiában a legfrissebb hírekért és frissítésekért.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="animate-slide-in-right">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="animate-slide-in-down" style={{ animationDelay: '100ms' }}>
                <label htmlFor="name" className="block text-sm font-bold mb-2">
                  Név *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-input border-2 border-border rounded-sm focus:outline-none focus:border-accent transition-all duration-300 hover:border-border/80"
                  placeholder="A te neved"
                />
              </div>

              <div className="animate-slide-in-down" style={{ animationDelay: '150ms' }}>
                <label htmlFor="email" className="block text-sm font-bold mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-input border-2 border-border rounded-sm focus:outline-none focus:border-accent transition-all duration-300 hover:border-border/80"
                  placeholder="A te email címed"
                />
              </div>

              <div className="animate-slide-in-down" style={{ animationDelay: '200ms' }}>
                <label htmlFor="message" className="block text-sm font-bold mb-2">
                  Üzenet *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-input border-2 border-border rounded-sm focus:outline-none focus:border-accent transition-all duration-300 resize-none hover:border-border/80"
                  placeholder="Az te üzeneted..."
                />
              </div>

              <div className="flex items-start gap-3 animate-slide-in-down" style={{ animationDelay: '250ms' }}>
                <input
                  type="checkbox"
                  id="consent"
                  name="consent"
                  checked={formData.consent}
                  onChange={handleChange}
                  className="w-5 h-5 mt-1 cursor-pointer accent-accent"
                />
                <label htmlFor="consent" className="text-sm leading-relaxed">
                  Elfogadom az <a href="/adatvedelem" className="text-accent hover:underline">adatvédelmi nyilatkozatot</a> és hogy a hungarysquash felhasználhatja az adataimat az üzenet feldolgozásához.
                </label>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full px-8 py-4 bg-accent text-accent-foreground font-bold rounded-sm hover:scale-105 disabled:opacity-50 transition-all duration-300 animate-slide-in-down shadow-lg"
                style={{ animationDelay: '300ms' }}
              >
                {loading ? 'Küldés alatt...' : 'Üzenet Küldése'}
              </button>

              {submitted && (
                <div className="p-4 bg-accent bg-opacity-10 border-2 border-accent rounded-sm animate-scale-in">
                  <p className="text-sm font-bold text-accent">
                    Köszönöm az üzenetét! Hamarosan válaszolunk.
                  </p>
                </div>
              )}
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
