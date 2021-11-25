import { VFC } from 'react'
import TweetEmbed from 'react-tweet-embed'

export const TwitterCard: VFC<{ value: string }> = ({ value }) => {
	return <TweetEmbed id={value} options={{ theme: 'dark' }} />
}
