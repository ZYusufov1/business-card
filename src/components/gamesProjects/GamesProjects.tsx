import { Image, Stack, Text, Flex, Anchor, Card } from '@mantine/core'
import styles from './GamesProjects.module.css'
import { useSelector } from 'react-redux'
import { selectError, selectLoading, selectProjects } from '../../store/projects/slice.ts'
import { Project } from '../../store/projects/types.ts'
import skeletonStyles from '../../styles/Skeleton.module.css'

interface WorkProjectsProps {
	isMobile?: undefined | boolean
}

const GamesProjects = ({ isMobile }: WorkProjectsProps) => {
	const projects = useSelector(selectProjects).filter((item: Project) => item.type == 'Game')
	const Layout = isMobile ? Stack : Flex
	const loading = useSelector(selectLoading)
	const error = useSelector(selectError)

	if (error) {
		return (
			<Text c="white" fz={30} ml="auto" mr="auto" mt={20}>
				{error}
			</Text>
		)
	}

	return (
		<Stack pl={!isMobile ? 24 : 38} pt={38} pr={!isMobile ? 67: 38} pb={38} gap={36}>
			{loading ? (
				Array.from({ length: 3 }).map((_, index) => (
					<Card
						key={index}
						style={{
							background: '#B4B4B4',
							borderRadius: '15px',
							width: '100%',
							height: !isMobile ? '400px' : '500px',
						}}
						className={skeletonStyles.skeleton}
					/>
				))
			) : (
				projects.map((project, index) => (
				<Stack
					key={index}
					gap={0}
					style={{ background: '#B4B4B4' }}
					p={20}
					className={styles.projectInfo}
				>
					<Text c="black" fw={700} fz={!isMobile ? 50 : 28} mb={7}>
						{project.label + ' '}

						<Anchor
							href={project.repoUrl}
							c="black"
							target="_blank"
							rel="noopener noreferrer"
						>
							Open repo
						</Anchor>
					</Text>

					<Layout h="100%" align="flex-start" gap={20}>
						<Anchor
							flex={1}
							href={project.projectUrl}
							c="black"
							target="_blank"
							rel="noopener noreferrer"
							w="inherit"
						>
							<Image
								radius={12}
								mah="245px"
								fit="cover"
								src={project.preview}
								alt={project.label}
							/>
						</Anchor>

						<Text flex={4} c="#111111" fw={400} fz={!isMobile ? 24 : 18}>
							{project.description}
						</Text>
					</Layout>
				</Stack>
				))
			)}
		</Stack>
	)
}

export default GamesProjects