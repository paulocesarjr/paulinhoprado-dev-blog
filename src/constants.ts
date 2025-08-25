type MapKey<T extends Map<any, any>> = T extends Map<infer K, any> ? K : never

/**
 * Metadata for your site
 */
export const SITE: Record<string, string> = {
	/**
	 * Base URL of your site, used in sitemap generation
	 */
	url: 'https://paulinhoprado.dev',
	/**
	 * Site-wide title
	 */
	title: 'paulinhoprado.dev',
	/**
	 * Used on index page and as a fallback if no title is set
	 */
	titleDefault: 'paulinhoprado.dev',
	/**
	 * Used in meta tags, RSS feed, and other places
	 */
	description: 'Me chamo Paulo Cesar Prado, sou Software Engineer na Globo.com e entusiasta em boas práticas de programação.',
	/**
	 * Language used in the <html> tag
	 */
	lang: 'pt-BR',
	/**
	 * Name of the image inside `public` folder that should be used as a default og:image
	 */
	defaultOgImage: '/og-image.png',
	/**
	 * Default author name that gets added to meta tags
	 */
	defaultAuthor: 'Paulo Prado',
}

interface Header {
	internal: Array<{ title: string, url: string }>
	external: Array<{ title: string, url: string, props?: Record<string, unknown> }>
}

/**
 * Links used in the header
 */
export const HEADER: Header = {
	/**
	 * Internal links to other subpages shown in the header navigation
	 */
	internal: [
		{
			title: 'Artigos',
			url: '/blog/',
		},
		{
			title: 'Eu',
			url: '/eu/',
		},
	],
	/**
	 * Arbitrary list of links (e.g. social media) shown on the right side of the header
	 */
	external: [
		{
			title: 'GitHub',
			url: 'https://github.com/paulocesarjr',
			props: {
				target: '_blank',
			},
		},
		{
			title: 'LinkedIn',
			url: 'https://www.linkedin.com/in/paulinhoprado',
			props: {
				target: '_blank',
			},
		},
		{
			title: 'Dev.to',
			url: 'https://dev.to/paulinhoprado',
			props: {
				target: '_blank',
			},
		},
	],
}

/**
 * A map of name - slug pairs
 */
export const FRONTMATTER_TAGS = new Map(
	[
		['Testes', 'testes'] as const,
		['Algoritmos', 'algoritmos'] as const,
		['Front-end', 'front-end'] as const,
	],
)

export type FrontmatterTag = MapKey<typeof FRONTMATTER_TAGS>

export const SKIP_NAV_ID = 'skip-to-content'

/**
 * Available "asides" that can be used in MDX files
 */
export const ASIDE_TYPES = ['note', 'tip', 'caution', 'danger'] as const
export type AsideType = (typeof ASIDE_TYPES)[number]
