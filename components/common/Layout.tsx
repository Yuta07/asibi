import { FC } from 'react'

import styles from './Layout.module.scss'
import { Footer } from './footer'
import { Header } from './header'

export const Layout: FC = ({ children }) => {
	return (
		<div className={styles.container}>
			<Header />
			<main className={styles.main}>{children}</main>
			<Footer />
		</div>
	)
}
