import { ReactNode } from 'react'

import { Footer } from '@/components/common/Footer'
import { Header } from '@/components/common/Header'

import styles from './Layout.module.scss'

export const Layout = ({ children }: { children: ReactNode }) => {
	return (
		<>
			<Header />
			<div className={styles.main}>{children}</div>
			<Footer />
		</>
	)
}
