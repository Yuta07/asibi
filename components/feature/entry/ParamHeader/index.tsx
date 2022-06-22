import { useRouter } from 'next/router'

type Props = {
	total: number
}

export const ParamHeader = ({ total }: Props) => {
	const router = useRouter()
	const { category } = router.query

	const paramsTxt = category ? `${category.toString()} カテゴリのエントリは${total}件あります` : ''

	return (
		<p className="container" data-testid="param-header">
			{paramsTxt}
			<style jsx>{`
				.container {
					padding-bottom: 40px;
					color: var(--color-gray);
					font-size: var(--font-size-m);
					text-align: center;
				}
			`}</style>
		</p>
	)
}
