import Image from 'next/future/image'
import Link from 'next/link'
import { useRouter } from 'next/router'

import styles from './Header.module.scss'
import { Nav } from './Nav'

const NON_BLUR_PATHS = ['/', '/about']

export const Header = () => {
	const router = useRouter()

	return (
		<header className={styles.container}>
			{!NON_BLUR_PATHS.includes(router.pathname) && <div className={styles.bgBlur} />}
			<div className={styles.inner}>
				<Link href="/">
					<a className={styles.logo}>
						<Image src="/logo/logo.svg" alt="yutawo_logo" width={48} height={40} priority />
					</a>
				</Link>
				<h1 className={styles.title}>{router.pathname.split('/').at(1)?.toUpperCase() || 'HOME'}</h1>
				<Nav />
			</div>
		</header>
	)
}
