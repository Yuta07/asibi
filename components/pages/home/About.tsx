import Image from 'next/image'
import Link from 'next/link'

import s from './About.module.css'

export const About = () => {
	return (
		<section className={s.container}>
			<div>
				<Image alt="asibi's internet image" height={60} src="/icon/icon.svg" width={60} />
			</div>
			<div>
				<h1 className={s.heading}>Hi there, I'm asibi3Q.</h1>
				<p className={s.intro}>
					Web Frontend Engineer, born in Nagoya, lives in Kawasaki.
					<br />
					Mainly Focused on React and arround frontend.
					<Link className={s.more} href="/about">
						Read more<span>→</span>
					</Link>
				</p>
			</div>
		</section>
	)
}
