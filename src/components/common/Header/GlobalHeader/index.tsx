import Link from 'next/link'

import { GlobalNav } from '@/components/common/Nav/GlobalNav'
import { ThemeSwitch } from '@/components/ui/ThemeSwitch'

import s from './styles.module.css'

export const Header = () => {
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
