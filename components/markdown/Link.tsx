import { ReactNode, VFC } from 'react'

import { EmbedLink } from '@components/EmbedLink'

type Props = {
	children: ReactNode
	href: string
}

export const Link: VFC<Props> = ({ children, href }) => {
	const isURLChildren = children?.toString().startsWith('http') || children?.toString().startsWith('https')

	if (isURLChildren) {
		return <EmbedLink href={href} />
	}

	return (
		<a href={href} target="_blank" rel="noopener noreferrer" className="container">
			{children}
			<style jsx>{`
				.container {
					margin: 0 4px;
					color: var(--color-main-blue);
				}

				.container:hover {
					text-decoration: underline;
				}
			`}</style>
		</a>
	)
}
