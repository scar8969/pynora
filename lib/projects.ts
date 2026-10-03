export interface Project {
  id: string
  title: string
  category: string
  year: string
  image: string
  description: string
  client: string
  role: string
  challenge: string
  solution: string
  images: { id: number; alt: string }[]
}

export const projects: Project[] = [
  {
    id: 'project-1',
    title: 'Brand Identity System',
    category: 'Visual Identity',
    year: '2024',
    image: '/images/project-1.jpg',
    description: 'Complete brand identity for a sustainable fashion startup',
    client: 'Aster Studio',
    role: 'Design Direction, Visual Identity',
    challenge: 'The startup needed to feel premium and purposeful in a market crowded with greenwashing — the identity had to prove sustainability through craft, not claims.',
    solution: 'A restrained system built on a warm linen palette, a bespoke wordmark with a subtle botanical cut, and packaging that doubles as plantable paper.',
    images: [
      { id: 1, alt: 'Brand identity hero' },
      { id: 2, alt: 'Stationery system' },
      { id: 3, alt: 'Packaging application' },
      { id: 4, alt: 'Detail close-up' },
    ],
  },
  {
    id: 'project-2',
    title: 'Editorial Design',
    category: 'Print & Digital',
    year: '2024',
    image: '/images/project-2.jpg',
    description: 'Art direction and layout for quarterly design publication',
    client: 'Folio Quarterly',
    role: 'Art Direction, Editorial Layout',
    challenge: 'A quarterly print journal needed a grid that could carry long-form essays, portfolios, and data-heavy features without ever feeling templated.',
    solution: 'A modular 12-column grid with an asymmetric folio system, generous white space, and a typographic hierarchy that lets each issue find its own voice.',
    images: [
      { id: 1, alt: 'Cover spread' },
      { id: 2, alt: 'Feature layout' },
      { id: 3, alt: 'Typography detail' },
      { id: 4, alt: 'Issue stack' },
    ],
  },
  {
    id: 'project-3',
    title: 'Packaging Design',
    category: 'Product',
    year: '2023',
    image: '/images/project-3.jpg',
    description: 'Premium packaging system for artisanal chocolate brand',
    client: 'Cacao & Co.',
    role: 'Packaging, Illustration Direction',
    challenge: 'Premium single-origin chocolate demanded packaging that conveyed terroir and craft at a glance, while standing out on crowded retail shelves.',
    solution: 'A tactile paper stock with debossed origin maps, minimal typography, and a color system keyed to each region\'s harvest.',
    images: [
      { id: 1, alt: 'Packaging hero' },
      { id: 2, alt: 'Bar wrapper' },
      { id: 3, alt: 'Retail display' },
      { id: 4, alt: 'Texture detail' },
    ],
  },
  {
    id: 'project-4',
    title: 'Digital Experience',
    category: 'Interactive',
    year: '2023',
    image: '/images/project-4.jpg',
    description: 'Immersive web experience for contemporary art gallery',
    client: 'North Gallery',
    role: 'UX, Interaction Design',
    challenge: 'The gallery\'s collection was best experienced in person — the site had to evoke the same spatial feeling of walking a showroom online.',
    solution: 'A full-bleed, scroll-driven experience with slow parallax, generous transitions, and an interface that disappears so the art stays foregrounded.',
    images: [
      { id: 1, alt: 'Web experience hero' },
      { id: 2, alt: 'Gallery view' },
      { id: 3, alt: 'Exhibition page' },
      { id: 4, alt: 'Mobile detail' },
    ],
  },
]

export function getProject(id: string): Project | undefined {
  return projects.find((p) => p.id === id)
}
