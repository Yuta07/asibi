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

export const Entries = ({ posts }: Props) => {
	return (
		<div className={styles.container}>
			{posts.map((post) => {
				return (
					<section key={post.slug} className={styles.post} data-testid="entry-section">
						<Link href={`/entry/${post.slug}`}>
							<a className={styles.anchor} data-testid="entry-slug-link">
								<h2 className={styles.title}>{post.title}</h2>
							</a>
						</Link>
						<div className={styles.info}>
							<time className={styles.createdAt}>{dayjs(post.createdAt).format('MMM D, YYYY')}</time>
							<Link href={`/categories/${post.category}`}>
								<a className={styles[post.category]} data-testid="entry-category-link">
									{post.category}
								</a>
							</Link>
						</div>
						<p className={styles.preface}>{post.preface}</p>
					</section>
				)
			})}
		</div>
	)
}
