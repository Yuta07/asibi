'use client'

import Image from 'next/image'

import { useThemeState } from '@/contexts/ThemeProvider'

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

export const AuthorAside = () => {
	const { state } = useThemeState()

	const avatarClassName = state === 'light' ? 'avatarLight' : 'avatarDark'

	return (
		<aside className={s.container}>
			<div className={s.authorInfo}>
				<div className={s.authorMeta}>
					<Image alt="asibi3Q" className={s[avatarClassName]} height={48} src="/icon/icon.svg" width={48} />
					<div>
						<p className={s.author}>asibi3Q</p>
						<div className={s.iconField}>
							{ACCOUNTS.map((account) => {
								return (
									<a
										key={account.name}
										className={s.link}
										href={account.link}
										rel="noopener noreferrer"
										target="_blank"
									>
										<Image alt={`link to ${account.name}`} height={20} src={account.image} width={20} />
									</a>
								)
							})}
						</div>
					</div>
				</div>
				<p className={s.about}>
					Hi there 👋 I'm asibi3Q, Web Frontend engineer living in Kawasaki from 🏯 Nagoya, Japan. I like fish rather
					than meat. Thanks!!
				</p>
			</div>
		</aside>
	)
}
