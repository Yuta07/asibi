import Link from 'next/link'

import s from './styles.module.css'

export const Footer = () => {
	return (
		<footer className={s.footer}>
			<div className={s.container}>
				<Link href="/">
					<img alt="asibi" height={20} src="/logo.svg" width={60} />
				</Link>
				<p className={s.scolding}>Fish rather than meat.</p>
				<div className={s.copyRightContainer}>
					<small className={s.copyRight}>©︎ {new Date().getFullYear()}, asibi3Q. All Rights Reserved.</small>
				</div>
			</div>
		</footer>
	)
}
