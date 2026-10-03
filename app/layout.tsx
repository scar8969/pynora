import './globals.css'
import type { Metadata } from 'next'
import { Cursor } from '@/components/Cursor'

export const metadata: Metadata = {
  title: 'Portfolio',
  description: 'Design work showcase',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        {/*
        THESIS: Portfolio as performance—the interface demonstrates craft through its own execution rather than merely containing work. Refuses the safe template grid of same-size project cards.

        OWN-WORLD: Fashion lookbook editorial aesthetic. Off-white linen ground (not pure white), refined grotesque sans at small sizes for navigation and metadata, generous negative space, full-bleed project imagery that fills viewports, scroll as page turn. Dark mode inverts to deep charcoal with warm white text. No decorative glass, gradients, or eyebrows.

        STORY: Visitor arrives, immediately sees work at scale (not chrome), scrolls through projects as editorial spreads, understands the designer's range and craft quality through both the work shown and the portfolio's own execution, finds contact without hunting.

        FIRST VIEWPORT: Full-bleed project hero image filling 100vh, designer name set small in top left corner (18px, tracked wide), minimal fixed navigation in top right (Work / About / Contact at same scale), project title overlaid at bottom in large refined sans (clamp 48-72px), subtle scroll indicator. No hero section, no cards—work is immediate.

        FORM: Fashion lookbook spread, position 3 of 7 grounded directions; seed key a652d926.

        FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, and DESIGN.md.
        */}
        {children}
        <Cursor />
      </body>
    </html>
  )
}
