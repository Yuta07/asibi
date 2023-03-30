'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { ThemeSwitch } from '@/components/common/ThemeSwitch'

import s from './Header.module.css'

export const Header = () => {
	const pathname = usePathname()

	return (
		<>
			{pathname === '/' && <div className={s.blank} />}
			<header className={s.header}>
				<div className={s.inner}>
					<Link href="/">
						<img alt="asibi" height={20} src="/logo.svg" width={64} />
					</Link>
					<div>
						<ThemeSwitch />
					</div>
				</div>
			</header>
		</>
	)
}
