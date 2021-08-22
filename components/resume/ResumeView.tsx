import { About } from './About'
import { Experience } from './Experience'
import { Profile } from './Profile'
import { Skills } from './Skills'
import styles from './ResumeView.module.scss'

export const ResumeView = () => {
	return (
		<div className={styles.container}>
			<div className={styles.curriculum}>
				<h1 className={styles.hero}>CURRICULUM VITAE</h1>
				<span className={styles.txt}>職務経歴書</span>
			</div>
			<Profile />
			<About />
			<Experience />
			<Skills />
		</div>
	)
}
