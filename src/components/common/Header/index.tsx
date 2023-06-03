'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { GlobalNav } from '@/components/common/Nav/GlobalNav'
import { ThemeSwitch } from '@/components/common/ThemeSwitch'

import s from './Header.module.css'

export const Header = () => {
	const pathname = usePathname()

	return (
		<>
			<header className={s.header}>
				<div className={s.inner}>
					<Link href="/">
						<img alt="asibi" height={20} src="/logo.svg" width={64} />
					</Link>
					<GlobalNav />
					<div>
						<ThemeSwitch />
					</div>
				</div>
			</header>
		</>
	)
}
