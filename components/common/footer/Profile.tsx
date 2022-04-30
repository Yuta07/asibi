import Image from 'next/image'

import GithubSVG from '@/assets/github.svg'
import RssSVG from '@/assets/rss.svg'
import TwitterSVG from '@/assets/twitter.svg'

import styles from './Profile.module.scss'

export const Profile = () => {
	return (
		<div className={styles.container}>
			<Image
				quality={90}
				src="/logo/logo.svg"
				alt="logo_yutaaaaa"
				width={40}
				height={40}
				layout="fixed"
				priority={true}
			/>
			<h2 className={styles.author}>zakimii</h2>
			<div className={styles.social}>
				<a href="https://github.com/Yuta07" target="_blank" rel="noopener noreferrer" className={styles.link}>
					<GithubSVG />
					<span className={styles.target}>Yuta07</span>
				</a>
				<a href="https://twitter.com/zakimii07" target="_blank" rel="noopener noreferrer" className={styles.link}>
					<TwitterSVG />
					<span className={styles.target}>zakimii07</span>
				</a>
				<a href="https://yutaaaaa.dev/rss/feed.xml" rel="nofollow" className={styles.link}>
					<RssSVG />
					<span className={styles.target}>RSS</span>
				</a>
			</div>
			<p className={styles.intro}>
				SIエンジニア -{'>'} Webフロントエンドエンジニア
				<br />
				好きなものはお寿司とお掃除とお散歩。
			</p>
		</div>
	)
}
