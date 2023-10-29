'use client'

import { useThemeDispatch, useThemeState } from '@/contexts/ThemeProvider'

import DarkIcon from '/public/assets/theme/dark.svg'
import LightIcon from '/public/assets/theme/light.svg'
import SystemIcon from '/public/assets/theme/system-pc.svg'

import s from './styles.module.css'

export const ThemeSelect = () => {
	const { state } = useThemeState()
	const { handleChangeTheme } = useThemeDispatch()

	if (!state) return <div className={s.empty} />

	const onChangeTheme = (
		e: React.ChangeEvent<HTMLInputElement> & { currentTarget: { value: 'light' | 'dark' | 'system' } }
	) => {
		handleChangeTheme(e.currentTarget.value)
	}

	const themeIcon = (() => {
		switch (state) {
			case 'light':
				return <LightIcon color="var(--text)" height={16} viewBox="0 0 24 24" width={16} />
			case 'dark':
				return <DarkIcon color="var(--text)" height={16} viewBox="0 0 24 24" width={16} />
			case 'system':
				return <SystemIcon className={s.systemIcon} color="var(--text)" height={16} viewBox="0 0 24 24" width={16} />
			default:
				return null
		}
	})()

	return (
		<details className={s.container}>
			<summary className={s.summary}>
				{themeIcon}
				<span>{state && `${state.charAt(0).toUpperCase()}${state.slice(1)}`}</span>
			</summary>
			<form>
				<fieldset className={s.field}>
					<label className={s.themeLabel} htmlFor="system">
						<input
							checked={state === 'system'}
							className={state === 'system' ? s.selectedTheme : ''}
							id="system"
							name="appearance"
							type="radio"
							value="system"
							onChange={onChangeTheme}
						/>
						<span>System</span>
					</label>
					<label className={s.themeLabel} htmlFor="light">
						<input
							checked={state === 'light'}
							className={state === 'light' ? s.selectedTheme : ''}
							id="light"
							name="appearance"
							type="radio"
							value="light"
							onChange={onChangeTheme}
						/>
						<span>Light</span>
					</label>
					<label className={s.themeLabel} htmlFor="dark">
						<input
							checked={state === 'dark'}
							className={state === 'dark' ? s.selectedTheme : ''}
							id="dark"
							name="appearance"
							type="radio"
							value="dark"
							onChange={onChangeTheme}
						/>
						<span>Dark</span>
					</label>
				</fieldset>
			</form>
		</details>
	)
}
