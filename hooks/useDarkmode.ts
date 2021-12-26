import { useEffect, useState } from 'react'

export const useDarkmode = () => {
	const [isDark, setIsDark] = useState<boolean>(true)

	useEffect(() => {
		if (isDark) {
			document.body.classList.remove('light')
		} else {
			document.body.classList.add('light')
		}
	}, [isDark])

	return { isDark, setIsDark }
}
