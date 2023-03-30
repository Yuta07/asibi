'use client'

import { ReactNode, FC } from 'react'

export const Strong: FC<{ children: ReactNode }> = ({ children }) => {
	return <strong>{children}</strong>
}
