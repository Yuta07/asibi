import { ReactNode, useEffect, useState } from 'react'
import { createPortal } from 'react-dom'

type Props = {
	targetId?: string
	isOpen: boolean
	children: ReactNode
}

export const usePortal = ({ targetId, isOpen, children }: Props) => {
	const [portalContainer, setPortalContainer] = useState<HTMLElement | null>(null)

	useEffect(() => {
		const targetElement = targetId ? document.getElementById(targetId) : window.document.body
		if (targetElement === null) return

		setPortalContainer(targetElement)

		if (isOpen) targetElement.style.overflow = 'hidden'

		return () => {
			targetElement.style.overflow = ''
		}
	}, [targetId, isOpen])

	const portal = portalContainer ? createPortal(children, portalContainer) : null

	return portal
}
