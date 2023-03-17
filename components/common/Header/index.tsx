import Link from 'next/link'

import './Header.css'
import { Nav } from './Nav'
import { ThemeSwitch } from './ThemeSwitch'

export const Header = () => {
	return (
		<header className="header">
			<div className="header-blur" />
			<Link href="/">
				<img alt="asibi" className="logo" height={24} src="/logo.svg" width={88} />
			</Link>
			<Nav />
			<div>
				<ThemeSwitch />
				<button className="menu-button">menu</button>
			</div>
		</header>
	)
}
