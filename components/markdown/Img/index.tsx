'use client'

import Image from 'next/image'

type Props = {
	alt: string | undefined
	src: string | undefined
}

const regExp = /[.jpg|.jpeg|.png|.svg|.gif]/

export const Img = ({ alt, src }: Props) => {
	return (
		<>
			<p className="container">
				<Image
					alt={alt || ''}
					height={240}
					priority
					src={src || ''}
					style={{
						maxWidth: '100%',
						height: 'auto',
						maxHeight: '320px',
						borderRadius: '8px',
						objectFit: 'contain',
					}}
					width={560}
				/>
			</p>
			{alt && !regExp.test(alt) ? (
				<p className="alt-caption" data-testid="image-caption">
					{alt}
				</p>
			) : null}
			<style jsx>{`
				.container {
					margin: 40px 0;
					display: block;
					text-align: center;
				}

				.alt-caption {
					margin-bottom: 40px;
					color: var(--gray);
					font-size: var(--font-rem-sm);
					text-align: center;
				}
			`}</style>
		</>
	)
}
