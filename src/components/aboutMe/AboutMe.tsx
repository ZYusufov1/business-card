import { Flex, Stack, Text, Image, Group } from '@mantine/core'
import styles from './AboutMe.module.css'
import { useMediaQuery } from '@mantine/hooks'

const AboutMe = () => {
    const isMobile = useMediaQuery('(max-width: 768px)')

    const name = 'Zaur Yusufov'
    const hardSkills = 'HTML5, CSS3, SASS/SCSS, Flexbox, Grid, JavaScript (ES6+), React, Redux, Webpack, npm, Vite, ' +
        'Git, GitHub, Figma, REST API, Fetch, Axios, TypeScript'
    const aboutMe = 'I am a dedicated Front-End Developer with solid experience in building responsive and interactive ' +
        'web applications. Proficient in HTML, CSS, and JavaScript, I specialize in React and have worked with various ' +
        'front-end tools to create user-friendly interfaces. I enjoy collaborating with teams, continuously improving ' +
        'my skills, and staying up-to-date with the latest web technologies to deliver high-quality, scalable code. ' +
        'While I work well in a team environment, I am also comfortable taking on projects independently.'

    return (
        <Stack className={styles.block} w="100%" pt={!isMobile ? 27 : 12} pl={!isMobile ? 73 : 38} pr={!isMobile ? 73 : 38} pb={48} gap={!isMobile ? 77 : 20}>
            <Text fw={600} fz={!isMobile ? 100 : 35} c="white" ta="center" m={0}>{name}</Text>

            <Flex gap={34}>
                {!isMobile ? (
                    <>
                        <Stack gap={37}>
                            <Group className={styles.aboutMe} mih={153} w="79%" align="start">
                                <Text fz={25} p="10px 17px" w="100%">About me: {aboutMe}</Text>
                            </Group>

                            <Group className={styles.hardSkills} mih={87} w="100%" align="start">
                                <Text fz={25} p="10px 17px">Hard skills: {hardSkills}</Text>
                            </Group>
                        </Stack>

                        <Image w={185} radius={10} h="auto" src="/business-card/assets/mainPhoto.jpg" className={styles.mainPhoto} ml="auto"/>
                    </>
                ) : (
                    <Stack>
                        <Flex gap={20}>
                            <Group
                                flex={2}
                                className={styles.aboutMe}
                                mih={153}
                                w="79%"
                                align="start"
                            >
                                <Text fz={14} p="10px 17px" w="100%">About me: {aboutMe}</Text>
                            </Group>

                            <Stack
                                flex={1}
                            >
                                <Image
                                    w="auto"
                                    h={157}
                                    radius={10}
                                    src="/business-card/assets/mainPhoto.jpg"
                                    className={styles.mainPhoto}
                                />

                                <Group className={styles.hardSkills} mih={87} w="100%" align="start">
                                    <Text fz={14} p="10px 17px">Hard skills: {hardSkills}</Text>
                                </Group>
                            </Stack>
                        </Flex>

                    </Stack>
                )}
            </Flex>
        </Stack>
    )
}

export default AboutMe