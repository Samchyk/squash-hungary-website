'use client'

import { useState } from 'react'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { PageHeader } from '@/components/page-header'
import { BlogCard } from '@/components/blog-card'
import { blogArticles, categories } from '@/lib/blog-data'
import type { BlogCategory } from '@/lib/blog-data'

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState<BlogCategory | 'Összes'>('Összes')

  const filteredArticles = selectedCategory === 'Összes'
    ? blogArticles
    : blogArticles.filter(article => article.category === selectedCategory)

  return (
    <main className="min-h-screen flex flex-col">
      <Navigation />
      <PageHeader
        subtitle="Insights és Útmutatók"
        title="Squash Blog"
        description="Fedezz fel hasznos cikkeket, útmutatókat és tippeket a squash játékból - kezdőknek és haladóaknak egyaránt."
      />

      {/* Filter */}
      <section className="py-12 px-4 md:px-8 max-w-7xl mx-auto w-full">
        <div className="flex flex-wrap gap-3 items-center">
          <button
            onClick={() => setSelectedCategory('Összes')}
            className={`px-4 py-2 rounded-sm font-bold text-sm transition-all ${
              selectedCategory === 'Összes'
                ? 'bg-accent text-accent-foreground'
                : 'bg-card border-2 border-border hover:border-accent'
            }`}
          >
            Összes
          </button>
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-sm font-bold text-sm transition-all ${
                selectedCategory === category
                  ? 'bg-accent text-accent-foreground'
                  : 'bg-card border-2 border-border hover:border-accent'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-12 px-4 md:px-8 max-w-7xl mx-auto w-full flex-grow">
        {filteredArticles.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredArticles.map((article, idx) => (
              <BlogCard key={article.id} article={article} index={idx} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <p className="text-muted-foreground text-lg">
              Ebben a kategóriában nincs cikk.
            </p>
          </div>
        )}
      </section>

      <Footer />
    </main>
  )
}
