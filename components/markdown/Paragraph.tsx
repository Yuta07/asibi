import { ReactNode, VFC } from 'react'

import styles from './Paragraph.module.scss'

export const Paragraph: VFC<{ children: ReactNode }> = ({ children }) => {
	return <p className={styles.paragraph}>{children}</p>
}
