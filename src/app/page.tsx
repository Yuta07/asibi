import { Header } from '@/components/common/Header'
import { About } from '@/components/pages/home/About'
import { Ordinary } from '@/components/pages/home/Ordinary'
import Posts from '@/components/pages/home/Posts'
import { Works } from '@/components/pages/home/Works'

import s from './styles.module.css'

export default function Page() {
	return (
		<>
			<div className={s.blank} />
			<Header />
			<main className={s.main}>
				<div className={s.grid}>
					<About />
					<Ordinary />
					<Works />
					<Posts />
				</div>
			</main>
		</>
	)
}
