import { useRouter } from 'next/router'
import styled from 'styled-components'
import worksData from '../../content/works.json'

export default function WorkPage() {
	const router = useRouter()
	const { slug } = router.query

	const data = worksData.data.find((data) => {
		return data.slug === slug
	})

	if (data === undefined) return null

	const { image, title, overview, language, period, ref } = data

	return (
		<Content>
			{image.map((img, index) => {
				return <Img key={index} src={img} alt={`${title}-image-${index}`} />
			})}
			<Note>
				<Small>{period}</Small>
				<Title>{title}</Title>
				<Txt>{overview}</Txt>
				{language.map((lang, index) => {
					return (
						<Small key={lang}>
							{lang}
							{index + 1 !== language.length && ` / `}
						</Small>
					)
				})}
				<Link href={ref} target="_blank">
					<RefImg src="/links/github.svg" alt="github" />
					Source Code
				</Link>
			</Note>
		</Content>
	)
}

const Content = styled.div`
	max-width: 380px;
	margin: 0 auto;
	padding: 0 20px;
	display: flex;
	flex-direction: column;
`

const Img = styled.img`
	width: 100%;
	height: 280px;
	margin: 0 auto;
	object-fit: contain;
	background: #efefef;
	box-shadow: -6px -6px 14px rgba(255, 255, 255, 0.7), -6px -6px 10px rgba(255, 255, 255, 0.5),
		6px 6px 8px rgba(255, 255, 255, 0.075), 6px 6px 10px rgba(0, 0, 0, 0.15);
	border-radius: 30px;

	&:not(:first-child) {
		margin-top: 30px;
	}
`

const Note = styled.div`
	margin-top: 30px;
`

const Small = styled.small`
	font-size: 14px;
`

const Title = styled.h2`
	margin-top: 5px;
	font-size: 20px;
`

const Txt = styled.p`
	margin: 10px 0;
	color: #838386;
	font-size: 14px;
`

const Link = styled.a`
	color: #838386;
	font-size: 14px;
	display: flex;
	align-items: center;
	margin-top: 20px;
	padding: 8px 10px;
	box-shadow: -6px -6px 14px rgba(255, 255, 255, 0.7), -6px -6px 10px rgba(255, 255, 255, 0.5),
		6px 6px 8px rgba(255, 255, 255, 0.075), 6px 6px 10px rgba(0, 0, 0, 0.15);
	border-radius: 30px;
	transition: 0.3s ease-in-out;

	&:hover {
		color: #3fb0ac;
		box-shadow: -2px -2px 6px rgba(255, 255, 255, 0.6), -2px -2px 4px rgba(255, 255, 255, 0.4),
			2px 2px 2px rgba(255, 255, 255, 0.05), 2px 2px 4px rgba(0, 0, 0, 0.1);
	}
`

const RefImg = styled.img`
	width: 30px;
	height: 30px;
	margin: 0 20px 0 10px;
	display: inline-flex;
	transition: 0.3s ease-in-out;
`
