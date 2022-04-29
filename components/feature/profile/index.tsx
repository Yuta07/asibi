import Image from 'next/image'
import { FiGithub, FiTwitter } from 'react-icons/fi'
import { SiNotion } from 'react-icons/si'

import { SEO } from '@/components/common/SEO'

import styles from './Profile.module.scss'

import type { IconType } from 'react-icons'

const ProfileContents: { label: string; value: string }[] = [
	{ label: 'Name', value: 'zakimii' },
	{ label: 'Residence', value: 'Japan / Kanagawa' },
	{ label: 'Job / Role', value: 'Web Frontend Engineer' },
	{ label: 'Concerns', value: 'TypeScript / React / Next.js' },
]

const AccountsContents: { name: string; link: string; image: IconType }[] = [
	{ name: 'Yuta07', link: 'https://github.com/Yuta07', image: FiGithub },
	{ name: 'zakimii07', link: 'https://twitter.com/zakimii07', image: FiTwitter },
	{
		name: 'resume',
		link: 'https://shorthaired-seaplane-f56.notion.site/Curriculum-vitae-fecdfaa602c54dbf8da36e5533467bc7',
		image: SiNotion,
	},
]

const AboutContent: string[] = [
	'都内にてクラウドERPのカスタマイズ開発に従事したのち、現在はWebフロントエンジニアとして活動中。',
	'好きなものはお寿司とお掃除とお散歩で、ハウスメートは犬と猫。',
]

const ImageContent: { src: string; alt: string }[] = [
	{ src: '/assets/sleepy_dog.jpg', alt: 'living_dog' },
	{ src: '/assets/relaxing_cat.jpg', alt: 'living_cat' },
]

export const Profile = () => {
	return (
		<>
			<SEO title="Profile" description="zakimiiのプロフィール" />
			<div className={styles.container}>
				<section className={styles.section}>
					<h1 className={styles.hero}>Profile</h1>
					<div className={styles.profile}>
						{ProfileContents.map((profile) => {
							return (
								<div key={profile.label} className={styles.profileColumn}>
									<label className={styles.profileLabel}>{profile.label}</label>
									<span className={styles.profileValue}>{profile.value}</span>
								</div>
							)
						})}
					</div>
				</section>
				<section className={styles.section}>
					<h2 className={styles.subHero}>Account</h2>
					<div className={styles.account}>
						{AccountsContents.map((account) => {
							const SVGComponent = account.image

							return (
								<a
									key={account.name}
									href={account.link}
									target="_blank"
									rel="noopener noreferrer"
									className={styles.link}
								>
									<SVGComponent color="#ffffff" size={16} />
									<span className={styles.target}>{account.name}</span>
								</a>
							)
						})}
					</div>
				</section>
				<section className={styles.section}>
					<h2 className={styles.subHero}>About</h2>
					<div className={styles.about}>
						{AboutContent.map((about) => {
							return (
								<p key={about} className={styles.aboutTxt}>
									{about}
								</p>
							)
						})}
					</div>
					<div className={styles.aboutImageSection}>
						{ImageContent.map((image) => {
							return (
								<Image
									key={image.alt}
									src={image.src}
									alt={image.alt}
									width={144}
									height={144}
									layout="intrinsic"
									objectFit="cover"
									quality={90}
									className={styles.aboutImage}
								/>
							)
						})}
					</div>
				</section>
			</div>
		</>
	)
}
