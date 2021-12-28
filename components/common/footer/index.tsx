import styles from './Footer.module.scss'
import { Profile } from './Profile'

export const Footer = () => {
	return (
		<footer className={styles.container}>
			<div className={styles.inner}>
				<Profile />
				<p className={styles.copyright}>
					©{new Date().getFullYear()},
					<a href="https://twitter.com/yutaaaaa___" target="_blank" rel="noopener noreferrer" className={styles.anchor}>
						@yutaaaaa___
					</a>
				</p>
			</div>
		</footer>
	)
}
