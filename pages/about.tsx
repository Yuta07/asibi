import { Layout } from '@/components/common/Layout'
import { SEO } from '@/components/common/SEO'

import type { ReactElement } from 'react'

export default function About() {
	return (
		<>
			<SEO title="About" description="About Me" openGraph={{ url: '/profile', type: 'article' }} />
		</>
	)
}

About.getLayout = function getLayout(page: ReactElement) {
	return <Layout>{page}</Layout>
}
