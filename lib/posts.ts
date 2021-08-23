import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const postsDirectory = path.join(process.cwd(), 'posts')

const firstFourLines = (file: any): string => {
	file.excerpt = file.content.split('\n').slice(0, 4).join(' ')

	return file.excerpt
}

export const getSortedPostsData = () => {
	// Get file names under /posts
	const fileNames = fs.readdirSync(postsDirectory)
	const allPostsData = fileNames.map((fileName) => {
		// Remove ".md" from file name to get id
		const id = fileName.replace(/\.md$/, '')

		// Read markdown file as string
		const fullPath = path.join(postsDirectory, fileName)
		const fileContents = fs.readFileSync(fullPath, 'utf8')

		// Use gray-matter to parse the post metadata section
		const matterResult: matter.GrayMatterFile<string> = matter([fileContents].join('\n'), { excerpt: firstFourLines })

		// Combine the data with the id
		return {
			id,
			excerpt: matterResult.excerpt,
			...(matterResult.data as { date: string; title: string; spoiler: string; image: string }),
		}
	})

	// Sort posts by date
	return allPostsData.sort((a, b) => {
		if (a.date < b.date) {
			return 1
		} else {
			return -1
		}
	})
}

export function getAllPostIds() {
	const fileNames = fs.readdirSync(postsDirectory)
	return fileNames.map((fileName) => {
		return {
			params: {
				id: fileName.replace(/\.md$/, ''),
			},
		}
	})
}

export async function getPostData(id: string) {
	const markdownWithMetadata = fs.readFileSync(path.join(postsDirectory, `${id}.md`)).toString()
	const { data, content } = matter(markdownWithMetadata)

	return {
		id,
		content,
		data,
		...(data.data as { date: string; title: string; spoiler: string; quickword: string; image: string }),
	}
}
