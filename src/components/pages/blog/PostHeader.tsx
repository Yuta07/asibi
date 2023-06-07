import s from './PostHeader.module.css'

import type { Post } from '@/lib/posts'

type Props = { post: Omit<Post, 'preface'> }

export const PostHeader = ({ post }: Props) => {
	return (
		<header className={s.header}>
			<img alt={`${post.title}'s eyecatch`} className={s.eyecatch} height={60} src={post.eyecatch} width={60} />
			<h1 className={s.title}>{post.title}</h1>
			<div className={s.sub}>
				<div className={s.tags}>
					{post.tags.map((tag) => {
						return (
							<p key={tag} className={s.tag}>
								{tag}
							</p>
						)
					})}
				</div>
				<small className={s.createdAt}>{post.createdAt.replace(/-/g, '.')}</small>
			</div>
		</header>
	)
}
