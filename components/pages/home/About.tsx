import Link from 'next/link'

import s from './About.module.css'

export const About = () => {
	return (
		<section className={s.container}>
			<div className={s.inner}>
				<div className={s.meteor}>
					<img alt="" className={s.meteorImage} height="auto" src="/assets/meteor.webp" width="320px" />
				</div>
				<h1 className={s.hero}>Hi, I'm asibi3Q.</h1>
				<div>
					<p className={s.intro}>
						Web Frontend Engineer, born in Nagoya, lives in Kawasaki.
						<Link className={s.more} href="/about">
							Read more<span>-&gt;</span>
						</Link>
					</p>
				</div>
			</div>
		</section>
	)
}
