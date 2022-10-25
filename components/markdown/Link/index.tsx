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
		<a href={href} target="_blank" rel="noopener noreferrer" className="container" data-testid="markdown-link">
			{children}
			<style>{`
				.container {
					margin: 0 4px;
					color: var(--color-text);
				}

				.container:hover {
					text-decoration: underline;
				}
			`}</style>
		</a>
	)
}
