'use client'

import { useMemo } from 'react'

import { useThemeState } from '@/contexts/ThemeProvider'

import s from './HomeHeader.module.css'

export const HomeHeader = () => {
	const { state } = useThemeState()

	const avatarClassName = useMemo(() => {
		if (state === 'light') {
			return 'avatarLight'
		} else {
			return 'avatarDark'
		}
	}, [state])

	return (
		<div className={s.header}>
			<div className={s.backgroundContainer}>
				<img alt="my-memory" className={s.background} height={240} src="/background_me.webp" width="auto" />
			</div>
			<div className={s.avatarContainer}>
				<img alt="my-avatar" className={s[avatarClassName]} height={124} src="/avatar.webp" width={124} />
			</div>
		</div>
	)
}
