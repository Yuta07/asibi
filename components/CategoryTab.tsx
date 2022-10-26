import Link from 'next/link'
import { useRouter } from 'next/router'
import { SlBadge, SlCup, SlGraduation, SlRocket } from 'react-icons/sl'

import styles from './CategoryTab.module.scss'

const CATEGORY_TAB = [
	{ title: 'All', image: SlBadge, query: undefined },
	{ title: 'Tech', image: SlRocket, query: 'tech' },
	{ title: 'Ordinary', image: SlCup, query: 'ordinary' },
	{ title: 'Academic', image: SlGraduation, query: 'academic' },
] as const

export const CategoryTab = () => {
	const router = useRouter()
	const { query } = router

	return (
		<div className={styles.container}>
			{CATEGORY_TAB.map((category) => {
				const Icon = category.image

				return (
					<Link key={category.title} href={{ pathname: '/blog', query: category.query ? { tab: category.query } : {} }}>
						<a className={styles.category} data-testid="blog-category-link">
							<div
								className={query.tab === category.query ? styles.activeIconContainer : styles.nonActiveIconContainer}
							>
								<Icon size={24} className={styles.icon} />
							</div>
							<p className={styles.title}>{category.title}</p>
						</a>
					</Link>
				)
			})}
		</div>
	)
}
