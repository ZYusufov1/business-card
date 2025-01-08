import { Text, Stack, Anchor } from '@mantine/core'
import ContactInfo from '../contactInfo/ContactInfo.tsx'
import { useNavigate } from 'react-router-dom'
import styles from './CustomNavbar.module.css'

interface CustomNavbarProps {
	setIsExiting: (value: boolean) => void,
	setActiveLink: (value: string) => void,
	activeLink: string,
	isMobile?: undefined | boolean
}

const CustomNavbar = ({ setIsExiting, setActiveLink, activeLink, isMobile }: CustomNavbarProps) => {
	const navigate = useNavigate()

	const handleNavigate = () => {
		setIsExiting(true)

		setTimeout(() => {
			navigate('/')
		}, 500)
	}

	return (
		<Stack w={!isMobile ? 300 : 150} className={styles.navbar} justify="space-between" pt={!isMobile ? 38 : 20} pb={!isMobile ? 38 : 20}>
			<Stack gap={16} align="center">
				<Text className={styles.title} fz={!isMobile ? 30 : 20} fw={900}>PROJECTS</Text>

				<Stack gap={1} align="center" w='100%'>
					<Text
						className={`${styles.link} ${activeLink === 'All Projects' ? styles.active : ''}`}
						fz={!isMobile ? 22 : 14}
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
						fz={!isMobile ? 22 : 14}
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
                        fz={!isMobile ? 22 : 14}
                        pt={20}
                        pb={20}
						fw={300}
						w="100%"
						onClick={() => setActiveLink('Home Project')}
					>
						Home Project
					</Text>
				</Stack>

				<Text className={styles.title} fz={!isMobile ? 30 : 20} fw={900} mb={20}>GAMES</Text>

				<Anchor onClick={handleNavigate} className={styles.title} fz={!isMobile ? 30 : 20} fw={900} c="white">
					MAIN PAGE
				</Anchor>
			</Stack>

			<Stack align="center">
				<ContactInfo isMobile={isMobile} orderResume={3} orderContact={2} orderMail={1}/>
			</Stack>
		</Stack>
	)
}

export default CustomNavbar
