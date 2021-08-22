import { Personal } from '../components/atoms/Personal'
import { ScrollToTopButton } from '../components/atoms/ScrollToTopButton'
import { SkillList } from '../components/organisms/SkillList'
import { ExperienceList } from '../components/organisms/ExperienceList'
import { Works } from '../components/organisms/Works'

export const config = { amp: true }

export default function Resume() {
	return (
		<div className="resume">
			<Personal />
			<SkillList />
			<ExperienceList />
			<Works />
			<ScrollToTopButton />
			<style jsx>{`
				.resume {
					display: flex;
					flex-direction: column;
				}
			`}</style>
		</div>
	)
}
