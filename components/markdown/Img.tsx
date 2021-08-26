import styles from './Img.module.scss'

type Props = {
	alt: string
	src: string
}

export const Img = ({ alt, src }: Props) => {
	return (
		<span className={styles.flame}>
			<img src={src} alt={alt} className={styles.image} width={540} height={320} />
		</span>
	)
}
