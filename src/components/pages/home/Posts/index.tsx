import Link from 'next/link'

import { PostListItem } from '@/components/ui/PostListItem'
import { generatedRssFeed } from '@/lib/feed'
import { getLatestPostsData } from '@/lib/posts'

import s from './styles.module.css'

function getLatestPosts() {
	const res = getLatestPostsData()
	generatedRssFeed()

	return res
}

export default function Posts() {
	const data = getLatestPosts()

	return (
		<div>
			<div className={s.postsHeader}>
				<h2 className={s.hero}>Latest Posts</h2>
				<Link className={s.moreLink} href="/blog">
					View more posts<span>→</span>
				</Link>
			</div>
			<div className={s.postsContainer}>
				{data.map((data) => {
					return <PostListItem key={data.slug} data={data} />
				})}
			</div>
		</div>
	)
}
