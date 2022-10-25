import { Accounts } from '@/components/common/Accounts'
import { Layout } from '@/components/common/Layout'
import { PageTitle } from '@/components/common/PageTitle'
import { SEO } from '@/components/common/SEO'
import styles from '@/styles/About.module.scss'

import type { ReactElement } from 'react'

export default function About() {
	return (
		<>
			<SEO title="About" description="About Me" openGraph={{ url: '/profile', type: 'article' }} />
			<div className={styles.container}>
				<PageTitle title="About" />
				<div>
					<p>
						Hi, I’m a web frontend engineer living in Kanagawa from Aichi, Japan.
						<br />I like Udon and walking. I love football.
					</p>
					<p className={styles.paragraph}>
						After a year of SaaS customization and feature development experience, I became responsible for development
						in the frontend area.
						<br />
						Currently focusing mainly on React / Next.js.
					</p>
				</div>
				<div>
					<h2 className={styles.subHeading}>Accounts</h2>
					<div className={styles.accoutns}>
						<Accounts />
					</div>
				</div>
			</div>
		</>
	)
}

About.getLayout = function getLayout(page: ReactElement) {
	return <Layout>{page}</Layout>
}
