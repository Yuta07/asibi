import { ReactNode, VFC } from 'react'

type Props = {
	children: ReactNode
	href: string
}

export const Link: VFC<Props> = ({ children, href }) => {
	const isURLChildren = children?.toString().startsWith('http') || children?.toString().startsWith('https')

	return (
		<a href={href} target="_blank" rel="noopener noreferrer" className={isURLChildren ? 'urlContainer' : 'container'}>
			{children}
			<style jsx>{`
				.container,
				.urlContainer {
					font-size: 16px;
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
