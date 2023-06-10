import Image from 'next/image'
import Link from 'next/link'

import s from './styles.module.css'

type Props = {
	isOpen: boolean
	onClose: () => void
}

const NAV_LIST = [
	{ name: 'About', link: '/about' },
	{ name: 'Blog', link: '/blog' },
	{ name: 'Tsuredure', link: '/tsuredure' },
	{ name: 'Works', link: '/works' },
] as const

export const MobileNavContent = ({ isOpen, onClose }: Props) => {
	return (
		<div className={s.container}>
			<div className={s.navContentHeader}>
				<Image alt="site logo" height={32} src="/icon/icon.svg" width={32} />
				<button className={s.closeButton}>
					<span className={s.topBottomBorder} />
					<span className={s.bottomTopBorder} />
				</button>
			</div>
			<nav className={s.nav}>
				<ul className={s.navList}>
					{NAV_LIST.map((nav) => {
						return (
							<li key={nav.name} className={s.navListItem}>
								<Link className={s.navListItemAnchor} href={nav.link}>
									{nav.name}
								</Link>
							</li>
						)
					})}
				</ul>
			</nav>
		</div>
	)
}
