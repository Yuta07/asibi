import Link from 'next/link'

import s from './PostList.module.css'

type Props = {
	data: {
		slug: string
		content: string
		title: string
		preface: string
		createdAt: string
		eyecatch: string
		category: string
		tags: string[]
		isDraft: boolean
	}
}

export const PostList = ({ data }: Props) => {
	return (
		<Link key={data.slug} className={s.postLink} href={`/blog/${data.slug}`}>
			<div className={s.imageContainer}>
				<img alt={`${data.title} eyecatch`} className={s.postImage} height={80} src={data.eyecatch} width={80} />
			</div>
			<div className={s.tags}>
				{data.tags.map((tag) => {
					return (
						<p key={tag} className={s.tag}>
							{tag}
						</p>
					)
				})}
			</div>
			<h3 className={s.title}>{data.title}</h3>
			<small className={s.createdAt}>{data.createdAt.replace(/-/g, '.')}</small>
		</Link>
	)
}
