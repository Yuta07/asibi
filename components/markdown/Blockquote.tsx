import { ReactNode, VFC } from 'react'
import styles from './Blockquote.module.scss'

export const Blockquote: VFC<{ children: ReactNode }> = ({ children }) => {
	return <blockquote className={styles.blockquote}>{children}</blockquote>
}
