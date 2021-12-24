import { useRouter } from 'next/router'

type Props = {
	total: number
}

export const ParamHeader = ({ total }: Props) => {
	const router = useRouter()
	const { category, tag } = router.query

	let paramsTxt = ''
	if (category) {
		paramsTxt = `カテゴリが ${category.toString()} のエントリは${total}件あります`
	}
	if (tag) {
		const upperTag = tag.toString().charAt(0).toUpperCase() + tag.slice(1)
		const regTag = upperTag.replace('-', '.')

		paramsTxt = `タグが #${regTag} のエントリは${total}件あります`
	}

	return (
		<p className="container">
			{paramsTxt}
			<style jsx>{`
				.container {
					padding: 40px 0;
					color: var(--color-gray);
					font-size: var(--font-size-m);
					text-align: center;
				}
			`}</style>
		</p>
	)
}
