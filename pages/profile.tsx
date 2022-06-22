import { LayoutWithHeader } from '@/components/common/Layout/LayoutWithHeader'
import { SEO } from '@/components/common/SEO'
import { Profile } from '@/components/feature/profile'

import type { ReactElement } from 'react'

export default function ProfilePage() {
	return (
		<>
			<SEO title="Profile" />
			<Profile />
		</>
	)
}

ProfilePage.getLayout = function getLayout(page: ReactElement) {
	return <LayoutWithHeader>{page}</LayoutWithHeader>
}
