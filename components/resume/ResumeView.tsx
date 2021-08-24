import { About } from './About'
import { Education } from './Education'
import { Experience } from './Experience'
import { Others } from './Others'
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
			<Skills />
			<Experience />
			<Education />
			<Others />
		</div>
	)
}
