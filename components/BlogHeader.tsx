import dayjs from 'dayjs'
import Image from 'next/future/image'

import styles from './BlogHeader.module.scss'

type Props = {
	post: {
		title: string
		preface: string
		createdAt: string
		eyecatch: string
		category: string
		tags: string[]
		slug: string
		content: string
	}
}

export const BlogHeader = ({ post }: Props) => {
	return (
		<header className={styles.container}>
			<div className={styles.imageContainer}>
				<Image
					src={post.eyecatch}
					alt={post.title}
					width={80}
					height={80}
					className={styles.eyecatch}
					data-testid="blog-eyecatch"
				/>
			</div>
			<div className={styles.inner}>
				<h1 className={styles.title} data-testid="blog-title">
					{post.title}
				</h1>
				<div className={styles.info}>
					<p className={styles[post.category]} data-testid="blog-category">
						{post.category}
					</p>
					<time className={styles.date} data-testid="blog-createdAt">
						{dayjs(post.createdAt).format('MMM D, YYYY')}
					</time>
				</div>
			</div>
		</header>
	)
}
