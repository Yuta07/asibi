import s from './Explore.module.css'

const GOOD = ['うどん', '整理整頓', '散歩', 'フットボール']
const NOT_GOOD = ['匂いが強いもの', '乗り物酔い', 'メールマガジン', '向かい風']

export const Explore = () => {
	return (
		<section className={s.container}>
			<h2 className={s.hero}>Explore</h2>
			<div className={s.content}>
				<div className={s.preference}>
					<div>
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
					<div>
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
		</section>
	)
}
