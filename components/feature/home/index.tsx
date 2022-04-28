import Image from 'next/image'
import Link from 'next/link'
import { FaArrowRight } from 'react-icons/fa'
import { FiGithub, FiTwitter } from 'react-icons/fi'
import { SiNotion } from 'react-icons/si'

import styles from './Home.module.scss'

const FEATURES = [
	{ name: 'Entry', link: '/entry' },
	{ name: 'Profile', link: '/profile' },
]

const ACTIVITIES = [
	{ name: 'Yuta07', link: 'https://github.com/Yuta07', image: FiGithub },
	{ name: 'zakimii07', link: 'https://twitter.com/zakimii07', image: FiTwitter },
	{
		name: 'resume',
		link: 'https://shorthaired-seaplane-f56.notion.site/Curriculum-vitae-fecdfaa602c54dbf8da36e5533467bc7',
		image: SiNotion,
	},
]

export const Home = () => {
	return (
		<div className={styles.container}>
			<div className={styles.inner}>
				<div className={styles.header}>
					<Image src="/logo/logo.svg" className={styles.avatar} width={40} height={40} quality={85} />
					<h1 className={styles.author}>zakimii</h1>
				</div>
				<div className={styles.main}>
					<div className={styles.featureContaienr}>
						{FEATURES.map((feature) => {
							return (
								<div key={feature.name} className={styles.feature}>
									<Link href={feature.link}>
										<a className={styles.featureLink}>
											<span className={styles.featureGradientTxt}>{feature.name}</span>
											<FaArrowRight size={20} color="#ffffff" />
										</a>
									</Link>
								</div>
							)
						})}
					</div>
					<div className={styles.relatedLinkContainer}>
						{ACTIVITIES.map((activity) => {
							const SVGComponent = activity.image

							return (
								<a
									key={activity.name}
									href={activity.link}
									target="_blank"
									rel="noopener noreferrer"
									className={styles.relatedLink}
								>
									<SVGComponent color="#ffffff" size={16} />
									<span className={styles.link}>{activity.name}</span>
								</a>
							)
						})}
					</div>
					<div className={styles.trivialContainer}>
						<p className={styles.trivial}>Hi. I'm a web frontend engineer.</p>
					</div>
				</div>
				<div className={styles.footer}>
					<small className={styles.copyright}>©{new Date().getFullYear()}, zakimii</small>
				</div>
			</div>
		</div>
	)
}
