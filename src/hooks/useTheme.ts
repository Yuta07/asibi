import { useCallback, useEffect, useState } from 'react'

export const useTheme = () => {
	const [theme, setTheme] = useState<'light' | 'dark' | 'system' | null>(null)

	useEffect(() => {
		let initTheme: 'dark' | 'light'
		const storageTheme = window.localStorage.getItem('theme') as 'light' | 'dark' | 'system' | null
		if (storageTheme === 'system') {
			const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches
			initTheme = isDark ? 'dark' : 'light'
			setTheme('system')
		} else {
			initTheme = storageTheme || 'dark'
			setTheme(initTheme)
		}

		const root = window.document.documentElement
		root.setAttribute('data-theme', initTheme)
	}, []) // eslint-disable-line

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
