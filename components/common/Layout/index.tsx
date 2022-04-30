import { FC, ReactNode } from 'react'

import { Footer } from '@/components/common/Footer'
import { Header } from '@/components/common/Header'

import styles from './Layout.module.scss'

export const Layout: FC<{ children: ReactNode }> = ({ children }) => {
	return (
		<div className="container">
			<Header />
			<main className={styles.main}>{children}</main>
			<Footer />
			<style jsx>{`
				.container {
					min-height: 100vh;
				}
			`}</style>
		</div>
	)
}
