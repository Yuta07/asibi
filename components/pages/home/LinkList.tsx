import s from './LinkList.module.css'

type Props = {
	name: string
	link: string
	image: string
}

export const LinkList = ({ name, link, image }: Props) => {
	return (
		<li className={s.listItem}>
			<a className={s.link} href={link} rel="noopener noreferrer" target="_blank">
				<img alt={`link to ${name}`} height={20} src={image} width={20} />
				<span>{name}</span>
			</a>
		</li>
	)
}
