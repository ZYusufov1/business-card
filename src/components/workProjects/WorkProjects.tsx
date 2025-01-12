import { Divider, Stack, Text } from '@mantine/core'
import styles from './WorkProjects.module.css'

interface WorkProjectsProps {
	isMobile?: undefined | boolean
}

const WorkProjects = ({ isMobile }: WorkProjectsProps) => {
	//TODO will write a real projects in future
	const projectList = [
		{
			name: 'Project name',
			description: 'Project description'
		},
		{
			name: 'Project name',
			description: 'Project description'
		},
		{
			name: 'Project name',
			description: 'Project description'
		},
	]

	return (
		<Stack pl={!isMobile ? 24 : 38} pt={38} pr={!isMobile ? 67: 38} pb={38} gap={36} w="100%">
			{projectList.map((item, index) => (
				<Stack
					key={index}
					gap={0}
					style={{ background: '#B4B4B4' }}
					pl={30}
					pr={30}
					pt={6}
					pb={6}
					mih={359}
					className={styles.projectInfo}
				>
					<Text c="black" fw={600} fz={25} mb={7}>{item.name}</Text>

					<Divider color="black"/>

					<Text c="#111111" fw={600} fz={24} mt={23}>{item.description}</Text>
				</Stack>
			))}
		</Stack>
	)
}

export default WorkProjects