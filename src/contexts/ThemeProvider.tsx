'use client'

import { createContext, memo, ReactNode, useContext } from 'react'

import { useTheme } from '../hooks/useTheme'

type DispatchType = {
	handleChangeTheme: (theme: 'light' | 'dark' | 'system') => void
}

export const ThemeStateContext = createContext<{ state: 'light' | 'dark' | 'system' | null }>({ state: null })
export const ThemeDispatchContext = createContext<DispatchType>({ handleChangeTheme: () => {} })

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
	const { theme, handleChangeTheme } = useTheme()

	// テーマのちらつき防止
	const ThemeScript = memo(
		() => {
			return (
				<script
					dangerouslySetInnerHTML={{
						__html: `
						const storageTheme = window.localStorage.getItem('theme')
            const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches
            const root = window.document.documentElement

            root.setAttribute('data-theme', storageTheme === 'system' ? (isDark ? 'dark' : 'light') : storageTheme || 'dark')
			`,
					}}
				/>
			)
		},
		() => true
	)

	return (
		<ThemeStateContext.Provider value={{ state: theme }}>
			<ThemeScript />
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
