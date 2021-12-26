import React, { ReactNode, VFC } from 'react'

export const Paragraph: VFC<{ children: ReactNode }> = ({ children }) => {
	return (
		<p className="container">
			{children}
			<style jsx>{`
				.container {
					margin-top: 20px;
					font-size: var(--font-size-m);
					line-height: 1.6;
				}

				.container a {
					margin: 0 2px;
				}
			`}</style>
		</p>
	)
}

export const ElParagraph: VFC<{ children: ReactNode }> = ({ children }) => {
	return (
		<div className="container">
			{children}
			<style jsx>{`
				.container {
					margin-top: 20px;
					font-size: var(--font-size-m);
					line-height: 1.6;
				}

				.container a {
					margin: 0 2px;
				}
			`}</style>
		</div>
	)
}
