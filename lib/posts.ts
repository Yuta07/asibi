import fs from 'fs'
import path from 'path'

import matter from 'gray-matter'

const postsDirectory = path.join(process.cwd(), 'posts')

export const getAllPostsData = async () => {
	const fileNames = fs.readdirSync(postsDirectory)
	const allPostsData = fileNames.map((fileName) => {
		// Remove ".md" from file name to get slug
		const slug = fileName.replace(/\.md$/, '')

		// Read markdown file as string
		const fullPath = path.join(postsDirectory, fileName)
		const fileContents = fs.readFileSync(fullPath, 'utf8')

		// Use gray-matter to parse the post metadata section
		const matterResult: matter.GrayMatterFile<string> = matter([fileContents].join('\n'))

		// Combine the data with the slug
		return {
			slug,
			content: matterResult.content,
			...(matterResult.data as {
				title: string
				preface: string
				createdAt: string
				eyecatch: string
				category: string
				tags: string[]
				isDraft: boolean
			}),
		}
	})

	return allPostsData.filter((post) => {
		return !post.isDraft
	})
}

export const getSortedPostsData = async () => {
	const allPostsData = await getAllPostsData()

	// Sort posts by date
	return allPostsData.sort((a, b) => {
		if (a.createdAt < b.createdAt) {
			return 1
		} else {
			return -1
		}
	})
}

export const getLatestPostsData = async () => {
	const allPostsData = await getAllPostsData()

	// Sort posts by date
	const a = allPostsData.sort((a, b) => {
		if (a.createdAt < b.createdAt) {
			return 1
		} else {
			return -1
		}
	})
	return a.slice(0, 5)
}

export const getSortedPostsDataWithTag = async (tag: string) => {
	const allPostsData = await getAllPostsData()

	const filterPostsData = allPostsData.filter((post) => {
		if (post.tags.indexOf(tag) !== -1) {
			return post
		}
	})

	return filterPostsData.sort((a, b) => {
		if (a.createdAt < b.createdAt) {
			return 1
		} else {
			return -1
		}
	})
}

export async function getPostData(slug: string) {
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
			category: string
			tags: string[]
		}),
	}
}
