import { Anchor, Divider, Stack, Text, Flex } from '@mantine/core'
import { useNavigate } from 'react-router-dom'
import styles from './Projects.module.css'

interface IProjectsProps {
    setIsExiting: (value: boolean) => void
}

const Projects = ({ setIsExiting }: IProjectsProps) => {
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
            pl={73}
            pr={73}
            pt={57}
            pb={21}
            gap={24}
            className={styles.block}
        >
            <Stack gap={76}>
                {
                    projects.map((item) => (
                        <Stack gap={0}>
                            <Text c="white" fw={600} fz={25} mb="2.5">{item.name}</Text>

                            <Divider color="white"/>

                            <Text c="#B4B4B4" fw={600} fz={24} mt="17.5">{item.description}</Text>
                        </Stack>
                    ))
                }
            </Stack>

            <Flex justify="center">
                <Anchor onClick={handleNavigate} underline="hover" fw={600} fz={30} c="white">
                    View more
                </Anchor>
            </Flex>
        </Stack>
    )
}

export default Projects