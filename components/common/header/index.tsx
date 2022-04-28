import Image from 'next/image'
import Link from 'next/link'

import styles from './Header.module.scss'

export const Header = () => {
	return (
		<header className={styles.container}>
			<div className={styles.inner}>
				<Image quality={90} src="/logo/logo.svg" alt="logo_yutaaaaa" width={32} height={32} priority={true} />
				<Link href="/">
					<a className={styles.logoLink}>
						<h1 className={styles.title}>zakimii</h1>
					</a>
				</Link>
			</div>
		</header>
	)
}
