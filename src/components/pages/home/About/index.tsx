import Image from 'next/image'
import Link from 'next/link'

import s from './styles.module.css'

export const About = () => {
	return (
		<section className={s.container}>
			<div className={s.upper}>
				<h2 className={s.title}>About me</h2>
				<p className={s.aboutImageSp}>
					<Image alt="asibi's about image" height={100} src="/assets/top/about-rogue.webp" width={80} />
				</p>
			</div>
			<div className={s.content}>
				<div className={s.inner}>
					<div className={s.intro}>
						<h3 className={s.me}>Hi there. I'm asibi a.k.a Yuta07.</h3>
						<p className={s.description}>
							Web Frontend Engineer, born in Nagoya, lives in Kawasaki.Mainly Focused on React and arround frontend.
						</p>
					</div>
					<div className={s.more}>
						<Link className={s.moreLink} href="/about">
							Read more →
						</Link>
					</div>
				</div>
				<p className={s.aboutImage}>
					<Image alt="asibi's about image" height={140} src="/assets/top/about-rogue.webp" width={120} />
				</p>
			</div>
		</section>
	)
}
