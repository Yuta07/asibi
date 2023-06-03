'use client'

import { ReactNode, FC } from 'react'

import { EmbedLink } from '../EmbedLink'

type Props = {
	children: ReactNode
	href: string
}

export const Link: FC<Props> = ({ children, href }) => {
	const isURLChildren = children?.toString().startsWith('http') || children?.toString().startsWith('https')

	if (isURLChildren) {
		return <EmbedLink href={href} />
	}

	return (
		<a className="container" data-testid="markdown-link" href={href} rel="noopener noreferrer" target="_blank">
			{children}
			<style jsx>{`
				.container {
					margin: 0 4px;
					color: var(--text);
				}

				.container:hover {
					text-decoration: underline;
				}
			`}</style>
		</a>
	)
}
