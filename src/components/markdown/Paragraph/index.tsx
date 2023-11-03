import { ReactNode, FC } from 'react'

import s from './styles.module.css'

export const Paragraph: FC<{ children: ReactNode }> = ({ children }) => {
	return <p className={s.container}>{children}</p>
}

export const ElParagraph: FC<{ children: ReactNode }> = ({ children }) => {
	return <div className={s.elContainer}>{children}</div>
}
