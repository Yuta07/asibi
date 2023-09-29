import { LinkList } from '@/components/ui/LinkList'

import s from './styles.module.css'

const ACCOUNTS = [
	{ name: 'Github', link: 'https://github.com/Yuta07', image: '' },
	{ name: 'Twitter', link: 'https://twitter.com/asibi3Q', image: '' },
	{ name: 'Bookmeter', link: 'https://bookmeter.com/users/1373649', image: '' },
	{
		name: 'Resume',
		link: 'https://shorthaired-seaplane-f56.notion.site/Curriculum-vitae-fecdfaa602c54dbf8da36e5533467bc7',
		image: '',
	},
] as const

export const QuickLinks = () => {
	return (
		<div>
			<h2 className={s.heading}>Quick Links</h2>
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
		</div>
	)
}
