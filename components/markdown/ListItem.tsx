import { ReactNode, VFC } from 'react'
import styles from './ListItem.module.scss'

type Props = {
	children: ReactNode
	ordered: boolean
	index: number
}

export const ListItem: VFC<Props> = ({ children, ordered }) => {
	return <li className={ordered ? styles.orderedList : styles.unOrderedList}>{children}</li>
}
