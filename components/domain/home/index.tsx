import Link from 'next/link'

import styles from './Home.module.scss'

type Props = {
	posts: {
		title: string
		preface: string
		createdAt: string
		updatedAt: string
		category: string
		tags: string[]
		id: string
		content: string
	}[]
}

export const Home = ({ posts }: Props) => {
	return (
		<div className={styles.container}>
			{posts.map((data) => {
				return (
					<section key={data.id} className={styles.post}>
						<Link href={`/${data.id}`}>
							<a className={styles.anchor}>
								<h2 className={styles.title}>{data.title}</h2>
							</a>
						</Link>
						<div className={styles.info}>
							<time className={styles.createdAt}>{data.createdAt}</time>
							<Link href={`/categories/${data.category}`}>
								<a className={styles[data.category]}>{data.category}</a>
							</Link>
							<div className={styles.tags}>
								{data.tags.map((tag) => {
									const lowerTag = tag.charAt(0).toLowerCase() + tag.slice(1)
									const regTag = lowerTag.replace('.', '-')

									return (
										<Link key={tag} href={`/tags/${regTag}`}>
											<a className={styles.tag}>#{tag}</a>
										</Link>
									)
								})}
							</div>
						</div>
						<p className={styles.preface}>{data.preface}</p>
					</section>
				)
			})}
		</div>
	)
}
