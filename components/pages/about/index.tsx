import s from './About.module.css'
import { AboutHeader } from './AboutHeader'

export default function About() {
	return (
		<div className={s.container}>
			<AboutHeader />
			<main className={s.main}>contents</main>
		</div>
	)
}
