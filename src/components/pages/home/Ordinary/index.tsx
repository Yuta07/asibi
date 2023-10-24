import Image from 'next/image'

import s from './styles.module.css'

export const Ordinary = () => {
	return (
		<section className={s.container}>
			<div className={s.upper}>
				<h2 className={s.title}>Ordinary</h2>
				<p>
					<Image alt="asibi's ordinary image" height={80} src="/assets/top/ordinary-beginnings.webp" width={100} />
				</p>
			</div>
		</section>
	)
}
