import { TsuredureSidebar } from '@/components/common/Sidebar/TsuredureSidebar'

import { About } from './About'
import s from './Home.module.css'
import Posts from './Posts'

export const Home = () => {
	return (
		<main className={s.container}>
			<About />
			<div className={s.content}>
				<Posts />
				<TsuredureSidebar />
			</div>
		</main>
	)
}
