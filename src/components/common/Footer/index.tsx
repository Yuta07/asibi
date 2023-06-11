'use client'

import Image from 'next/image'
import Link from 'next/link'

import { useThemeState } from '@/contexts/ThemeProvider'

import s from './styles.module.css'

export const Footer = () => {
	const { state } = useThemeState()

	return (
		<footer className={s.footer}>
			<div className={s.container}>
				<Link href="/">
					<Image alt="asibi" height={20} src={state === 'light' ? '/logo.svg' : '/logo_light.svg'} width={60} />
				</Link>
				<p className={s.scolding}>Fish rather than meat.</p>
				<div className={s.copyRightContainer}>
					<small className={s.copyRight}>©︎ {new Date().getFullYear()}, asibi3Q. All Rights Reserved.</small>
				</div>
			</div>
		</footer>
	)
}
