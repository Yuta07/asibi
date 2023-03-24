'use client'

import { useThemeDispatch } from '@/contexts/ThemeProvider'

import s from './ThemeSwitch.module.css'

export const ThemeSwitch = () => {
	const { handleChangeTheme } = useThemeDispatch()

	return (
		<>
			<input className={s.themeCheck} id="theme-check" type="checkbox" onClick={handleChangeTheme} />
			<label className={s.themeLabel} htmlFor="theme-check">
				<img alt="dark-switch-button" height={16} src="/assets/moon.webp" width={16} />
				<img alt="light-switch-button" height={16} src="/assets/sun.webp" width={16} />
				<div className={s.themeBall} />
			</label>
		</>
	)
}
