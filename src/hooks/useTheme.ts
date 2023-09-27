import { useCallback, useState } from 'react'

export const useTheme = () => {
	const [theme, setTheme] = useState<'light' | 'dark' | null>(null)

	// useEffect(() => {
	// 	const storageTheme = window.localStorage.getItem('theme') as 'light' | 'dark' | null
	// 	const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches
	// 	const initTheme = storageTheme ? storageTheme : isDark ? 'dark' : 'light'
	// 	const root = window.document.documentElement

	// 	root.setAttribute('data-theme', initTheme)
	// 	setTheme(initTheme)
	// }, []) // eslint-disable-line

	const handleChangeTheme = useCallback(() => {
		const storageTheme = window.localStorage.getItem('theme') as 'light' | 'dark' | null
		const newTheme = storageTheme === 'dark' || storageTheme === null ? 'light' : 'dark'
		const root = window.document.documentElement

		root.setAttribute('data-theme', newTheme)
		window.localStorage.setItem('theme', newTheme)
		setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'))
	}, [])

	return { theme, handleChangeTheme }
}
