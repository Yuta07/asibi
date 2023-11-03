import { ReactNode, FC } from 'react'

import styles from './styles.module.css'

type Props = {
	children: ReactNode
	ordered: boolean
	index: number
}

export const ListItem: FC<Props> = ({ children, ordered }) => {
	return <li className={ordered ? styles.orderedList : styles.unOrderedList}>{children}</li>
}
