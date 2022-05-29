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
				layout="raw"
				sizes="(max-width: 767px) 320px, (min-width: 768px) 600px"
				quality={85}
				style={{ objectFit: 'contain' }}
				priority={true}
			/>
			<style jsx>{`
				.container {
					width: 100%;
					margin: 40px 0;
					display: block;
					text-align: center;
					position: relative;
				}

				.image {
					max-width: 100%;
					max-height: 400px;
					border-radius: 20px;
				}
			`}</style>
		</p>
	)
}
