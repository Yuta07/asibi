import Link from 'next/link'

import s from './Footer.module.css'
import { LinkList } from './LinkList'

const NAV = [
	{ name: 'About Me', link: '/about', image: '/link/about.svg' },
	{ name: 'Blog', link: '/blog', image: '/link/blog.svg' },
	{ name: 'Tsurezure', link: '/tsurezure', image: '/link/tsurezure.svg' },
	{ name: 'Works', link: '/works', image: '/link/works.svg' },
] as const

const ACCOUNTS = [
	{ name: 'Github', link: 'https://github.com/Yuta07', image: '/link/github.svg' },
	{ name: 'Twitter', link: 'https://twitter.com/asibi3Q', image: '/link/twitter.svg' },
	{ name: 'Bookmeter', link: 'https://bookmeter.com/users/1373649', image: '/link/book.svg' },
	{
		name: 'Resume',
		link: 'https://shorthaired-seaplane-f56.notion.site/Curriculum-vitae-fecdfaa602c54dbf8da36e5533467bc7',
		image: '/link/resume.svg',
	},
] as const

export const Footer = () => {
	return (
		<footer className={s.footer}>
			<div className={s.container}>
				<div className={s.author}>
					<div>
						<Link href="/">
							<img alt="asibi" height={20} src="/logo.svg" width={64} />
						</Link>
						<p className={s.scolding}>Fish rather than meat.</p>
					</div>
					<small className={s.copyRight}>©︎ {new Date().getFullYear()}, asibi3Q. All Rights Reserved.</small>
				</div>
				<div className={s.linkContainer}>
					<div>
						<p className={s.title}>Page Links</p>
						<ul className={s.list}>
							{NAV.map((nav) => {
								return <LinkList key={nav.name} image={nav.image} isExternal={false} link={nav.link} name={nav.name} />
							})}
						</ul>
					</div>
					<div>
						<p className={s.title}>Quick Links</p>
						<ul className={s.list}>
							{ACCOUNTS.map((account) => {
								return (
									<LinkList
										key={account.name}
										image={account.image}
										isExternal={false}
										link={account.link}
										name={account.name}
									/>
								)
							})}
						</ul>
					</div>
				</div>
			</div>
		</footer>
	)
}
