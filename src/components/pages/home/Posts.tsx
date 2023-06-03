import { PostList } from '@/components/ui/PostList'
import { generatedRssFeed } from '@/lib/feed'
import { getLatestPostsData } from '@/lib/posts'

import s from './Posts.module.css'

function getLatestPosts() {
	const res = getLatestPostsData()
	generatedRssFeed()

	return res
}

export default function Posts() {
	const data = getLatestPosts()

	return (
		<div>
			<h2 className={s.hero}>Latest Posts</h2>
			<div className={s.postsContainer}>
				{data.map((data) => {
					return <PostList key={data.slug} data={data} />
				})}
			</div>
		</div>
	)
}
