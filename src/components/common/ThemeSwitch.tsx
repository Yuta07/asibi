'use client'

import { useThemeDispatch, useThemeState } from '@/contexts/ThemeProvider'

import s from './ThemeSwitch.module.css'

export const ThemeSwitch = () => {
	const { state } = useThemeState()
	const { handleChangeTheme } = useThemeDispatch()

	return (
		<>
			<input
				checked={state === 'dark'}
				className={s.themeCheck}
				id="theme-check"
				type="checkbox"
				onChange={handleChangeTheme}
			/>
			<label className={s.themeLabel} htmlFor="theme-check">
				<img alt="dark-switch-button" height={16} src="/assets/moon.webp" width={16} />
				<img alt="light-switch-button" height={16} src="/assets/sun.webp" width={16} />
				<div className={s.themeBall} />
			</label>
		</>
	)
}
