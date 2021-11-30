import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'

import styles from './Header.module.scss'
import { ThemeSwitch } from './ThemeSwitch'

export const Header = () => {
	const router = useRouter()

	return (
		<header className={styles.header}>
			<Link href="/">
				<a className={styles.logo}>
					<Image quality={90} src="/logo.svg" alt="logo_yutaaaaa" width={48} height={48} />
				</a>
			</Link>
			<ul className={styles.nav}>
				<li className={styles.list}>
					<Link href="/">
						<a className={`${styles.anchor} ${router.pathname === '/' && styles.currentLink}`}>Blog</a>
					</Link>
				</li>
				<li className={styles.list}>
					<Link href="/resume">
						<a className={`${styles.anchor} ${router.pathname === '/resume' && styles.currentLink}`}>Resume</a>
					</Link>
				</li>
				<li className={styles.list}>
					<ThemeSwitch />
				</li>
			</ul>
		</header>
	)
}
