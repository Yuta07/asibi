'use client'

import Link from 'next/link'
import { useMemo, useRef } from 'react'

import { GlobalNav } from '@/components/common/Nav/GlobalNav'
import { ThemeSelect } from '@/components/ui/ThemeSelect'
import { useScrollOffsetTop } from '@/hooks/useScrollOffsetTop'

import { MobileNav } from '../Nav/MobileNav'

import s from './styles.module.css'
import LogoComponent from '/public/logo/logo.svg'

const BASE_HEIGHT = 60

type HeaderProps = {
	maxWidth?: number
}

export const Header = ({ maxWidth = 900 }: HeaderProps) => {
	const ref = useRef(null)

	const { pageYOffsetTop, isScrollUp } = useScrollOffsetTop(ref)
	const isScrollingUp = BASE_HEIGHT > pageYOffsetTop || isScrollUp

	const headerTranslateStyle = useMemo(() => {
		if (isScrollUp === undefined) {
			return {}
		} else if (isScrollingUp) {
			return {
				transform: 'translateY(0px)',
				transition: '0.4s',
			}
		} else {
			const translateYNum = window.screen.width < 600 ? 460 : 160
			return {
				transform: `translateY(-${translateYNum}px)`,
				transition: '0.4s',
			}
		}
	}, [isScrollUp, isScrollingUp])

	return (
		<header ref={ref} className={s.header} style={headerTranslateStyle}>
			<div className={s.inner} style={{ maxWidth }}>
				<Link className={s.rootLink} href="/">
					<LogoComponent height={20} width={60} className={s.logo} viewBox="0 0 92 28" />
				</Link>
				<div className={s.globalNav}>
					<GlobalNav />
					<ThemeSelect />
				</div>
				<div className={s.mobileNav}>
					<MobileNav />
				</div>
			</div>
		</header>
	)
}
