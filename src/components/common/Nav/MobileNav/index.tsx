'use client'

import { useState } from 'react'

import { MobileNavButton } from './MobileNavButton'
import { MobileNavPortal } from './MobileNavPortal'

export const MobileNav = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false)

	const handleChangeMenuOpen = () => {
		setIsMenuOpen((prev) => !prev)
	}

	return (
		<>
			<MobileNavButton handleChangeMenuOpen={handleChangeMenuOpen} isMenuOpen={isMenuOpen} />
			<MobileNavPortal isOpen={isMenuOpen} onClose={handleChangeMenuOpen} />
		</>
	)
}
