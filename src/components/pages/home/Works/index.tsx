import Image from 'next/image'

import s from './styles.module.css'

export const Works = () => {
	return (
		<section className={s.container}>
			<div className={s.upper}>
				<h2 className={s.title}>Works</h2>
				<p className={s.worksImageSp}>
					<Image alt="asibi's works image" height={100} src="/assets/top/works-runner.webp" width={64} />
				</p>
			</div>
			<div>
				<p className={s.worksImage}>
					<Image alt="asibi's works image" height={140} src="/assets/top/works-runner.webp" width={96} />
				</p>
			</div>
		</section>
	)
}
