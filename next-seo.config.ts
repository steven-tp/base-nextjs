import { DefaultSeoProps } from 'next-seo'

export const SEO: DefaultSeoProps = {
  titleTemplate: '%s | Base',
  defaultTitle: 'Base',
  description: 'Trade, earn, and own crypto.',
  twitter: {
    cardType: 'summary_large_image',
    handle: '@Base',
    site: '@Base',
  },
  openGraph: {
    title: "Base - Everyone's Favorite DEX",
    description: 'Trade, earn, and own crypto.',
    images: [{ url: '/thumbnail.png' }],
  },
}
