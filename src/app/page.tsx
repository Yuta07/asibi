import { HomeHeader } from '@/components/common/Header/HomeHeader'
import { About } from '@/components/pages/home/About'
import Posts from '@/components/pages/home/Posts'
import { Tsuredure } from '@/components/pages/home/Tsuredure'
import { Works } from '@/components/pages/home/Works'

import s from './styles.module.css'

const sectionComponents = [
	{ key: 'posts', component: Posts },
	{ key: 'works', component: Works },
	{ key: 'tsuredure', component: Tsuredure },
]

export default function Page() {
	return (
		<>
			<HomeHeader />
			<main className={s.main}>
				<div className={s.container}>
					<About />
					<div className={s.content}>
						{sectionComponents.map((compo) => {
							const Component = compo.component
							return (
								<section key={compo.key} className={s.homeSection}>
									<Component />
								</section>
							)
						})}
					</div>
				</div>
			</main>
		</>
	)
}
