'use client'

import { useThemeDispatch, useThemeState } from '@/contexts/ThemeProvider'

import DarkIcon from '/public/assets/theme/dark.svg'
import LightIcon from '/public/assets/theme/light.svg'
import SystemIcon from '/public/assets/theme/system-pc.svg'

import s from './styles.module.css'

export const ThemeSelect = () => {
	const { state } = useThemeState()
	const { handleChangeTheme } = useThemeDispatch()

	const onChangeTheme = (
		e: React.ChangeEvent<HTMLInputElement> & { currentTarget: { value: 'light' | 'dark' | 'system' } }
	) => {
		handleChangeTheme(e.currentTarget.value)
	}

	const themeIcon = (() => {
		switch (state) {
			case 'light':
				return <LightIcon width={16} height={16} color="var(--text-light)" viewBox="0 0 24 24" />
			case 'dark':
				return <DarkIcon width={16} height={16} color="var(--text-dark)" viewBox="0 0 24 24" />
			case 'system':
				return <SystemIcon width={16} height={16} color="var(--text-dark)" viewBox="0 0 24 24" />
			default:
				return <DarkIcon width={16} height={16} color="var(--text-dark)" viewBox="0 0 24 24" />
		}
	})()

	return (
		<details className={s.container}>
			<summary className={s.summary}>
				{themeIcon}
				<span>{`${state.charAt(0).toUpperCase()}${state.slice(1)}`}</span>
			</summary>
			<form>
				<fieldset className={s.field}>
					<label htmlFor="system" className={s.themeLabel}>
						<input
							type="radio"
							id="system"
							name="appearance"
							value="system"
							checked={state === 'system'}
							className={state === 'system' ? s.selectedTheme : ''}
							onChange={onChangeTheme}
						/>
						<span>System</span>
					</label>
					<label htmlFor="light" className={s.themeLabel}>
						<input
							type="radio"
							id="light"
							name="appearance"
							value="light"
							checked={state === 'light'}
							className={state === 'light' ? s.selectedTheme : ''}
							onChange={onChangeTheme}
						/>
						<span>Light</span>
					</label>
					<label htmlFor="dark" className={s.themeLabel}>
						<input
							type="radio"
							id="dark"
							name="appearance"
							value="dark"
							checked={state === 'dark'}
							className={state === 'dark' ? s.selectedTheme : ''}
							onChange={onChangeTheme}
						/>
						<span>Dark</span>
					</label>
				</fieldset>
			</form>
		</details>
	)
}
