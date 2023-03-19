import s from './About.module.css'
import { LinkList } from './LinkList'

const NAV = [
	{ name: 'About Me', link: '/about', image: '/link/about.svg' },
	{ name: 'Blog', link: '/blog', image: '/link/blog.svg' },
	{ name: 'Tsurezure', link: '/tsurezure', image: '/link/tsurezure.svg' },
	{ name: 'Works', link: '/works', image: '/link/works.svg' },
] as const

const ACCOUNTS = [
	{ name: 'Github', link: 'https://github.com/Yuta07', image: '/link/github.svg' },
	{ name: 'Twitter', link: 'https://twitter.com/yuta030Q', image: '/link/twitter.svg' },
	{ name: 'Bookmeter', link: 'https://bookmeter.com/users/1373649', image: '/link/book.svg' },
	{
		name: 'Resume',
		link: 'https://shorthaired-seaplane-f56.notion.site/Curriculum-vitae-fecdfaa602c54dbf8da36e5533467bc7',
		image: '/link/resume.svg',
	},
] as const

export const About = () => {
	return (
		<div>
			<h1 className={s.hero}>Hi, I'm asibi3Q.</h1>
			<p className={s.intro}>Web Frontend Engineer, born in Nagoya, lives in Kawasaki.</p>
			<p>Fish rather than meat.</p>
			<nav className={s.nav}>
				<div>
					<p className={s.title}>・Page Links</p>
					<ul className={s.list}>
						{NAV.map((nav) => {
							return <LinkList key={nav.name} image={nav.image} link={nav.link} name={nav.name} />
						})}
					</ul>
				</div>
				<div>
					<p className={s.title}>・Quick Links</p>
					<ul className={s.list}>
						{ACCOUNTS.map((account) => {
							return <LinkList key={account.name} image={account.image} link={account.link} name={account.name} />
						})}
					</ul>
				</div>
			</nav>
		</div>
	)
}
