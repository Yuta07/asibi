import { useCallback, useEffect, useState } from 'react'

export const useTheme = () => {
	const [theme, setTheme] = useState<'light' | 'dark' | 'system' | null>(
		(window.localStorage.getItem('theme') as 'light' | 'dark' | 'system' | null) || 'system'
	)

	useEffect(() => {
		const storageTheme = window.localStorage.getItem('theme') as 'light' | 'dark' | 'system' | null
		const root = window.document.documentElement

		if (storageTheme === 'system') {
			const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches
			setTheme(isDark ? 'dark' : 'light')
			root.setAttribute('data-theme', isDark ? 'dark' : 'light')
		} else {
			setTheme(storageTheme || 'dark')
			root.setAttribute('data-theme', storageTheme || 'dark')
		}
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
