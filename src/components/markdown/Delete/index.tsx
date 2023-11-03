import { ReactNode, FC } from 'react'

import s from './styles.module.css'

export const Delete: FC<{ children: ReactNode }> = ({ children }) => {
	return <del className={s.container}>{children}</del>
}
