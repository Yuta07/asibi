import Image from 'next/image'

import s from './styles.module.css'

type Props = {
	alt: string | undefined
	src: string | undefined
}

const regExp = /[.jpg|.jpeg|.png|.svg|.gif]/

export const Img = ({ alt, src }: Props) => {
	return (
		<>
			<p className={s.container}>
				<Image alt={alt || ''} height={240} priority src={src || ''} width={560} className={s.image} />
			</p>
			{alt && !regExp.test(alt) ? (
				<p className={s.caption} data-testid="image-caption">
					{alt}
				</p>
			) : null}
		</>
	)
}
