import styles from './Footer.module.scss'

export const Footer = () => {
	return (
		<footer className={styles.container}>
			<p className={styles.copyright}>© {new Date().getFullYear()}, asibi3Q</p>
		</footer>
	)
}
