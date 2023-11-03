import { ReactNode, FC } from 'react'

import s from './styles.module.css'

export const InlineCode: FC<{ children: ReactNode }> = ({ children }) => {
	return <code className={s.container}>{children}</code>
}
