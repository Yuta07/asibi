import Posts from '@/components/pages/blog'

export default function Page({ params: { tag } }: { params: { tag: string | undefined } }) {
	return <Posts tag={tag} />
}
