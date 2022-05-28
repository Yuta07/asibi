import dayjs from 'dayjs'
import Link from 'next/link'

import styles from './PostHeader.module.scss'

type Props = {
	post: {
		title: string
		preface: string
		attention: string
		createdAt: string
		category: string
		tags: string[]
		slug: string
		content: string
	}
}

export const PostHeader = ({ post }: Props) => {
	return (
		<header className={styles.container}>
			<h1 data-test-id="entry-title" className={styles.title}>
				{post.title}
			</h1>
			<div className={styles.info}>
				<time data-test-id="entry-createdAt" className={styles.date}>
					{dayjs(post.createdAt).format('MMM D, YYYY')}
				</time>
				<Link href={`/categories/${post.category}`}>
					<a data-test-id="entry-category" className={styles[post.category]}>
						{post.category}
					</a>
				</Link>
				<span className={styles.author}>
					By
					<a href="https://twitter.com/zakimii07" target="_blank" rel="noopener noreferrer">
						@zakimii07
					</a>
				</span>
			</div>
		</header>
	)
}
