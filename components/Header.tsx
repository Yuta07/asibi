import Link from 'next/link'

export const Header = () => {
	return (
		<header className="header">
			<Link href="/">
				<img src="/logo/logo_dark.svg" alt="asibi" width={88} height={24} className="logo" />
			</Link>
			<button className="menu-button">menu</button>
		</header>
	)
}
