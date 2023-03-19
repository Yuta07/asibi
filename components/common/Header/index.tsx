import Link from 'next/link'

import { ThemeSwitch } from '@/components/common/ThemeSwitch'

import s from './Header.module.css'

export const Header = () => {
	return (
		<header className={s.header}>
			<div className={s.headerBlur} />
			<Link href="/">
				<img alt="asibi" height={20} src="/logo.svg" width={64} />
			</Link>
			<div>
				<ThemeSwitch />
			</div>
		</header>
	)
}
