import Image from 'next/image'
import Link from 'next/link'

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
		<section className={s.container}>
			<h2 className={s.title}>Latest Posts</h2>
			<div className={s.content}>
				<ul className={s.postList}>
					{data.map((post) => {
						return (
							<li key={post.slug} className={s.postListItem}>
								<Link className={s.postListItemTitleAnchor} href={`/blog/${post.slug}`}>
									<h3 className={s.postListItemTitle}>{post.title}</h3>
								</Link>
								<div className={s.postListItemSub}>
									<div className={s.postListItemTagList}>
										{post.tags.map((tag) => {
											return (
												<span key={tag} className={s.postListItemTag}>
													{tag}
												</span>
											)
										})}
									</div>
									<time className={s.postListItemTime}>{post.createdAt}</time>
								</div>
							</li>
						)
					})}
				</ul>
				<p className={s.postsImage}>
					<Image alt="asibi's posts image" height={140} src="/assets/top/post-growth.webp" width={120} />
				</p>
			</div>
		</section>
	)
}
