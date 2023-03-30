import { PostList } from '@/components/ui/PostList'
import { getSortedPostsData } from '@/lib/posts'

import s from './Posts.module.css'

type Props = {
	tag: string | undefined
}

function getPosts(tag: string | undefined) {
	const res = getSortedPostsData(tag)

	return res
}

export const Posts = ({ tag }: Props) => {
	const data = getPosts(tag)

	return (
		<section className={s.container}>
			<div className={s.header}>
				<h2 className={s.title}>{tag ? tag : 'Posts'}</h2>
				<p>
					<strong className={s.count}>{data.length}</strong>Article{data.length > 1 && 's'}
				</p>
			</div>
			<div className={s.list}>
				{data.map((data) => {
					return <PostList key={data.slug} data={data} />
				})}
			</div>
		</section>
	)
}
