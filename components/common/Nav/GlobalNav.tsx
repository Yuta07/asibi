import Link from 'next/link'

import s from './GlobalNav.module.css'

const GLOBAL_NAV = [
	{ name: 'About', link: '/about' },
	{ name: 'Blog', link: '/blog' },
	{ name: 'Tsuredure', link: '/tsuredure' },
	{ name: 'Works', link: '/works' },
] as const

export const GlobalNav = () => {
	return (
		<nav className={s.nav}>
			<ul className={s.navList}>
				{GLOBAL_NAV.map((nav) => {
					return (
						<li key={nav.name} className={s.navListItem}>
							<Link className={s.navListItemAnchor} href={nav.link}>
								{nav.name}
							</Link>
						</li>
					)
				})}
			</ul>
		</nav>
	)
}
