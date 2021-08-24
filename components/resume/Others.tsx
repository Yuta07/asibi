import styles from './Others.module.scss'

const SIDE_BUSINESS = [
	{
		title: '飲食店のデータ分析プラットフォームの開発',
		overview: 'React/Redux,TypeScriptでのフロントエンドのコーディング、レビュー',
	},
]

const OTHERS = [
	'早いスパンで開発・リリース・改善ができる開発環境を好んでいます。',
	'チーム内での暗黙知が累積しないように共有ドキュメントの整備を行うようにしています。',
	'プライベートで学習した新しい技術はプロジェクトに還元することを意識しています。',
]

export const Others = () => {
	return (
		<div className={styles.container}>
			<h2 className={styles.title}>OTHERS</h2>
			<div className={styles.content}>
				<h3 className={styles.hero}>副業</h3>
				{SIDE_BUSINESS.map((side) => {
					return (
						<div key={side.title} className={styles.sideList}>
							<h4 className={styles.business}>{side.title}</h4>
							<p className={styles.list}>{side.overview}</p>
						</div>
					)
				})}
				<h3 className={styles.hero}>その他</h3>
				<ul className={styles.others}>
					{OTHERS.map((other) => {
						return (
							<li key={other} className={styles.list}>
								{other}
							</li>
						)
					})}
				</ul>
			</div>
		</div>
	)
}
