import { FC } from 'react'

import { Footer } from '../Footer'
import { Header } from '../Header'

import styles from './Layout.module.scss'

export const Layout: FC = ({ children }) => {
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
