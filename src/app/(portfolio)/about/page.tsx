import { Metadata } from 'next'

import { AboutMe } from '@/components/pages/about/AboutMe'
import { Experience } from '@/components/pages/about/Experience'
import { Explore } from '@/components/pages/about/Explore'
import { QuickLinks } from '@/components/pages/about/QuickLinks'
import { PageTitle } from '@/components/ui/PageTitle'

import s from './styles.module.css'

export const metadata: Metadata = {
	title: 'About Me',
	description: "Welcome to asibi3Q's website. This page is about me.",
	openGraph: {
		type: 'article',
		url: 'https://asibi.dev/about',
		title: 'About Me',
		description: "Welcome to asibi3Q's website. This page is about me.",
	},
	alternates: {
		canonical: 'https://asibi.dev/about',
	},
}

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
