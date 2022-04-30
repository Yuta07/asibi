import styles from './Footer.module.scss'
import { Profile } from './Profile'

export const Footer = () => {
	return (
		<footer className={styles.container}>
			<div className={styles.inner}>
				<div className={styles.flame}>
					<Profile />
					<p className={styles.copyright}>©{new Date().getFullYear()}, zakimii</p>
				</div>
			</div>
		</footer>
	)
}
