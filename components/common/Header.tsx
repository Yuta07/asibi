import Image from 'next/image'
import { useRouter } from 'next/router'
import styles from './Header.module.scss'

export const Header = () => {
	const router = useRouter()

	return (
		<header className={styles.header}>
			<Image src="/logo.svg" alt="logo_yutaaaaa" width={48} height={48} />
			<ul className={styles.nav}>
				<li className={styles.list}>
					<a href="/" className={`${styles.anchor} ${router.pathname === '/' && styles.currentLink}`}>
						Blog
					</a>
				</li>
				<li className={styles.list}>
					<a href="/resume" className={`${styles.anchor} ${router.pathname === '/resume' && styles.currentLink}`}>
						Resume
					</a>
				</li>
			</ul>
		</header>
	)
}
