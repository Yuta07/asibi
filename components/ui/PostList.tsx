import Link from 'next/link'

import { Post } from '@/lib/posts'

import s from './PostList.module.css'

type Props = {
	data: Omit<Post, 'content'>
}

export const PostList = ({ data }: Props) => {
	return (
		<article className={s.article}>
			<Link className={s.postLink} href={`/blog/${data.slug}`}>
				<div className={s.imageContainer}>
					<img alt={`${data.title} eyecatch`} className={s.postImage} height={56} src={data.eyecatch} width={56} />
				</div>
				<div className={s.content}>
					<h3 className={s.title}>{data.title}</h3>
					<p className={s.preface}>{data.preface}</p>
					<div className={s.subMeta}>
						<div className={s.tags}>
							{data.tags.map((tag) => {
								return (
									<p key={tag} className={s.tag}>
										{tag}
									</p>
								)
							})}
						</div>
						<small className={s.createdAt}>{data.createdAt.replace(/-/g, '.')}</small>
					</div>
				</div>
			</Link>
		</article>
	)
}
