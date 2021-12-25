import { ReactNode, VFC } from 'react'

export const Paragraph: VFC<{ children: ReactNode }> = ({ children }) => {
	return (
		<p className="container">
			{children}
			<style jsx>{`
				.container {
					margin-top: 20px;
					font-size: var(--font-size-m);
				}

				.container a {
					margin: 0 2px;
				}
			`}</style>
		</p>
	)
}
