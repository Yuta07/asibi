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
			<h1 className={styles.title} data-testid="entry-title">
				{post.title}
			</h1>
			<div className={styles.info}>
				<time className={styles.date} data-testid="entry-createdAt">
					{dayjs(post.createdAt).format('MMM D, YYYY')}
				</time>
				<Link href={`/categories/${post.category}`}>
					<a className={styles[post.category]} data-testid="entry-category">
						{post.category}
					</a>
				</Link>
				<span className={styles.author}>
					By
					<a href="https://twitter.com/koppa_07" target="_blank" rel="noopener noreferrer">
						@koppa_07
					</a>
				</span>
			</div>
		</header>
	)
}
