import { AboutMe } from '@/components/pages/about/AboutMe'
import { Experience } from '@/components/pages/about/Experience'
import { Explore } from '@/components/pages/about/Explore'
import { QuickLinks } from '@/components/pages/about/QuickLinks'
import { PageTitle } from '@/components/ui/PageTitle'

import s from './styles.module.css'

export default function Page() {
	return (
		<div className={s.container}>
			<PageTitle>About Me</PageTitle>
			<section className={s.aboutMeSection}>
				<AboutMe />
			</section>
			<section className={s.experienceSection}>
				<Experience />
			</section>
			<section className={s.exploreSection}>
				<Explore />
			</section>
			<section className={s.quickLinksSection}>
				<QuickLinks />
			</section>
		</div>
	)
}
