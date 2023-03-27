import s from './Self.module.css'

export const Self = () => {
	return (
		<section className={s.container}>
			<h2 className={s.hello}>Hi there 👋</h2>
			<p className={s.intro}>I'm asibi3Q, Web Frontend engineer living in Kawasaki from 🏯 Nagoya, Japan.</p>
			<p className={s.intro}>
				After working as an SIer in research, maintenance, and customized development, I am working as a freelance
				frontend engineer. Mainly focused on React and Next.js.
				<a className={s.link} href="" rel="noopener noreferrer" target="_blank">
					View my CV<span>→</span>
				</a>
			</p>
		</section>
	)
}
