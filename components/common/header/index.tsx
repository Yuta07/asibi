import Image from 'next/image'
import Link from 'next/link'

import styles from './Header.module.scss'
import { ThemeButton } from './ThemeButton'

export const Header = () => {
	return (
		<header className={styles.container}>
			<Link href="/">
				<a className={styles.logo}>
					<Image quality={90} src="/logo/logo-circle.svg" alt="logo_yutaaaaa" width={40} height={40} />
					<h1 className={styles.title}>yutaaaaa</h1>
				</a>
			</Link>
			<ThemeButton />
		</header>
	)
}
