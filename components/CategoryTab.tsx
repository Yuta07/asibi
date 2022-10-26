import Link from 'next/link'
import { useRouter } from 'next/router'

import styles from './CategoryTab.module.scss'

const CATEGORY_TAB = [
	{ title: 'All', query: undefined },
	{ title: 'Tech', query: 'tech' },
	{ title: 'Ordinary', query: 'ordinary' },
] as const

export const CategoryTab = () => {
	const router = useRouter()
	const { query } = router

	return (
		<div className={styles.container}>
			{CATEGORY_TAB.map((category) => {
				return (
					<Link key={category.title} href={{ pathname: '/blog', query: category.query ? { tab: category.query } : {} }}>
						<a
							className={query.tab === category.query ? styles.activeCategory : styles.category}
							data-testid="blog-category-link"
						>
							{category.title}
						</a>
					</Link>
				)
			})}
		</div>
	)
}
