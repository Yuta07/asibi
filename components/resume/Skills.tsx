import Image from 'next/image'
import styles from './Skills.module.scss'

const SKILLS = [
	{ name: 'JavaScript', image: 'javascript' },
	{ name: 'TypeScript', image: 'typescript' },
	{ name: 'React', image: 'react' },
	{ name: 'Next.js', image: 'nextjs' },
	{ name: 'GraphQL', image: 'graphql' },
	{ name: 'Sass', image: 'sass' },
	{ name: 'Figma', image: 'figma' },
]

export const Skills = () => {
	return (
		<div className={styles.container}>
			<h2 className={styles.title}>SKILLS</h2>
			<div className={styles.skills}>
				{SKILLS.map((skill) => {
					return (
						<div key={skill.name} className={styles.skill}>
							<Image quality={85} src={`/images/${skill.image}.svg`} alt="" width={40} height={40} />
							<p className={styles.language}>{skill.name}</p>
						</div>
					)
				})}
			</div>
		</div>
	)
}
