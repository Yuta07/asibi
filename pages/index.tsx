import { Home } from '@/components/feature/home'
import { generatedRssFeed } from '@/lib/feed'

export const getStaticProps = async () => {
	generatedRssFeed()
}

export default function HomePage() {
	return <Home />
}
