import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { darcula } from 'react-syntax-highlighter/dist/cjs/styles/prism'

type Props = {
	readonly language: string
	readonly value: string
}

export const BlockCode = ({ language, value }: Props) => {
	return (
		<div className="blog-blockcode">
			<SyntaxHighlighter language={language} style={darcula}>
				{value}
			</SyntaxHighlighter>
			<style jsx>{`
				.blog-blockcode {
					margin: 30px 0;
					font-size: 14px;
				}

				pre {
					color: #ffffff;
					background: #282c35;
				}
			`}</style>
		</div>
	)
}
