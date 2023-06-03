import { AboutSidebar } from '@/components/common/Sidebar/AboutSidebar'

import s from './About.module.css'
import { AboutHeader } from './AboutHeader'
import { Explore } from './Explore'
import { Self } from './Self'

export default function About() {
	return (
		<div className={s.container}>
			<AboutHeader />
			<main className={s.content}>
				<div>
					<Self />
					<Explore />
				</div>
				<AboutSidebar />
			</main>
		</div>
	)
}
