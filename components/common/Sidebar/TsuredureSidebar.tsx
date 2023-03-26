import s from './TsuredureSidebar.module.css'

export const TsuredureSidebar = () => {
	return (
		<section className={s.sidebar}>
			<h2 className={s.hero}>Tsuredure</h2>
			<div className={s.content}>
				<img className={s.waitImage} height={40} src="/link/tsuredure.svg" width={40} />
				<p className={s.wait}>Please wait a little longer.</p>
			</div>
		</section>
	)
}
