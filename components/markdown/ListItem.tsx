import { ReactNode, VFC } from 'react'
import styles from './ListItem.module.scss'

type Props = {
	children: ReactNode
	ordered: boolean
	tight: boolean
	index: number
}

export const ListItem: VFC<Props> = ({ children, ordered, tight }) => {
	return <li className={ordered && tight ? styles.orderedList : styles.unOrderedList}>{children}</li>
}
