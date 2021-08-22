import Image from 'next/image'
import styles from './Profile.module.scss'

export const Profile = () => {
	return (
		<div className={styles.container}>
			<div className={styles.photo}>
				<Image
					quality={90}
					src="/avatar.svg"
					alt="yutaka_miyzaki_dummy"
					width={160}
					height={160}
					className={styles.avatar}
				/>
			</div>
		</div>
	)
}
