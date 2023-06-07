import { PageTitle } from '@/components/ui/PageTitle'
import { PostListItem } from '@/components/ui/PostListItem'
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
				<PageTitle>{tag ? tag : 'Posts'}</PageTitle>
				<p>
					<strong className={s.count}>{data.length}</strong>Article{data.length > 1 && 's'}
				</p>
			</div>
			<div className={s.list}>
				{data.map((data) => {
					return <PostListItem key={data.slug} data={data} />
				})}
			</div>
		</section>
	)
}
