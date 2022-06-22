import { LayoutWithHeader } from '@/components/common/Layout/LayoutWithHeader'
import { SEO } from '@/components/common/SEO'
import { Profile } from '@/components/feature/profile'
import config from '@/config/seo.json'

import type { ReactElement } from 'react'

export default function ProfilePage() {
	return (
		<>
			<SEO title="Profile" description="プロフィール" openGraph={{ url: `${config.openGraph.url}/profile` }} />
			<Profile />
		</>
	)
}

ProfilePage.getLayout = function getLayout(page: ReactElement) {
	return <LayoutWithHeader>{page}</LayoutWithHeader>
}
