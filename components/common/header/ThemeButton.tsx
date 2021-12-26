import { useDarkmode } from '@hooks/useDarkmode'

import styles from './ThemeButton.module.scss'

export const ThemeButton = () => {
	const { isDark, setIsDark } = useDarkmode()

	const handleSwitchTheme = () => {
		setIsDark(!isDark)
	}

	return (
		<button name="toggle" className={isDark ? styles.switchOn : styles.switchOff} onClick={handleSwitchTheme}>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="24"
				height="24"
				viewBox="0 0 24 24"
				fill="none"
				stroke="#939597"
				strokeWidth="2"
				strokeLinecap="round"
				strokeLinejoin="round"
				className={isDark ? styles.dark : styles.light}
			>
				<title>Half Moon</title>
				<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
			</svg>
		</button>
	)
}
