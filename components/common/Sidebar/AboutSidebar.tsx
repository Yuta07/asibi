import { LinkList } from '@/components/ui/LinkList'

import s from './AboutSidebar.module.css'

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

export const AboutSidebar = () => {
	return (
		<section className={s.container}>
			<h2 className={s.hero}>Quick Links</h2>
			<ul className={s.list}>
				{ACCOUNTS.map((account) => {
					return (
						<LinkList
							key={account.name}
							image={account.image}
							isExternal={true}
							link={account.link}
							name={account.name}
						/>
					)
				})}
			</ul>
		</section>
	)
}
