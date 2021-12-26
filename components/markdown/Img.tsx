import Image from 'next/image'

type Props = {
	alt: string
	src: string
}

export const Img = ({ alt, src }: Props) => {
	return (
		<p className="container">
			<Image
				src={src}
				alt={alt}
				className="image"
				width={540}
				height={320}
				layout="responsive"
				quality={85}
				objectFit="contain"
				priority={true}
			/>
			<style jsx>{`
				.container {
					margin: 40px 0;
					display: block;
					text-align: center;
				}

				.image {
					max-width: 100%;
					border-radius: 15px;
					max-height: 400px;
				}
			`}</style>
		</p>
	)
}
