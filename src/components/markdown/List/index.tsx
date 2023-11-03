import { ReactNode, FC } from 'react'

import s from './styles.module.css'

type Props = {
	children: ReactNode
	ordered: boolean
	depth: number
}

export const List: FC<Props> = ({ children, ordered, depth }) => {
	return ordered ? (
		<ol className={s.orderedContainer} data-testid="markdown-ordered-list" data-child={depth > 0}>
			{children}
		</ol>
	) : (
		<ul className={s.unOrderedContainer} data-testid="markdown-unOrdered-list" data-child={depth > 0}>
			{children}
		</ul>
	)
}
