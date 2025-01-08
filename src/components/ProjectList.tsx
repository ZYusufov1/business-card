import React, { useEffect, useState } from 'react'
import fetchRepositories from '../fetchRepositories.ts'
import { Anchor, Card, Flex, Stack, Text } from '@mantine/core'
import { useMediaQuery } from '@mantine/hooks'

interface Project {
    repoName: string;
    repoUrl: string;
    projectUrl: string;
    label: string;
    preview: string;
}

const ProjectList: React.FC = () => {
    const [projects, setProjects] = useState<Project[]>([])
    const isMobile = useMediaQuery('(max-width: 768px)')
    const Layout = isMobile ? Stack : Flex
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const loadProjects = async () => {
            try {
                const data = await fetchRepositories()
                setProjects(data || [])
            } catch (error) {
                console.error('Error download projects:', error)
            } finally {
                setLoading(false)
            }
        }

        loadProjects()
    }, [])

    if (loading) {
        return <div>Download...</div>
    }

    return (
        <Layout pl={!isMobile ? 133 : 38} pr={!isMobile ? 105: 38} pt={38} pb={38} gap={20} w="100%">
            {projects.map((project) => (
                <Card
                    key={project.repoName}
                    style={{
                        background: '#B4B4B4',
                        borderRadius: '15px',
                        width: !isMobile ? '400px' : '100%',
                        maxWidth: !isMobile ? '400px' : '768px',
                        maxHeight: '350px',
                        margin: !isMobile ? '8px' : 'auto',
                        padding: '16px',
                        minWidth: !isMobile ? 'max-content' : 'auto',
                        textAlign: 'center',
                    }}
                >
                    <Text mb={15} fw={600} size="18px">{project.label}</Text>

                    <Anchor
                        href={project.projectUrl}
                        c="black"
                        target="_blank"
                        rel="noopener noreferrer"
                        w="inherit"
                    >
                        <img

                            src={project.preview}
                            alt={project.label}
                            style={{ width: '100%', height: '250px',objectFit: 'cover', borderRadius: '4px' }}
                        />
                    </Anchor>

                    <Anchor
                        href={project.repoUrl}
                        c="black"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Open repo
                    </Anchor>
                </Card>
            ))}
        </Layout>
    )
}

export default ProjectList
