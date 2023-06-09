'use client'

import { useEffect, useState } from 'react'

import s from './styles.module.css'

export const NavigationProgress = () => {
	const [isRouteChanged, setIsRouteChanged] = useState(false)

	useEffect(() => {
		setIsRouteChanged(true)
	}, [])

	const progressClassName = isRouteChanged ? s.progressFin : s.progress

	return (
		<div className={s.progressBar}>
			<div className={progressClassName} />
		</div>
	)
}
