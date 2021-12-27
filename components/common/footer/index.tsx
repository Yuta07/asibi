import styles from './Footer.module.scss'
import { Profile } from './Profile'

export const Footer = () => {
	return (
		<footer className={styles.container}>
			<div className={styles.inner}>
				<Profile />
				<p className={styles.copyright}>
					©{new Date().getFullYear()},
					<a href="https://github.com/Yuta07" target="_blank" rel="noopener noreferrer" className={styles.anchor}>
						@yutaaaaa___
					</a>
				</p>
			</div>
		</footer>
	)
}
