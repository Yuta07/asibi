'use client'

import { useThemeDispatch, useThemeState } from '@/contexts/ThemeProvider'

export const ThemeSelect = () => {
	const { state } = useThemeState()
	const { handleChangeTheme } = useThemeDispatch()

	return (
		<details>
			<summary>{state}</summary>
			<div>
				<button onClick={() => handleChangeTheme('system')}>System</button>
				<button onClick={() => handleChangeTheme('light')}>Light</button>
				<button onClick={() => handleChangeTheme('dark')}>Dark</button>
			</div>
		</details>
	)
}
