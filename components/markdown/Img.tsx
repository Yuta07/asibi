import Image from 'next/image'

type Props = {
	alt: string
	src: string
}

export const Img = ({ alt, src }: Props) => {
	return (
		<div>
			<Image quality={90} src={src} alt={alt} className="amp-image" width={540} height={320} />
			<style jsx>{`
				amp-img {
					border-radius: 15px;
				}
			`}</style>
		</div>
	)
}
