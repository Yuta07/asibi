import { ReactNode, VFC } from 'react'

import { EmbedLink } from '@components/EmbedLink'

type Props = {
	children: ReactNode
	href: string
}

export const Link: VFC<Props> = ({ children, href }) => {
	const isEmbedChidlren = children?.toString() === 'Embed'

	if (isEmbedChidlren) {
		return <EmbedLink href={href} />
	}

	const isURLChildren = children?.toString().startsWith('http') || children?.toString().startsWith('https')

	return (
		<a href={href} target="_blank" rel="noopener noreferrer" className={isURLChildren ? 'urlContainer' : 'container'}>
			{children}
			<style jsx>{`
				.container,
				.urlContainer {
					margin: 0 4px;
					color: var(--color-main-blue);
				}

				.container:hover,
				.urlContainer:hover {
					text-decoration: underline;
				}

				.container {
					margin: 0 4px;
				}
			`}</style>
		</a>
	)
}
