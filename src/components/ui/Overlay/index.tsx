import s from './styles.module.css'

type Props = {
	isOpen: boolean
	onClose: () => void
}

export const Overlay = ({ isOpen, onClose }: Props) => {
	return <div className={isOpen ? s.showOverlay : s.hideOverlay} onClick={onClose} />
}
