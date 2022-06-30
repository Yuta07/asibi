import { ReactNode, FC } from 'react'

export const InlineCode: FC<{ children: ReactNode }> = ({ children }) => {
	return (
		<code className="container">
			{children}
			<style jsx>{`
				.container {
					color: var(--color-text);
					background: #053959;
					padding: 2px 8px;
					border-radius: var(--line-radius);
				}
			`}</style>
		</code>
	)
}