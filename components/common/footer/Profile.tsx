import Image from 'next/image'

import GithubSVG from '@/assets/github.svg'
import RssSVG from '@/assets/rss.svg'
import TwitterSVG from '@/assets/twitter.svg'

import styles from './Profile.module.scss'

export const Profile = () => {
	return (
		<div className={styles.container}>
			<Image quality={90} src="/logo/logo.svg" alt="logo_yutaaaaa" width={40} height={40} priority />
			<h2 className={styles.author}>zakimii</h2>
			<div className={styles.social}>
				<a href="https://github.com/Yuta07" target="_blank" rel="noopener noreferrer" className={styles.link}>
					<GithubSVG />
				</a>
				<a href="https://twitter.com/yutaaaaa___" target="_blank" rel="noopener noreferrer" className={styles.link}>
					<TwitterSVG />
				</a>
				<a href="https://yutaaaaa.dev/rss/feed.xml" rel="nofollow" className={styles.link}>
					<RssSVG />
				</a>
			</div>
			<p className={styles.intro}>
				SIエンジニア -{'>'} Webフロントエンドエンジニア
				<br />
				好きなものはお寿司とお掃除。
			</p>
		</div>
	)
}
