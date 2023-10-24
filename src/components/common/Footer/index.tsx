import s from './styles.module.css'

export const Footer = () => {
	return (
		<footer className={s.footer}>
			<div className={s.copyRightContainer}>
				<small className={s.copyRight}>©︎ {new Date().getFullYear()}, asibi3Q. All Rights Reserved.</small>
			</div>
		</footer>
	)
}
