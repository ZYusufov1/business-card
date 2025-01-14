import React from 'react'
import { Anchor, Card, Flex, Stack, Text } from '@mantine/core'
import { useMediaQuery } from '@mantine/hooks'
import { useSelector } from 'react-redux'
import { selectError, selectLoading, selectProjects } from '../../store/projects/slice.ts'
import skeletonStyles from '../../styles/Skeleton.module.css'
import { Project } from '../../store/projects/types.ts'

const HomeProjects: React.FC = () => {
    const isMobile = useMediaQuery('(max-width: 768px)')
    const Layout = isMobile ? Stack : Flex
    const projects = useSelector(selectProjects).filter((item: Project) => item.type != 'Game')
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
        <Layout
            wrap="wrap"
            pl={!isMobile ? 24 : 38}
            pr={!isMobile ? 24: 38}
            pt={38}
            pb={38}
            gap={20}
            h="min-content"
            w="100%"
        >
            {loading ? (
                    Array.from({ length: 6 }).map((_, index) => (
                        <Card
                            key={index}
                            style={{
                                background: '#B4B4B4',
                                borderRadius: '15px',
                                width: !isMobile ? '400px' : '100%',
                                maxWidth: !isMobile ? '400px' : '768px',
                                height: '400px',
                            }}
                            className={skeletonStyles.skeleton}
                        />
                    ))
            ) : (
                projects.map((project) => (
                        <Card
                            key={project.repoName}
                            style={{
                                background: '#B4B4B4',
                                borderRadius: '15px',
                                width: !isMobile ? '400px' : '100%',
                                maxWidth: !isMobile ? '400px' : 'none',
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
                ))
            )}
        </Layout>
    )
}

export default HomeProjects
