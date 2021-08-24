import styles from './Education.module.scss'

const EDUCATIONS = [
	{ name: 'HAL名古屋 高度情報処理学科', start: '2015', end: '2019' },
	{ name: '中京大学 経営学部', start: '2011', end: '2015' },
]

export const Education = () => {
	return (
		<div className={styles.container}>
			<h2 className={styles.title}>EDUCATION</h2>
			<div className={styles.content}>
				{EDUCATIONS.map((education) => {
					return (
						<div key={education.name} className={styles.education}>
							<div className={styles.period}>
								<p className={styles.year}>{education.start}</p>
								<p className={styles.end}>{education.end}</p>
							</div>
							<h3 className={styles.name}>{education.name}</h3>
						</div>
					)
				})}
			</div>
		</div>
	)
}
