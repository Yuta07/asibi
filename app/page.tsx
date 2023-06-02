import { About } from '@/components/pages/home/About'
import Posts from '@/components/pages/home/Posts'

import s from './styles.module.css'

export default function Page() {
	return (
		<main className={s.wrapper}>
			<div className={s.container}>
				<About />
				<div className={s.content}>
					<Posts />
				</div>
			</div>
		</main>
	)
}
