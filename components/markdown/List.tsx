import { ReactNode, VFC } from 'react'
import styles from './List.module.scss'

type Props = {
	children: ReactNode
	ordered: boolean
	depth: number
}

export const List: VFC<Props> = ({ children, ordered, depth }) => {
	return ordered ? (
		<ol style={{ margin: depth > 0 ? `10px 0 0` : `15px 0` }} className={styles.ordered}>
			{children}
		</ol>
	) : (
		<ul style={{ margin: depth > 0 ? `10px 0 0` : `15px 0` }} className={styles.unOrdered}>
			{children}
		</ul>
	)
}
