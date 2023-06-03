import Blog from '@/components/pages/blog'

export default function Page({ params: { tag } }: { params: { tag: string | undefined } }) {
	return <Blog tag={tag} />
}
