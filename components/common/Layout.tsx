import { FC } from 'react'

import styles from './Layout.module.scss'
import { Footer } from '@components/common/Footer'
import { Header } from '@components/common/Header'

export const Layout: FC = ({ children }) => {
	return (
		<>
			<Header />
			<main className={styles.main}>{children}</main>
			<Footer />
		</>
	)
}
