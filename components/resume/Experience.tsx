import styles from './Experience.module.scss'

const EXPERIENCES = [
	{
		company: 'LisaTechnologies株式会社',
		period: '2020/06 ~ 現在<FreeLance>',
		overview: 'フードデリバリー事業の売上改善サービス FDM の開発',
		role: [
			'Next.jsでのフロントエンド開発',
			'Figmaでのデザインワイヤーフレームの作成',
			'Cypressでのe2eテスト導入',
			'Mixpanelのイベント設定、運用',
			'GatsbyでHP・LP作成',
		],
	},
	{
		company: '株式会社 オロ',
		period: '2019/04 ~ 2020/05',
		overview: 'クラウドERP ZAC のカスタマイズ開発、機能開発',
		role: [
			'導入企業の運用にあったパラメータ設定',
			'Classic ASPでのカスタマイズ開発、機能開発',
			'SQL Serverでのパラメータ設定',
			'GASを用いた社内評価システムの構築',
		],
	},
	{
		company: 'LisaTechnologies株式会社',
		period: '2018/07 ~ 2019/03<Internship>',
		overview: 'モバイルオーダーペイアプリ TOGO のWeb管理画面の開発',
		role: [
			'React/ReduxでのSPA開発',
			'firebaseでのバックエンド開発・運用・導入',
			'Cloud FunctionsでWebプッシュ通知の実装',
			'フロントエンドのJavaScriptからTypeScriptへのリプレイス',
		],
	},
]

export const Experience = () => {
	return (
		<div className={styles.container}>
			<h2 className={styles.title}>EXPERIENCE</h2>
			<div className={styles.experiences}>
				<span className={styles.circle} />
				{EXPERIENCES.map((experience, i) => {
					return (
						<div key={i} className={i > 0 ? styles.content : styles.first}>
							<span className={styles.period}>{experience.period}</span>
							<h3 className={styles.company}>{experience.company}</h3>
							<p className={styles.overview}>{experience.overview}</p>
							<ul className={styles.roles}>
								{experience.role.map((role) => {
									return (
										<li key={role} className={styles.list}>
											{role}
										</li>
									)
								})}
							</ul>
						</div>
					)
				})}
			</div>
		</div>
	)
}
