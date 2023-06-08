import Link from 'next/link'

import s from './styles.module.css'

export const Works = () => {
	return (
		<div>
			<div className={s.worksHeader}>
				<h2 className={s.hero}>Recently Works</h2>
				<Link className={s.moreLink} href="/works">
					View more works<span>→</span>
				</Link>
			</div>
			<div className={s.worksContainer}>
				<img height={40} src="/link/tsuredure.svg" width={40} />
				<p className={s.waitTxt}>Please wait a little longer.</p>
			</div>
		</div>
	)
}
