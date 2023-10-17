import { Header } from '@/components/common/Header'
import s from './styles.module.css'

import type { ReactNode } from 'react'

type PortfolioLayoutProps = {
	children: ReactNode
}

export default function PortfolioLayout({ children }: PortfolioLayoutProps) {
	return (
		<>
			<div className={s.header}>
				<Header />
			</div>
			<main className={s.container}>{children}</main>
		</>
	)
}
