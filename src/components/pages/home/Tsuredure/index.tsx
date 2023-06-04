import Link from 'next/link'

import s from './styles.module.css'

export const Tsuredure = () => {
	return (
		<div>
			<div className={s.tsuredureHeader}>
				<h2 className={s.hero}>Tsuredure Days</h2>
				<Link className={s.moreLink} href="/tsuredure">
					View more tsuredure<span>→</span>
				</Link>
			</div>
			<div className={s.tsuredureContainer}>
				<img height={40} src="/link/tsuredure.svg" width={40} />
				<p className={s.waitTxt}>Please wait a little longer.</p>
			</div>
		</div>
	)
}
