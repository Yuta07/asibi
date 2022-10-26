import Image from 'next/future/image'

type Props = {
	alt: string
	src: string
}

const regExp = /jpg|jpeg|png|svg|gif/g

export const Img = ({ alt, src }: Props) => {
	return (
		<>
			<p className="container">
				<Image
					src={src}
					alt={alt}
					width={560}
					height={240}
					priority
					style={{
						maxWidth: '100%',
						height: 'auto',
						maxHeight: '320px',
						borderRadius: 'var(--line-radius-base)',
						objectFit: 'contain',
					}}
				/>
			</p>
			{!regExp.test(alt) && (
				<p className="alt-caption" data-testid="image-caption">
					{alt}
				</p>
			)}
			<style jsx>{`
				.container {
					margin: 40px 0;
					display: block;
					text-align: center;
				}

				.alt-caption {
					margin-bottom: 40px;
					color: var(--color-gray);
					font-size: var(--font-size-sm);
					text-align: center;
				}
			`}</style>
		</>
	)
}
