import { ReactNode, VFC } from 'react'
import styles from './Link.module.scss'

type Props = {
	children: ReactNode
	href: string
}

export const Link: VFC<Props> = ({ children, href }) => {
	return (
		<a href={href} target="_blank" rel="noopener noreferrer" className={styles.anchor}>
			{children}
		</a>
	)
}
