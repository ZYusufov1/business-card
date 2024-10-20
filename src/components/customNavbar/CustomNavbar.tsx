import { Text, Stack, Anchor } from '@mantine/core'
import ContactInfo from '../contactInfo/ContactInfo.tsx'
import { useNavigate } from 'react-router-dom'
import styles from './CustomNavbar.module.css'

interface CustomNavbarProps {
    setIsExiting: (value: boolean) => void,
    setActiveLink: (value: string) => void,
    activeLink: string
}

const CustomNavbar = ({ setIsExiting, setActiveLink, activeLink }: CustomNavbarProps) => {
    const navigate = useNavigate()

    const handleNavigate = () => {
        setIsExiting(true)

        setTimeout(() => {
            navigate('/')
        }, 500)
    }

    return (
        <Stack w={300} className={styles.navbar} justify="space-between" pt={38} pb={38}>
            <Stack gap={16} align="center">
                <Text className={styles.title} fz={30} fw={900}>PROJECTS</Text>

                <Stack gap={1} align="center" w='100%'>
                    <Text
                        className={`${styles.link} ${activeLink === 'All Projects' ? styles.active : ''}`}
                        fz={22}
                        fw={300}
                        pt={20}
                        pb={20}
                        w="100%"
                        onClick={() => setActiveLink('All Projects')}
                    >
                        All Projects
                    </Text>

                    <Text
                        className={`${styles.link} ${activeLink === 'Work Project' ? styles.active : ''}`}
                        fz={22}
                        fw={300}
                        pt={20}
                        pb={20}
                        w="100%"
                        onClick={() => setActiveLink('Work Project')}
                    >
                        Work Project
                    </Text>

                    <Text
                        className={`${styles.link} ${activeLink === 'Home Project' ? styles.active : ''}`}
                        pt={20}
                        pb={20}
                        fz={22}
                        fw={300}
                        w="100%"
                        onClick={() => setActiveLink('Home Project')}
                    >
                        Home Project
                    </Text>
                </Stack>

                <Text className={styles.title} fz={30} fw={900} mb={20}>GAMES</Text>

                <Anchor onClick={handleNavigate} className={styles.title} fz={30} fw={900} c="white">
                    MAIN PAGE
                </Anchor>
            </Stack>

            <Stack align="center">
                <ContactInfo orderResume={3} orderContact={2} orderMail={1} />
            </Stack>
        </Stack>
    )
}

export default CustomNavbar
