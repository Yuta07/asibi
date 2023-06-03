'use client'

import { createContext, ReactNode, useContext } from 'react'

import { useTheme } from '../hooks/useTheme'

type DispatchType = {
	handleChangeTheme: () => void
}

export const ThemeStateContext = createContext<{ state: 'light' | 'dark' }>({ state: 'dark' })
export const ThemeDispatchContext = createContext<DispatchType>({ handleChangeTheme: () => {} })

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
	const { theme, handleChangeTheme } = useTheme()

	if (!theme) return <div style={{ visibility: 'hidden' }}>{children}</div>

	return (
		<ThemeStateContext.Provider value={{ state: theme }}>
			<ThemeDispatchContext.Provider value={{ handleChangeTheme }}>{children}</ThemeDispatchContext.Provider>
		</ThemeStateContext.Provider>
	)
}

export function useThemeState() {
	return useContext(ThemeStateContext)
}

export function useThemeDispatch() {
	return useContext(ThemeDispatchContext)
}
