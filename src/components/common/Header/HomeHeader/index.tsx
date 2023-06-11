'use client'

import Image from 'next/image'
import Link from 'next/link'

import { ThemeSwitch } from '@/components/ui/ThemeSwitch'
import { useThemeState } from '@/contexts/ThemeProvider'

import s from './styles.module.css'

export const HomeHeader = () => {
	const { state } = useThemeState()

	return (
		<>
			<header className={s.header}>
				<div className={s.inner}>
					<Link className={s.rootLink} href="/">
						<Image alt="asibi" height={20} src={state === 'light' ? '/logo.svg' : '/logo_light.svg'} width={60} />
					</Link>
					<div>
						<ThemeSwitch />
					</div>
				</div>
			</header>
		</>
	)
}
