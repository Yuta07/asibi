import styles from './Footer.module.scss'
import { Profile } from './Profile'

export const Footer = () => {
	return (
		<footer className={styles.footer}>
			<Profile />
			<p className={styles.copyright}>
				©{new Date().getFullYear()},
				<a href="https://github.com/Yuta07" target="_blank" rel="noopener noreferrer" className={styles.anchor}>
					@yutaaaaa___
				</a>
			</p>
		</footer>
	)
}
