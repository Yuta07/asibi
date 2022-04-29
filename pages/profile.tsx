import { LayoutWithHeader } from '@/components/common/Layout/LayoutWithHeader'
import { Profile } from '@/components/feature/profile'

import type { ReactElement } from 'react'

export default function ProfilePage() {
	return <Profile />
}

ProfilePage.getLayout = function getLayout(page: ReactElement) {
	return <LayoutWithHeader>{page}</LayoutWithHeader>
}
