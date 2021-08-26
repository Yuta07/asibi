import { ReactNode, VFC } from 'react'

export const Strong: VFC<{ children: ReactNode }> = ({ children }) => {
	return <strong>{children}</strong>
}
