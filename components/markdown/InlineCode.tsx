import { ReactNode, VFC } from 'react'

export const InlineCode: VFC<{ children: ReactNode }> = ({ children }) => {
	return (
		<code className="container">
			{children}
			<style jsx>{`
				.container {
					color: var(--color-primary);
					background: #053959;
					padding: 2px 8px;
					border-radius: var(--line-radius);
				}
			`}</style>
		</code>
	)
}
