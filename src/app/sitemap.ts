import { MetadataRoute } from 'next'

import { getAllPostsTags, getSortedPostsData } from '@/lib/posts'

export default function sitemap(): MetadataRoute.Sitemap {
	const posts = getSortedPostsData()
	const tags = getAllPostsTags()
	const postMap = posts.map((post) => {
		return {
			url: `https://asibi.dev/blog/${post.slug}`,
			lastModified: new Date(),
		}
	})
	const tagMap = tags.map((tag) => {
		return {
			url: `https://asibi.dev/blog/tags/${tag}`,
			lastModified: new Date(),
		}
	})

	return [
		{
			url: 'https://asibi.dev',
			lastModified: new Date(),
		},
		{
			url: 'https://asibi.dev/about',
			lastModified: new Date(),
		},
		{
			url: 'https://asibi.dev/blog',
			lastModified: new Date(),
		},
		// {
		// 	url: 'https://asibi.dev/works',
		// 	lastModified: new Date(),
		// },
		// {
		// 	url: 'https://asibi.dev/tsuredure',
		// 	lastModified: new Date(),
		// },
		...postMap,
		...tagMap,
	]
}
