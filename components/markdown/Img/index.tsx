import Image from 'next/image'

type Props = {
	alt: string
	src: string
	layout?: 'fill' | 'fixed' | 'intrinsic' | 'responsive' | 'raw' | undefined
}

export const Img = ({ alt, src, layout = 'raw' }: Props) => {
	const baseStyle = { maxWidth: '100%', height: 'auto', borderRadius: '8px' }

	return (
		<>
			<p className="container">
				<Image
					src={src}
					alt={alt}
					width={560}
					height={layout === 'raw' ? 0 : 240}
					layout={layout}
					quality={85}
					style={layout === 'raw' ? { ...baseStyle, objectFit: 'contain' } : { borderRadius: '8px' }}
					priority={true}
					objectFit={layout === 'raw' ? undefined : 'contain'}
				/>
			</p>
			<style jsx>{`
				.container {
					margin: 40px 0;
					display: block;
					text-align: center;
				}
			`}</style>
		</>
	)
}
