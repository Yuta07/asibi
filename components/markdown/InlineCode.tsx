import { ReactNode, VFC } from 'react'
import styles from './InlineCode.module.scss'

export const InlineCode: VFC<{ children: ReactNode }> = ({ children }) => {
	return <code className={styles.code}>{children}</code>
}
