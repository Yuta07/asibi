import { useEffect, useState } from 'react'

export const useDarkmode = () => {
	const [isDark, setIsDark] = useState<boolean>(true)

	useEffect(() => {
		document.body.classList.add('dark')
	}, [])

	useEffect(() => {
		if (isDark) {
			document.body.classList.add('dark')
		} else {
			document.body.classList.remove('dark')
		}
	}, [isDark])

	return { isDark, setIsDark }
}
