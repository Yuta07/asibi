import { FC } from 'react'

import styles from './Layout.module.scss'
import { Footer } from './footer'
import { Header } from './header'

export const Layout: FC = ({ children }) => {
	return (
		<>
			<Header />
			<main className={styles.main}>{children}</main>
			<Footer />
		</>
	)
}
