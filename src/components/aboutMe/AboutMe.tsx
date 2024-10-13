import { Flex, Stack, Text, Image, Group } from '@mantine/core'
import styles from './AboutMe.module.css'

const AboutMe = () => {
    const name = 'Zaur Yusufov'

    return (
        <Stack className={styles.block} w="100%" pt={27} pl={73} pr={73} pb={48} gap={77}>
            <Text fw={600} fz={100} color="white" ta="center">{name}</Text>

            <Flex gap={34} p={40}>
                <Stack h={1000}  gap={100}>
                    <Group className={styles.aboutMe}>
                        <Text>About me:</Text>
                    </Group>

                    <Group className={styles.hardSkills}>
                        <Text>Hard skills:</Text>
                    </Group>
                </Stack>

                <Image w={185} h={277} src="src/assets/mainPhoto.jpg" className={styles.mainPhoto}/>
            </Flex>
        </Stack>
    )
}

export default AboutMe