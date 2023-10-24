import Link from 'next/link'

import { Post } from '@/lib/posts'

import s from './styles.module.css'

type Props = {
	data: Omit<Post, 'content' | 'eyecatch'>
}

export const PostListItem = ({ data }: Props) => {
	return (
		<article className={s.article}>
			<Link className={s.postLink} href={`/blog/${data.slug}`}>
				<h3 className={s.title}>{data.title}</h3>
				<p className={s.preface}>{data.preface}</p>
				<div className={s.subMeta}>
					<span className={s.more}>Read more →</span>
					<time className={s.createdAt}>{data.createdAt.replace(/-/g, '.')}</time>
				</div>
			</Link>
		</article>
	)
}
