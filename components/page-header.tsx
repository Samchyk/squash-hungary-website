'use client'

import Link from 'next/link'

interface PageHeaderProps {
  title: string
  description: string
  subtitle?: string
}

export function PageHeader({ title, description, subtitle }: PageHeaderProps) {
  return (
    <div className="pt-32 pb-16 md:pt-40 md:pb-24 px-4 md:px-8 max-w-7xl mx-auto">
      <div className="space-y-4 md:space-y-6">
        {subtitle && (
          <p className="text-accent font-bold text-sm md:text-base uppercase tracking-wide">
            {subtitle}
          </p>
        )}
        <h1 className="font-playfair text-5xl md:text-6xl lg:text-7xl font-bold text-pretty">
          {title}
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl">
          {description}
        </p>
      </div>
    </div>
  )
}
