import dayjs from 'dayjs'
import Link from 'next/link'

import styles from './Entry.module.scss'

type Props = {
	posts: {
		title: string
		preface: string
		attention: string
		createdAt: string
		category: string
		tags: string[]
		slug: string
		content: string
	}[]
}

export const Posts = ({ posts }: Props) => {
	return (
		<div className={styles.container}>
			{posts.map((post) => {
				return (
					<section key={post.slug} className={styles.post}>
						<Link href={`/entry/${post.slug}`}>
							<a className={styles.anchor}>
								<h2 className={styles.title}>{post.title}</h2>
							</a>
						</Link>
						<div className={styles.info}>
							<time className={styles.createdAt}>{dayjs(post.createdAt).format('MMM D, YYYY')}</time>
							<Link href={`/categories/${post.category}`}>
								<a className={styles[post.category]}>{post.category}</a>
							</Link>
						</div>
						<p className={styles.preface}>{post.preface}</p>
					</section>
				)
			})}
		</div>
	)
}
