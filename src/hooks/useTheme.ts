'use client'

import { useCallback, useEffect, useState } from 'react'

export const useTheme = () => {
	const [theme, setTheme] = useState<'light' | 'dark' | 'system' | null>(null)

	// ref: https://github.com/pacocoursey/next-themes/blob/main/packages/next-themes/src/index.tsx
	// ref: https://web.dev/patterns/theming/theme-switch#js
	// ローカルストレージのthemeがsystemの場合だけ動く
	// OSのsystemテーマを変更したことを検知するため
	const handleMediaQuery = useCallback((e: MediaQueryListEvent | MediaQueryList) => {
		if (window.localStorage.theme === 'system') {
			if (e.matches) {
				document.documentElement.setAttribute('data-theme', 'dark')
			} else {
				document.documentElement.setAttribute('data-theme', 'light')
			}
		}
	}, [])

	useEffect(() => {
		window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', handleMediaQuery)

		return () => {
			window.matchMedia('(prefers-color-scheme: dark)').removeEventListener('change', handleMediaQuery)
		}
	}, [handleMediaQuery])

	useEffect(() => {
		const initTheme = window.localStorage.getItem('theme') as 'light' | 'dark' | 'system' | null
		if (!initTheme) {
			window.localStorage.setItem('theme', 'system')
		}
		setTheme(initTheme || 'system')
	}, [])

	const handleChangeTheme = useCallback((value: 'light' | 'dark' | 'system') => {
		const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches
		const newTheme = value === 'system' ? (isDark ? 'dark' : 'light') : value
		const root = window.document.documentElement

		window.localStorage.setItem('theme', value)
		root.setAttribute('data-theme', newTheme)
		setTheme(value)
	}, [])

	return { theme, handleChangeTheme }
}
