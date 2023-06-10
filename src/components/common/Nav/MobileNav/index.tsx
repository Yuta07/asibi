import { Overlay } from '@/components/ui/Overlay'
import { usePortal } from '@/hooks/usePortal'

import { MobileNavContent } from './MobileNavContent'
import s from './styles.module.css'

type Props = {
	isOpen: boolean
	onClose: () => void
}

export const MobileNav = ({ isOpen, onClose }: Props) => {
	const portal = usePortal({
		isOpen,
		children: (
			<div className={isOpen ? s.modalOpen : s.modalClose}>
				<Overlay isOpen={isOpen} onClose={onClose} />
				<MobileNavContent isOpen={isOpen} onClose={onClose} />
			</div>
		),
	})

	return portal
}
