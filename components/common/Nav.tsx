import Link from 'next/link'
import { useRouter } from 'next/router'

import styles from './Nav.module.scss'

export const Nav = () => {
	const router = useRouter()
	const { pathname } = router

	return (
		<nav className={styles.container}>
			<Link href="/about">
				<a className={pathname === '/about' ? styles.activeLink : styles.navLink}>About</a>
			</Link>
			<Link href="/blog">
				<a className={pathname === '/blog' ? styles.activeLink : styles.navLink}>Blog</a>
			</Link>
		</nav>
	)
}
