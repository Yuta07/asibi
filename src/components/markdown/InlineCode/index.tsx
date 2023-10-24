'use client'

import { ReactNode, FC } from 'react'

export const InlineCode: FC<{ children: ReactNode }> = ({ children }) => {
	return (
		<code className="container">
			{children}
			<style jsx>{`
				.container {
					padding: 2px 8px;
					border-radius: var(--rounded-base);
					color: var(--surface);
					background: var(--gray);
					line-height: 2;
				}
			`}</style>
		</code>
	)
}
