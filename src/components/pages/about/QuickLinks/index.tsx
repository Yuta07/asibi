import Image from 'next/image'

import s from './styles.module.css'

const ACCOUNTS = [
	{
		name: 'Github',
		link: 'https://github.com/Yuta07',
		image: '/assets/social/github-mark-white.svg',
	},
	{ name: 'X', link: 'https://twitter.com/asibi3Q', image: '/assets/social/x-logo.svg', color: '#0f1419' },
	{
		name: 'Bookmeter',
		link: 'https://bookmeter.com/users/1373649',
		image: '/assets/quicklink/book.png',
	},
	{
		name: 'Resume',
		link: 'https://shorthaired-seaplane-f56.notion.site/Curriculum-vitae-fecdfaa602c54dbf8da36e5533467bc7',
		image: '/assets/quicklink/resume.png',
	},
] as const

export const QuickLinks = () => {
	return (
		<div>
			<h2 className={s.heading}>Quick Links</h2>
			<ul className={s.quickLinkList}>
				{ACCOUNTS.map((account) => {
					return (
						<li className={s.quickLinkListItem}>
							<a href={account.link} rel="noopener noreferrer" target="_blank" className={s.quickLinkListItemLink}>
								<p className={s.quickLinkListItemImageContainer}>
									<Image
										src={account.image}
										alt={`${account.name}'s link`}
										width={40}
										height={40}
										className={s.quickLinkListItemImage}
									/>
								</p>
								<span className={s.quickLinkListItemText}>{account.name}</span>
							</a>
						</li>
					)
				})}
			</ul>
		</div>
	)
}
