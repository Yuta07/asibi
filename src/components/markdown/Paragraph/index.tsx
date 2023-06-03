'use client'

import React, { ReactNode, FC } from 'react'

export const Paragraph: FC<{ children: ReactNode }> = ({ children }) => {
	return (
		<p className="container">
			{children}
			<style jsx>{`
				.container {
					margin-top: 20px;
					font-size: var(--font-rem-md);
					line-height: 1.6;
				}

				.container a {
					margin: 0 2px;
				}
			`}</style>
		</p>
	)
}

export const ElParagraph: FC<{ children: ReactNode }> = ({ children }) => {
	return (
		<div className="container">
			{children}
			<style jsx>{`
				.container {
					margin-top: 20px;
					font-size: var(--font-rem-md);
					line-height: 1.8;
				}

				.container a {
					margin: 0 2px;
				}
			`}</style>
		</div>
	)
}
