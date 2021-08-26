import { ReactNode, VFC } from 'react'
import styles from './Delete.module.scss'

export const Delete: VFC<{ children: ReactNode }> = ({ children }) => {
	return <del className={styles.delete}>{children}</del>
}
