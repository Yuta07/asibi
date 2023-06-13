'use client'

import { useRouteChange } from '@/hooks/useRouteChange'

import s from './styles.module.css'

export const NavigationProgress = () => {
	const { isReStaredRouteChange, isRouteChangeComp } = useRouteChange()

	const progressClassName = isRouteChangeComp === null ? s.initProgress : isRouteChangeComp ? s.progressFin : s.progress

	return (
		<div className={s.progressBar}>
			<div className={isReStaredRouteChange ? s.progress : progressClassName} />
		</div>
	)
}
