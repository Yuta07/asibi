import Link from 'next/link'

import { ThemeSwitch } from '@/components/ui/ThemeSwitch'

import s from './styles.module.css'

export const HomeHeader = () => {
	return (
		<>
			<header className={s.header}>
				<div className={s.inner}>
					<Link className={s.rootLink} href="/">
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
