import styles from './About.module.scss'

export const About = () => {
	return (
		<div className={styles.container}>
			<h2 className={styles.title}>ABOUT ME</h2>
			<div className={styles.about}>
				<p>
					フロントエンドエンジニア2年目、現在はフリーランスで活動しています。主にNext.jsとReactを駆使した開発をメインとしています。
				</p>
				<p className={styles.txt}>
					以前はクラウドERPのカスタマイズ開発をしていました。経費管理・販売管理などの設定変更・機能開発をメインの業務としていました。
				</p>
			</div>
		</div>
	)
}
