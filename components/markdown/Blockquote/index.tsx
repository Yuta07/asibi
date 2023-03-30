import { ReactNode, FC } from 'react'

import styles from './Blockquote.module.css'

export const Blockquote: FC<{ children: ReactNode }> = ({ children }) => {
	return <blockquote className={styles.container}>{children}</blockquote>
}
