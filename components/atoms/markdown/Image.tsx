type Props = {
	alt: string
	src: string
}

export const Image = ({ alt, src }: Props) => {
	return (
		<span className="amp-image-wrapper">
			<amp-img
				src={src}
				className="amp-image"
				fallback=""
				width="540"
				height="320"
				layout="intrinsic"
				alt={alt}
			></amp-img>
			<style jsx>{`
				.amp-image-wrapper {
					width: 100%;
					margin: 20px 0;
					padding: 50px;
					display: flex;
					justify-content: center;
					align-items: center;
					background: #efefef;
					box-shadow: inset 3px 3px 7px rgba(136, 165, 191, 0.48), inset -3px -3px 7px #ffffff;
					border-radius: 15px;
				}

				amp-img {
					border-radius: 15px;
				}
			`}</style>
		</span>
	)
}
