import { ReactNode, FC } from 'react'

export const InlineCode: FC<{ children: ReactNode }> = ({ children }) => {
	return (
		<code className="container">
			{children}
			<style>{`
				.container {
					padding: 2px 8px;
					border-radius: var(--line-radius-sm);
					color: var(--color-text);
					background: #053959;
					line-height: 2;
				}
			`}</style>
		</code>
	)
}
