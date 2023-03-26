import { TsuredureSidebar } from '@/components/common/Sidebar/TsuredureSidebar'

import { About } from './About'
import s from './Home.module.css'
import Posts from './Posts'

export const Home = () => {
	return (
		<main className={s.container}>
			<About />
			<div className={s.content}>
				{/* @ts-expect-error Async Server Component */}
				<Posts />
				<TsuredureSidebar />
			</div>
		</main>
	)
}
