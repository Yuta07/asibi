import s from './styles.module.css'

import type { ReactNode } from 'react'

type PageTitleProps = {
	children: ReactNode
}

export const PageTitle = ({ children }: PageTitleProps) => {
	return <h1 className={s.heading}>{children}</h1>
}
