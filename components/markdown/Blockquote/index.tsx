import { ReactNode, FC } from 'react'

import styles from './Blockquote.module.scss'

export const Blockquote: FC<{ children: ReactNode }> = ({ children }) => {
	return <blockquote className={styles.container}>{children}</blockquote>
}
