'use client'

import Link from 'next/link'

import { useThemeState } from 'contexts/ThemeProvider'
import './Nav.css'

const NAV = [
	{ url: '/blog', title: 'ブログ' },
	{ url: '/ordinary', title: 'つれづれ' },
	{ url: '/works', title: 'これまで' },
	{ url: '/about', title: 'わたし' },
] as const

export const Nav = () => {
	const { state } = useThemeState()

	return (
		<nav className={state === 'dark' ? 'nav-dark' : 'nav-light'}>
			<ul className="nav-list">
				{NAV.map((nav) => {
					return (
						<li key={nav.title}>
							<Link className="nav-list-anchor" href={nav.url}>
								{nav.title}
							</Link>
						</li>
					)
				})}
			</ul>
		</nav>
	)
}
