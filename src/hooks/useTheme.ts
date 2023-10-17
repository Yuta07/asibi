import { useCallback, useEffect, useState } from 'react'

export const useTheme = () => {
	const [theme, setTheme] = useState<'light' | 'dark' | 'system' | null>(null)

	useEffect(() => {
		const storageTheme = window.localStorage.getItem('theme') as 'light' | 'dark' | 'system' | null
		const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches
		const initTheme = storageTheme ? storageTheme : isDark ? 'dark' : 'light'
		const root = window.document.documentElement

		root.setAttribute('data-theme', initTheme)
		setTheme(initTheme)
	}, []) // eslint-disable-line

	const handleChangeTheme = useCallback((theme: 'light' | 'dark' | 'system') => {
		const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches
		const newTheme = theme === 'system' ? (isDark ? 'dark' : 'light') : theme
		const root = window.document.documentElement

		root.setAttribute('data-theme', newTheme)
		window.localStorage.setItem('theme', newTheme)
		setTheme(newTheme)
	}, [])

	return { theme, handleChangeTheme }
}
