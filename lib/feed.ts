import fs from 'fs'
import { Feed } from 'feed'
import marked from 'marked'
import { getSortedPostsData } from './posts'

// ref: https://zenn.dev/catnose99/articles/c7754ba6e4adac
// ref: https://fwywd.com/tech/next-feed-rss-atom
// ref: https://phiilu.com/generate-rss-feeds-for-your-static-next-js-blog

export const generatedRssFeed = () => {
	// if (process.env.NODE_ENV === 'development') {
	// 	return
	// }

	const baseUrl = 'https://yutaaaaa.dev'

	const date = new Date()

	const author = {
		name: 'yutaaaaa',
		email: 'mono.12dev@gmail.com',
		link: 'https://yutaaaaa.dev',
	}

	const feed = new Feed({
		title: 'yutaaaaa | blog and resume by yutaka miyazaki.',
		description: "yutaka miyazaki's blog and resume",
		id: baseUrl,
		link: baseUrl,
		language: 'ja',
		image: `${baseUrl}/favicon.png`,
		copyright: `All rights reserved ${date.getFullYear()}, ${author.name}`,
		updated: date,
		feedLinks: {
			rss2: `${baseUrl}/rss/feed.xml`,
			json: `${baseUrl}/rss/feed.json`,
			atom: `${baseUrl}/rss/atom.xml`,
		},
		author: author,
	})

	const posts = getSortedPostsData()

	posts?.forEach((post) => {
		const url = `${baseUrl}/${post.id}`

		feed.addItem({
			title: post.title,
			description: post.excerpt,
			id: url,
			link: url,
			content: marked(post.content),
			date: new Date(post.date),
		})
	})

	fs.mkdirSync('./public/rss', { recursive: true })
	fs.writeFileSync('./public/rss/feed.xml', feed.rss2())
	fs.writeFileSync('./public/rss/atom.xml', feed.atom1())
	fs.writeFileSync('./public/rss/feed.json', feed.json1())
}
