import s from './Footer.module.css'

export const Footer = () => {
	return (
		<footer className={s.footer}>
			<small className={s.copyRight}>©︎ {new Date().getFullYear()}, asibi3Q.</small>
		</footer>
	)
}
