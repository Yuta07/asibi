import Image from 'next/image'
import styles from './Profile.module.scss'

export const Profile = () => {
	return (
		<div className={styles.container}>
			<div className={styles.photo}>
				<Image
					quality={90}
					src="/images/avatar.svg"
					alt="yutaka_miyzaki_dummy"
					width={160}
					height={160}
					className={styles.avatar}
				/>
			</div>
			<div>
				<h2 className={styles.name}>ミヤザキ ユタカ（Yutaka Miyazaki）</h2>
				<p className={styles.birth}>1992/03/09</p>
				<h3 className={styles.role}>Webエンジニア（WebEngineer）</h3>
				<div className={styles.links}>
					<a href="https://github.com/Yuta07" target="_blank" rel="noopener noreferrer" className={styles.github}>
						<Image quality={85} src="/images/github.svg" width={12} height={12} alt="github_icons" />
						<span className={styles.linkTxt}>Yuta07</span>
					</a>
					<a
						href="https://twitter.com/yutaaaaa___"
						target="_blank"
						rel="noopener noreferrer"
						className={styles.twitter}
					>
						<Image quality={85} src="/images/twitter_white.svg" width={12} height={12} alt="twitter_icons" />
						<span className={styles.linkTxt}>@yutaaaaa___</span>
					</a>
					<a href="mailto:mono.12dev@gmail.com" target="_blank" rel="noopener noreferrer" className={styles.gmail}>
						<Image quality={85} src="/images/gmail.svg" width={12} height={12} alt="gmail_icons" />
						<span className={styles.linkTxt}>mono.12dev</span>
					</a>
				</div>
			</div>
		</div>
	)
}
