import s from './styles.module.css'

const EXPERIENCES = [
	{
		role: 'Webアプリケーションエンジニア',
		isRegular: true,
		detail: '予約システムのフロントエンド・バックエンドの開発に従事しています。',
		date: '2023/05~',
	},
	{
		role: 'Webフロントエンドエンジニア',
		isRegular: false,
		detail: 'フリーランスのWebフロントエンドエンジニアとして、0->1のプロジェクトをNext.jsをメインに開発していました。',
		date: '2020/06~2023/04',
	},
	{
		role: '機能開発エンジニア',
		isRegular: true,
		detail: 'クラウドERPの導入支援・カスタマイズ開発やシステムの保守・運用を経験しました。',
		date: '2019/04~2020/05',
	},
]

export const Experience = () => {
	return (
		<div>
			<h2 className={s.heading}>Experience</h2>
			<div className={s.content}>
				<ul className={s.experienceList}>
					{EXPERIENCES.map((experience) => {
						return (
							<li key={experience.date} className={s.experienceListItem}>
								<p className={s.experienceRole}>{experience.role}</p>
								<small className={s.experienceDate}>{experience.date}</small>
								<p className={s.experienceDetail}>{experience.detail}</p>
							</li>
						)
					})}
				</ul>
			</div>
		</div>
	)
}
