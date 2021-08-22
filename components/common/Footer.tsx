import styles from './Footer.module.scss'

export const Footer = () => {
	return (
		<footer className={styles.footer}>
			<p className={styles.thanksTxt}>
				<a href="https://vercel.com/login" target="_blank" rel="noreferrer" className={styles.vercelLink}>
					Thanks for Vercel
				</a>
			</p>
			<p className={styles.copyright}>
				© {new Date().getFullYear()},
				<a href="https://github.com/Yuta07" target="_blank" rel="noreferrer" className={styles.githubLink}>
					Yutaka Miyazaki
				</a>
			</p>
		</footer>
	)
}
