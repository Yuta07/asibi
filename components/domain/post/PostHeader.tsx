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
		id: string
		content: string
	}
}

export const PostHeader = ({ post }: Props) => {
	return (
		<header className={styles.container}>
			<h1 className={styles.title}>{post.title}</h1>
			<div className={styles.info}>
				<time className={styles.date}>{post.createdAt}</time>
				<Link href={`/categories/${post.category}`}>
					<a className={styles[post.category]}>{post.category}</a>
				</Link>
				<div className={styles.tags}>
					{post.tags.map((tag) => {
						return (
							<Link key={tag} href={`/tags/${tag}`}>
								<a className={styles.tag}>{tag}</a>
							</Link>
						)
					})}
				</div>
			</div>
		</header>
	)
}
