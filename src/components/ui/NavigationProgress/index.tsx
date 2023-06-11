'use client'

import { usePathname, useSearchParams } from 'next/navigation'
import { useEffect, useMemo, useState } from 'react'

import s from './styles.module.css'

let prevPath: string | null = null

export const NavigationProgress = () => {
	const [isRouteChangeComp, setIsRouteChanged] = useState<boolean | null>(false)

	const pathname = usePathname()
	const searchParams = useSearchParams()

	useEffect(() => {
		prevPath = pathname
		setIsRouteChanged(true)

		const timer = setTimeout(() => {
			setIsRouteChanged(null)
		}, 500)

		return () => {
			clearTimeout(timer)
		}
	}, [pathname, searchParams])

	const isReStaredRouteChange = useMemo(() => {
		return prevPath !== pathname && isRouteChangeComp === null
	}, [pathname, isRouteChangeComp])

	const progressClassName = isRouteChangeComp === null ? s.initProgress : isRouteChangeComp ? s.progressFin : s.progress

	return (
		<div className={s.progressBar}>
			<div className={isReStaredRouteChange ? s.progress : progressClassName} />
		</div>
	)
}
