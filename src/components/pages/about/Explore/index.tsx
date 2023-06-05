import s from './styles.module.css'

const GOOD = ['うどん', '整理整頓', '散歩']
const NOT_GOOD = ['匂いがきついもの', '乗り物酔い', 'メールマガジン']

export const Explore = () => {
	return (
		<div>
			<h2 className={s.heading}>Explore</h2>
			<div className={s.content}>
				<div className={s.exploreContent}>
					<h3 className={s.title}>好きなこと（もの）</h3>
					<ul>
						{GOOD.map((good) => {
							return (
								<li key={good} className={s.listItem}>
									{good}
								</li>
							)
						})}
					</ul>
				</div>
				<div className={s.exploreContent}>
					<h3 className={s.title}>苦手なこと（もの）</h3>
					<ul>
						{NOT_GOOD.map((ng) => {
							return (
								<li key={ng} className={s.listItem}>
									{ng}
								</li>
							)
						})}
					</ul>
				</div>
			</div>
		</div>
	)
}
