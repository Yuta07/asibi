import Image from 'next/image'
import Link from 'next/link'

import styles from './Header.module.scss'

export const Header = () => {
	return (
		<header className={styles.container}>
			<div className={styles.inner}>
				<Image
					src="/logo/logo.svg"
					alt="logo_yutaaaaa"
					width={32}
					height={32}
					layout="fixed"
					priority={true}
					quality={90}
				/>
				<Link href="/">
					<a className={styles.logoLink}>
						<h1 className={styles.title}>koppa</h1>
					</a>
				</Link>
			</div>
		</header>
	)
}
