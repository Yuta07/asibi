import dayjs from 'dayjs'
import Link from 'next/link'

import styles from './PostHeader.module.scss'

type Props = {
	post: {
		title: string
		preface: string
		createdAt: string
		updatedAt: string
		category: string
		tags: string[]
		slug: string
		content: string
	}
}

export const PostHeader = ({ post }: Props) => {
	return (
		<header className={styles.container}>
			<h1 className={styles.title}>{post.title}</h1>
			<div className={styles.info}>
				<time className={styles.date}>{dayjs(post.createdAt).format('MMM D, YYYY')}</time>
				<Link href={`/categories/${post.category}`}>
					<a className={styles[post.category]}>{post.category}</a>
				</Link>
				<span className={styles.author}>
					By
					<a href="https://github.com/Yuta07" target="_blank" rel="noopener noreferrer">
						@yutaaaaa___
					</a>
				</span>
			</div>
		</header>
	)
}
