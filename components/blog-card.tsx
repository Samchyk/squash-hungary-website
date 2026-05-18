'use client'

import Link from 'next/link'
import type { BlogArticle } from '@/lib/blog-data'

interface BlogCardProps {
  article: BlogArticle
  index?: number
}

export function BlogCard({ article, index = 0 }: BlogCardProps) {
  return (
    <Link href={`/blog/${article.id}`}>
      <article 
        className="group h-full flex flex-col bg-card border-2 border-border rounded-sm hover:border-accent transition-all overflow-hidden hover:shadow-lg animate-fade-in hover:scale-105"
        style={{
          animationDelay: `${index * 100}ms`,
        }}
      >
        <div className="p-8 flex flex-col h-full">
          <div className="flex items-center justify-between mb-4">
            <span className="text-xs font-bold uppercase tracking-wider text-accent animate-pulse-subtle">
              {article.category}
            </span>
            <span className="text-xs text-muted-foreground">
              {article.readTime} min olvasás
            </span>
          </div>

          <h3 className="font-playfair text-xl md:text-2xl font-bold mb-3 group-hover:text-accent transition-colors line-clamp-3 duration-300">
            {article.title}
          </h3>

          <p className="text-sm text-muted-foreground mb-6 flex-grow line-clamp-2">
            {article.description}
          </p>

          <div className="flex items-center justify-between pt-4 border-t border-border">
            <p className="text-xs font-bold text-foreground">{article.author}</p>
            <span className="text-accent font-bold text-sm group-hover:translate-x-2 transition-transform duration-300">
              →
            </span>
          </div>
        </div>
      </article>
    </Link>
  )
}
