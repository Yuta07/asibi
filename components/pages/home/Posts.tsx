import { PostList } from '@/components/ui/PostList'
import { getLatestPostsData } from '@/lib/posts'

import s from './Posts.module.css'

async function getData() {
	const res = await getLatestPostsData()

	return res
}

export default async function Posts() {
	const data = await getData()

	return (
		<section className={s.container}>
			<h2 className={s.hero}>Recently Posted</h2>
			<div className={s.postsContainer}>
				{data.map((data) => {
					return <PostList key={data.slug} data={data} />
				})}
			</div>
		</section>
	)
}
