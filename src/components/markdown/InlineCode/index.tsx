'use client'

import { ReactNode, FC } from 'react'

export const InlineCode: FC<{ children: ReactNode }> = ({ children }) => {
	return (
		<code className="container">
			{children}
			<style jsx>{`
				.container {
					padding: 2px 8px;
					border-radius: 8px;
					color: var(--text);
					background: #053959;
					line-height: 2;
				}
			`}</style>
		</code>
	)
}
