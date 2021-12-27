import { useRouter } from 'next/router'

type Props = {
	total: number
}

export const ParamHeader = ({ total }: Props) => {
	const router = useRouter()
	const { category } = router.query

	let paramsTxt = ''

	if (category) {
		paramsTxt = `${category.toString()} カテゴリのエントリは${total}件あります`
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
