import { SEO } from '@/components/common/SEO'
import { Home } from '@/components/feature/home'

export default function HomePage() {
	return (
		<>
			<SEO openGraph={{ type: 'website' }} />
			<Home />
		</>
	)
}
