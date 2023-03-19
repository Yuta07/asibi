import { About } from './About'
import s from './Home.module.css'
import { HomeHeader } from './HomeHeader'
import Posts from './Posts'

export const Home = () => {
	return (
		<main className={s.container}>
			<HomeHeader />
			<div className={s.inner}>
				<About />
				{/* @ts-expect-error Async Server Component */}
				<Posts />
			</div>
		</main>
	)
}
