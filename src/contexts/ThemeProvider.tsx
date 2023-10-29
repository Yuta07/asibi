'use client'

import { createContext, ReactNode, useContext } from 'react'

import { useTheme } from '../hooks/useTheme'

type DispatchType = {
	handleChangeTheme: (theme: 'light' | 'dark' | 'system') => void
}

export const ThemeStateContext = createContext<{ state: 'light' | 'dark' | 'system' | null }>({ state: null })
export const ThemeDispatchContext = createContext<DispatchType>({ handleChangeTheme: () => {} })

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
	const { theme, handleChangeTheme } = useTheme()

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
