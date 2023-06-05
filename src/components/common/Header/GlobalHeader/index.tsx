'use client'

import Link from 'next/link'
import { useMemo, useRef } from 'react'

import { Nav } from '@/components/common/Nav'
import { ThemeSwitch } from '@/components/ui/ThemeSwitch'
import { useScrollOffsetTop } from '@/hooks/useScrollOffsetTop'

import s from './styles.module.css'

const BASE_HEIGHT = 80

export const GlobalHeader = () => {
	const ref = useRef(null)

	const { pageYOffsetTop, isScrollUp } = useScrollOffsetTop(ref)

	const isScrollingUp = BASE_HEIGHT > pageYOffsetTop || isScrollUp

	const headerTranslateStyle = useMemo(() => {
		if (isScrollUp === undefined) {
			return {}
		} else if (isScrollingUp) {
			return {
				transform: 'translateY(0px)',
				transition: '0.5s',
			}
		} else {
			return {
				transform: 'translateY(-100px)',
				transition: '0.5s',
			}
		}
	}, [isScrollUp, isScrollingUp])

	return (
		<>
			<header ref={ref} className={s.header} style={headerTranslateStyle}>
				<div className={s.inner}>
					<Link className={s.rootLink} href="/">
						<img alt="asibi" height={20} src="/logo.svg" width={64} />
					</Link>
					<Nav />
					<div>
						<ThemeSwitch />
					</div>
				</div>
			</header>
		</>
	)
}
