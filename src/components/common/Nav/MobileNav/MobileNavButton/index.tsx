import s from './styles.module.css'

type MobileNavButtonProps = {
	isMenuOpen: boolean
	handleChangeMenuOpen: () => void
}

export const MobileNavButton = ({ isMenuOpen, handleChangeMenuOpen }: MobileNavButtonProps) => {
	return (
		<button className={isMenuOpen ? s.closeButton : s.openButton} type="button" onClick={handleChangeMenuOpen}>
			<div className={s.navButtonIcon}>
				<span className={s.aboveBorder} />
				<span className={s.centerBorder} />
				<span className={s.belowBorder} />
			</div>
			<span className={s.navButtonTxt}>Menu</span>
		</button>
	)
}
