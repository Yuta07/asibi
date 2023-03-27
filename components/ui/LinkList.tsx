import Link from 'next/link'

import s from './LinkList.module.css'

type Props = {
	name: string
	link: string
	image: string
	isExternal: boolean
}

export const LinkList = ({ name, link, image, isExternal }: Props) => {
	return (
		<li itemProp="link">
			{!isExternal ? (
				<Link className={s.link} href={link}>
					<img alt={`link to ${name}`} height={20} src={image} width={20} />
					<span>{name}</span>
				</Link>
			) : (
				<a className={s.link} href={link} rel="noopener noreferrer" target="_blank">
					<img alt={`link to ${name}`} height={20} src={image} width={20} />
					<span>{name}</span>
				</a>
			)}
		</li>
	)
}
