import { NextPage } from 'next'
import { NextSeo } from 'next-seo'

import { ResumeView } from '@components/resume/ResumeView'

const Resume: NextPage = () => {
	return (
		<>
			<NextSeo
				title="resume"
				description="yutaka miyazakiのレジュメ"
				openGraph={{
					type: 'website',
					title: 'yutaka miyazakiのレジュメ',
					description: 'yutaka miyazakiのレジュメ',
					url: 'https://yutaaaaa.dev/resume',
				}}
			/>
			<ResumeView />
		</>
	)
}

export default Resume
