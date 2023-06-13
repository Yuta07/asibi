'use client'

import { usePathname, useSearchParams } from 'next/navigation'
import { useEffect, useMemo, useState } from 'react'

let prevPath: string | null = null

export const useRouteChange = () => {
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

	return { isReStaredRouteChange, isRouteChangeComp }
}
