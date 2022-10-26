import { SiNotion } from 'react-icons/si'
import { SlSocialGithub, SlSocialInstagram, SlSocialTwitter } from 'react-icons/sl'

import styles from './Accounts.module.scss'

const ACCOUNTS = [
	{ name: 'github', link: 'https://github.com/Yuta07', image: SlSocialGithub },
	{ name: 'twitter', link: 'https://twitter.com/_yutawo', image: SlSocialTwitter },
	{ name: 'instagram', link: 'https://www.instagram.com/_yutawo/', image: SlSocialInstagram },
	{
		name: 'curriculum vitae',
		link: 'https://shorthaired-seaplane-f56.notion.site/Curriculum-vitae-fecdfaa602c54dbf8da36e5533467bc7',
		image: SiNotion,
	},
]

export const Accounts = () => {
	return (
		<div className={styles.container}>
			{ACCOUNTS.map((account) => {
				const IconComponent = account.image

				return (
					<a key={account.name} href={account.link} className={styles.link} target="_blank" rel="noopener noreferrer">
						<IconComponent color="#D3DBDE" size={20} className={styles.social} />
						<span className={styles.target}>{account.name}</span>
					</a>
				)
			})}
		</div>
	)
}
