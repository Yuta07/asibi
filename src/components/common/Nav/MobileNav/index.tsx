'use client'

import Link from 'next/link'
import { useEffect } from 'react'

import s from './styles.module.css'

const NAV_LIST = [
	{ name: 'About', link: '/about' },
	{ name: 'Blog', link: '/blog' },
	{ name: 'Ordinary', link: '/ordinary' },
	{ name: 'Works', link: '/works' },
] as const

const SHOW_STYLE = { height: '192px', opacity: 1 }
const HIDE_STYLE = { height: 0, opacity: 0 }
const ANIMATION_STYLE = { duration: 200, easing: 'linear' }

export const MobileNav = () => {
	useEffect(() => {
		const details = document.getElementById('header-nav-details') as HTMLDetailsElement | null
		const summary = document.getElementById('header-nav-summary')
		const nav = document.getElementById('header-nav-summary-nav')

		if (!details || !summary || !nav) return

		const handler = (e: MouseEvent) => {
			e.preventDefault()

			if (details.open) {
				const anim = nav.animate([SHOW_STYLE, HIDE_STYLE], ANIMATION_STYLE)

				anim.onfinish = () => {
					details.removeAttribute('open')
				}
			} else {
				details.setAttribute('open', 'true')

				nav.animate([HIDE_STYLE, SHOW_STYLE], ANIMATION_STYLE)
			}
		}

		summary.addEventListener('click', handler)

		return () => {
			summary.removeEventListener('click', handler)
		}
	}, [])

	return (
		<>
			<details className={s.detailsContainer} id="header-nav-details">
				<summary className={s.navSummary} id="header-nav-summary">
					<div className={s.navButtonIcon}>
						<span className={s.aboveBorder} />
						<span className={s.centerBorder} />
						<span className={s.belowBorder} />
					</div>
					<span className={s.navSummaryTitle}>Menu</span>
				</summary>
				<nav className={s.nav} id="header-nav-summary-nav">
					<ul className={s.navList}>
						{NAV_LIST.map((nav, i) => {
							return (
								<li key={nav.name} className={s.navListItem}>
									<Link className={s.navListItemAnchor} data-row={i} href={nav.link}>
										<span className={s.navListItemAnchorTxt}>{nav.name}</span>
									</Link>
								</li>
							)
						})}
					</ul>
				</nav>
			</details>
		</>
	)
}
