import { ReactNode, FC } from 'react'

import { EmbedLink } from '../EmbedLink'

import s from './styles.module.css'

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
		<a className={s.container} data-testid="markdown-link" href={href} rel="noopener noreferrer" target="_blank">
			{children}
		</a>
	)
}
