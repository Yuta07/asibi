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
					width={520}
					height={0}
					layout={layout}
					quality={85}
					style={layout === 'raw' ? { ...baseStyle, objectFit: 'contain' } : { ...baseStyle }}
					priority={true}
					objectFit={layout === 'raw' ? undefined : 'contain'}
				/>
			</p>
			<style jsx>{`
				.container {
					width: 100%;
					height: auto;
					margin: 40px 0;
					display: block;
					text-align: center;
					position: relative;
				}
			`}</style>
		</>
	)
}
