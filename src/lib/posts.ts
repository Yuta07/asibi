import fs from 'fs'
import path from 'path'

import matter from 'gray-matter'

export type Post = {
	slug: string
	content: string
	preface: string
	title: string
	createdAt: string
	eyecatch: string
	tags: string[]
	isDraft: boolean
}

const postsDirectory = path.join(process.cwd(), 'src/posts')

export const getAllPostsData = () => {
	const fileNames = fs.readdirSync(postsDirectory)
	const allPostsData = fileNames.map((fileName) => {
		// Remove ".md" from file name to get slug
		const slug = fileName.replace(/\.md$/, '')

		// Read markdown file as string
		const fullPath = path.join(postsDirectory, fileName)
		const fileContents = fs.readFileSync(fullPath, 'utf8')

		// Use gray-matter to parse the post metadata section
		const { content, data } = matter([fileContents].join('\n'))

		// Combine the data with the slug
		return {
			slug,
			content,
			...(data as {
				title: string
				preface: string
				createdAt: string
				eyecatch: string
				tags: string[]
				isDraft: boolean
			}),
		}
	})

	return allPostsData.filter((post) => {
		return !post.isDraft
	})
}

export const getAllPostsTags = () => {
	const fileNames = fs.readdirSync(postsDirectory)
	const allPostsTagData = fileNames.map((fileName) => {
		const fullPath = path.join(postsDirectory, fileName)
		const fileContents = fs.readFileSync(fullPath, 'utf8')

		const { data } = matter([fileContents].join('\n'))

		const d = data as { isDraft: boolean; tags: string[] }

		if (!d.isDraft) {
			return d.tags
		} else {
			return []
		}
	})

	return [...new Set(allPostsTagData.flat())]
}

export const getLatestPostsData = () => {
	const allPostsData = getAllPostsData()

	return allPostsData
		.sort((a, b) => {
			if (a.createdAt < b.createdAt) {
				return 1
			} else {
				return -1
			}
		})
		.slice(0, 3)
}

export const getSortedPostsData = (tag?: string) => {
	const allPostsData = getAllPostsData()

	if (tag === undefined)
		return allPostsData.sort((a, b) => {
			if (a.createdAt < b.createdAt) {
				return 1
			} else {
				return -1
			}
		})

	return allPostsData
		.filter((post) => {
			if (post.tags.indexOf(tag) !== -1) {
				return post
			}
		})
		.sort((a, b) => {
			if (a.createdAt < b.createdAt) {
				return 1
			} else {
				return -1
			}
		})
}

export const getPostData = (slug: string) => {
	const markdownWithMetadata = fs.readFileSync(path.join(postsDirectory, `${slug}.md`)).toString()
	const { data, content } = matter(markdownWithMetadata)

	return {
		slug,
		content,
		...(data as {
			title: string
			preface: string
			createdAt: string
			eyecatch: string
			tags: string[]
			isDraft: boolean
		}),
	}
}
