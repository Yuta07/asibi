import Link from 'next/link'

import { getLatestPostsData } from '@/lib/posts'

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
				<h2 className={s.hero}>New Posts</h2>
				<Link className={s.more} href="/blog">
					See more
				</Link>
			</div>
			<div className={s.scrollContainer}>
				{data.map((data) => {
					return (
						<Link key={data.slug} className={s.postLink} href={`/blog/${data.slug}`}>
							<div className={s.imageContainer}>
								<img
									alt={`${data.title} eyecatch`}
									className={s.postImage}
									height={80}
									src={data.eyecatch}
									width={80}
								/>
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
				})}
			</div>
		</div>
	)
}
