import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { darcula } from 'react-syntax-highlighter/dist/cjs/styles/prism'

import styles from './BlockCode.module.scss'

type Props = {
	readonly language: string
	readonly value: string
}

export const BlockCode = ({ language, value }: Props) => {
	return (
		<div className={styles.container}>
			<SyntaxHighlighter data-testid="markdown-blockcode" language={language} style={darcula}>
				{value}
			</SyntaxHighlighter>
		</div>
	)
}
