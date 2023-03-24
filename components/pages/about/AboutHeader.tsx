'use client'

import { useMemo } from 'react'

import { useThemeState } from '@/contexts/ThemeProvider'

import s from './AboutHeader.module.css'

export const AboutHeader = () => {
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
			<div className={s.blank} />
			<div className={s.backgroundContainer}>
				<img alt="my-memory" className={s.background} height={240} src="/assets/background_me.webp" width="auto" />
			</div>
			<div className={s.avatarContainer}>
				<img alt="my-avatar" className={s[avatarClassName]} height={124} src="/assets/avatar.webp" width={124} />
			</div>
		</div>
	)
}
