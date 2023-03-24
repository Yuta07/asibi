import Link from 'next/link'

import { getLatestPostsData } from '@/lib/posts'

import { PostList } from './PostList'
import s from './Posts.module.css'

async function getData() {
	const res = await getLatestPostsData()

	return res
}

export default async function Posts() {
	const data = await getData()

	return (
		<div className={s.container}>
			<div className={s.header}>
				<h2 className={s.hero}>Recently Posted</h2>
				<Link className={s.more} href="/blog">
					See more
				</Link>
			</div>
			<div className={s.scrollContainer}>
				{data.map((data) => {
					return <PostList key={data.slug} data={data} />
				})}
			</div>
		</div>
	)
}
