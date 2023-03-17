'use client'

import { useThemeDispatch } from 'contexts/ThemeProvider'

import './ThemeSwitch.css'

export const ThemeSwitch = () => {
	const { handleChangeTheme } = useThemeDispatch()

	return (
		<>
			<input className="theme-check" id="theme-check" type="checkbox" onClick={handleChangeTheme} />
			<label className="theme-label" htmlFor="theme-check">
				<img alt="theme-switch-button" className="theme-img" height={16} src="/moon.png" width={16} />
				<img alt="theme-switch-button" className="theme-img" height={16} src="/sun.png" width={16} />
				<div className="theme-ball" />
			</label>
		</>
	)
}
