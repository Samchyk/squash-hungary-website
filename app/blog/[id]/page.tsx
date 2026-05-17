import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { BlogCard } from '@/components/blog-card'
import { getArticleById, blogArticles, getArticlesByCategory } from '@/lib/blog-data'
import Link from 'next/link'
import { notFound } from 'next/navigation'

interface ArticlePageProps {
  params: Promise<{ id: string }>
}

export async function generateMetadata({ params }: ArticlePageProps) {
  const { id } = await params
  const article = getArticleById(id)

  if (!article) {
    return {
      title: 'Cikk nem található',
    }
  }

  return {
    title: `${article.title} | hungarysquash Blog`,
    description: article.description,
  }
}

export async function generateStaticParams() {
  return blogArticles.map((article) => ({
    id: article.id,
  }))
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { id } = await params
  const article = getArticleById(id)

  if (!article) {
    notFound()
  }

  const relatedArticles = getArticlesByCategory(article.category)
    .filter(a => a.id !== article.id)
    .slice(0, 3)

  return (
    <main className="min-h-screen flex flex-col">
      <Navigation />

      {/* Article Header */}
      <article className="flex-grow">
        <div className="pt-32 pb-12 md:pt-40 md:pb-16 px-4 md:px-8 max-w-3xl mx-auto w-full">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-accent font-bold text-sm mb-8 hover:opacity-80 transition-opacity"
          >
            ← Vissza a blogra
          </Link>

          <div className="space-y-4 md:space-y-6 mb-12">
            <div className="flex items-center gap-4">
              <span className="text-xs font-bold uppercase tracking-wider text-accent bg-accent bg-opacity-10 px-3 py-1 rounded-full">
                {article.category}
              </span>
              <span className="text-xs text-muted-foreground">
                {article.readTime} min olvasás
              </span>
            </div>

            <h1 className="font-playfair text-5xl md:text-6xl font-bold text-pretty">
              {article.title}
            </h1>

            <div className="flex items-center gap-4 pt-6 border-t border-border">
              <div className="w-12 h-12 bg-accent text-accent-foreground rounded-full flex items-center justify-center font-playfair font-bold">
                {article.author.split(' ')[0][0]}{article.author.split(' ')[1][0]}
              </div>
              <div>
                <p className="font-bold text-foreground">{article.author}</p>
                <p className="text-sm text-muted-foreground">
                  {new Date(article.date).toLocaleDateString('hu-HU', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </p>
              </div>
            </div>
          </div>

          {/* Article Content */}
          <div className="prose prose-sm md:prose-base max-w-none">
            {article.content.split('\n\n').map((paragraph, idx) => (
              paragraph.startsWith('-') || paragraph.startsWith('1.') ? (
                <ul key={idx} className="space-y-2 list-disc list-inside text-foreground leading-relaxed">
                  {paragraph.split('\n').map((line, lineIdx) => (
                    <li key={lineIdx} className="ml-4">
                      {line.replace(/^[-\d.]\s*/, '')}
                    </li>
                  ))}
                </ul>
              ) : (
                <p key={idx} className="text-foreground leading-relaxed text-base md:text-lg">
                  {paragraph}
                </p>
              )
            ))}
          </div>
        </div>
      </article>

      {/* Related Articles */}
      {relatedArticles.length > 0 && (
        <section className="py-20 md:py-32 px-4 md:px-8 max-w-7xl mx-auto w-full bg-secondary">
          <h2 className="font-playfair text-4xl font-bold mb-12">
            Hasonló Cikkek
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {relatedArticles.map((relatedArticle) => (
              <BlogCard key={relatedArticle.id} article={relatedArticle} />
            ))}
          </div>
        </section>
      )}

      <Footer />
    </main>
  )
}
