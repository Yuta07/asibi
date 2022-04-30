import { FC } from 'react'

import { Header } from '@/components/common/Header'

import styles from './Layout.module.scss'

export const LayoutWithHeader: FC = ({ children }) => {
	return (
		<div className="container">
			<Header />
			<main className={styles.main}>{children}</main>
			<footer className="footer">
				<p className="copyright">©{new Date().getFullYear()}, zakimii</p>
			</footer>
			<style jsx>{`
				.container {
					min-height: 100vh;
				}

				.footer {
					max-width: 720px;
					margin: 0 auto;
					margin-top: 80px;
					padding: 0 20px;
					display: flex;
					flex-direction: column;
					align-items: center;
					justify-content: center;
					position: sticky;
					top: 100vh;
				}

				.copyright {
					width: 100%;
					padding: 20px 0;
					border-top: var(--border-normal);
					font-size: var(--font-size-xs);
					letter-spacing: 0;
					text-align: center;
				}
			`}</style>
		</div>
	)
}
