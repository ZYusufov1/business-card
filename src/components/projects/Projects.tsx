import { Anchor, Divider, Stack, Text, Flex } from '@mantine/core'
import { useNavigate } from 'react-router-dom'
import styles from './Projects.module.css'

interface IProjectsProps {
	setIsExiting: (value: boolean) => void,
	isMobile?: undefined | boolean
}

const Projects = ({ setIsExiting, isMobile }: IProjectsProps) => {
	const navigate = useNavigate()

	//TODO take data in GET API in the future
	const projects = [
		{
			name: 'Project name',
			description: 'Project description'
		},
		{
			name: 'Project name',
			description: 'Project description'
		},
	]

	const handleNavigate = () => {
		setIsExiting(true)

		setTimeout(() => {
			navigate('/projectsList')
		}, 500)
	}

	return (
		<Stack
			pl={!isMobile ? 73 : 38}
			pr={!isMobile ? 73 : 38}
			pt={!isMobile ? 57 : 39}
			pb={!isMobile ? 21 : 39}
			gap={!isMobile ? 24 : 71}
			className={styles.block}
		>
			<Stack gap={76}>
				{
					projects.map((item) => (
						<Stack gap={0}>
							<Text c="white" fw={600} fz={25} mb="2.5">{item.name}</Text>

							<Divider color="white"/>

							<Text c="#B4B4B4" fw={600} fz={!isMobile ? 24 : 20} mt="17.5">{item.description}</Text>
						</Stack>
					))
				}
			</Stack>

			<Flex justify="center">
				<Anchor onClick={handleNavigate} underline="hover" fw={600} fz={!isMobile ? 30 : 20} c="white" className={styles.gradientText}>
					View more
				</Anchor>
			</Flex>
		</Stack>
	)
}

export default Projects