import { useCallback, useEffect, useState } from 'react'
import styles from './ThemeSwitch.module.scss'

export const ThemeSwitch = () => {
	const [isDark, setIsDark] = useState<boolean>(false)

	useEffect(() => {
		if (isDark) {
			document.body.classList.add('dark')
		} else {
			document.body.classList.remove('dark')
		}
	}, [isDark])

	const handleSwitchTheme = useCallback(() => {
		setIsDark((prev) => !prev)
	}, [])

	return (
		<button name="toggle" className={isDark ? styles.switchOn : styles.switchOff} onClick={handleSwitchTheme}>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 64 64"
				aria-labelledby="title"
				aria-describedby="desc"
				role="img"
				xmlnsXlink="http://www.w3.org/1999/xlink"
				className={isDark ? styles.dark : styles.light}
			>
				<title>Half Moon</title>
				<desc>A line styled icon from Orion Icon Library.</desc>
				<path
					data-name="layer1"
					d="M33.9 11A16.8 16.8 0 0 1 12 34.1 20.1 20.1 0 1 0 33.9 11z"
					fill="none"
					stroke="#939597"
					strokeMiterlimit="10"
					strokeWidth="2"
					strokeLinejoin="round"
					strokeLinecap="round"
				></path>
			</svg>
		</button>
	)
}
