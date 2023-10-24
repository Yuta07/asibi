'use client'

import GitHubIcon from '/public/assets/social/github-mark.svg'
import XIcon from '/public/assets/social/x-logo.svg'
import BookmeterIcon from '/public/assets/quicklink/bookmeter.svg'
import ResumeIcon from '/public/assets/quicklink/resume.svg'

import s from './styles.module.css'

const ACCOUNTS = [
	{
		name: 'Github',
		link: 'https://github.com/Yuta07',
		image: (
			<GitHubIcon
				width={24}
				height={24}
				className={s.quickLinkListItemFillImage}
				color="var(--text)"
				viewBox="0 0 96 96"
			/>
		),
	},
	{
		name: 'X',
		link: 'https://twitter.com/asibi3Q',
		image: (
			<XIcon
				width={24}
				height={24}
				className={s.quickLinkListItemFillImage}
				color="var(--text)"
				viewBox="0 0 1200 1200"
			/>
		),
	},
	{
		name: 'Bookmeter',
		link: 'https://bookmeter.com/users/1373649',
		image: (
			<BookmeterIcon
				width={24}
				height={24}
				className={s.quickLinkListItemImage}
				color="var(--text)"
				viewBox="0 0 24 24"
			/>
		),
	},
	{
		name: 'Resume',
		link: 'https://shorthaired-seaplane-f56.notion.site/Curriculum-vitae-fecdfaa602c54dbf8da36e5533467bc7',
		image: (
			<ResumeIcon width={24} height={24} className={s.quickLinkListItemImage} color="var(--text)" viewBox="0 0 24 24" />
		),
	},
]

export const QuickLinks = () => {
	return (
		<div>
			<h2 className={s.heading}>Quick Links</h2>
			<ul className={s.quickLinkList}>
				{ACCOUNTS.map((account) => {
					return (
						<li className={s.quickLinkListItem}>
							<a href={account.link} rel="noopener noreferrer" target="_blank" className={s.quickLinkListItemLink}>
								<p className={s.quickLinkListItemImageContainer}>{account.image}</p>
								<span className={s.quickLinkListItemText}>{account.name}</span>
							</a>
						</li>
					)
				})}
			</ul>
		</div>
	)
}
