import { GlobalHeader } from '@/components/common/Header'

import type { ReactNode } from 'react'

type PortfolioLayoutProps = {
	children: ReactNode
}

export default function PortfolioLayout({ children }: PortfolioLayoutProps) {
	return (
		<>
			<GlobalHeader />
			{children}
		</>
	)
}
