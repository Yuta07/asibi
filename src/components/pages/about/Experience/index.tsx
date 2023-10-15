import s from './styles.module.css'

const EXPERIENCES = [
	{
		role: 'Web Application Engineer',
		isRegular: true,
		date: '2023/05~',
	},
	{
		role: 'Web Frontend Engineer',
		isRegular: false,
		date: '2020/06~2023/04',
	},
	{
		role: 'ERP Engineer',
		isRegular: true,
		date: '2019/04~2020/05',
	},
]

export const Experience = () => {
	return (
		<div>
			<h2 className={s.heading}>Experience</h2>
			<div className={s.content}>
				<ul className={s.experienceList}>
					{EXPERIENCES.map(({ role, isRegular, date }) => {
						return (
							<li key={date} className={s.experienceListItem}>
								<p className={s.experienceRole}>{role}</p>
								<div className={s.experienceSub}>
									<span className={s.experienceWorking}>as {isRegular ? 'full-time' : 'freelance'}</span>
									<time className={s.experienceDate}>{date}</time>
								</div>
							</li>
						)
					})}
				</ul>
			</div>
		</div>
	)
}
