'use client'

import Link from 'next/link'
import { useEffect } from 'react'

import { useThemeDispatch, useThemeState } from '@/contexts/ThemeProvider'

import s from './styles.module.css'

const NAV_LIST = [
	{ name: 'About', link: '/about' },
	{ name: 'Blog', link: '/blog' },
	{ name: 'Ordinary', link: '/ordinary' },
	{ name: 'Works', link: '/works' },
] as const

const SHOW_STYLE = { height: '192px', opacity: 1 }
const HIDE_STYLE = { height: 0, opacity: 0 }
const ANIMATION_STYLE = { duration: 200, easing: 'ease-in' }

export const MobileNav = () => {
	const { state } = useThemeState()
	const { handleChangeTheme } = useThemeDispatch()

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

	const onChangeTheme = (
		e: React.ChangeEvent<HTMLInputElement> & { currentTarget: { value: 'light' | 'dark' | 'system' } }
	) => {
		handleChangeTheme(e.currentTarget.value)
	}

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
				<div className={s.navContainer} id="header-nav-summary-nav">
					<nav>
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
					<form>
						<fieldset className={s.field}>
							<legend className={s.themeLegend}>Appearance</legend>
							<label className={s.themeLabel} htmlFor="system">
								<input
									checked={state === 'system'}
									className={state === 'system' ? s.selectedTheme : ''}
									id="system"
									name="appearance"
									type="radio"
									value="system"
									onChange={onChangeTheme}
								/>
								<span>System</span>
							</label>
							<label className={s.themeLabel} htmlFor="light">
								<input
									checked={state === 'light'}
									className={state === 'light' ? s.selectedTheme : ''}
									id="light"
									name="appearance"
									type="radio"
									value="light"
									onChange={onChangeTheme}
								/>
								<span>Light</span>
							</label>
							<label className={s.themeLabel} htmlFor="dark">
								<input
									checked={state === 'dark'}
									className={state === 'dark' ? s.selectedTheme : ''}
									id="dark"
									name="appearance"
									type="radio"
									value="dark"
									onChange={onChangeTheme}
								/>
								<span>Dark</span>
							</label>
						</fieldset>
					</form>
				</div>
			</details>
		</>
	)
}
