import { Burger, Flex } from '@mantine/core'
import CustomNavbar from '../../components/customNavbar/CustomNavbar.tsx'
import { AnimatePresence, motion } from 'framer-motion'
import WorkProjects from '../../components/workProjects/WorkProjects.tsx'
import styles from './../../syles/CustomScrollBar.module.css'
import { useState } from 'react'
import { useMediaQuery } from '@mantine/hooks'
import ProjectList from '../../components/ProjectList.tsx'

const ProjectsListPage = () => {
    const isMobile = useMediaQuery('(max-width: 768px)')
    const [isExiting, setIsExiting] = useState(false)
    const [activeLink, setActiveLink] = useState('Work Project')
    const [isNavbarVisible, setIsNavbarVisible] = useState(false) // Управление видимостью Navbar

    const handleBackdropClick = () => {
        if (isMobile) {
            setIsNavbarVisible(false)
        }
    }

    return (
        <Flex style={{ background: '#242423' }}>
            {isMobile && isNavbarVisible && (
                <div
                    onClick={handleBackdropClick}
                    style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        background: 'rgba(0, 0, 0, 0.5)',
                        zIndex: 900,
                    }}
                ></div>
            )}

            <AnimatePresence>
                {!isExiting && (isMobile ? isNavbarVisible : true) && (
                    <motion.div
                        initial={{ opacity: 0, x: -200 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -200 }}
                        transition={{ duration: 0.5 }}
                        style={isMobile ? {
                            position: 'absolute',
                            left: 0,
                            top: 0,
                            height: !isMobile ? '100vh' : '100svh',
                            zIndex: 1000,
                        } : {}}
                    >
                        <CustomNavbar
                            isMobile={isMobile}
                            setIsExiting={setIsExiting}
                            setActiveLink={setActiveLink}
                            activeLink={activeLink}
                        />
                    </motion.div>
                )}
            </AnimatePresence>
            
            <motion.div
                initial={{ opacity: 0, x: 200 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                exit={{ opacity: 0, x: 200 }}
                style={{ width: '100%', height: !isMobile ? '100vh' : '100svh' }}
                className={styles.scrollBar}
            >
                {isMobile && (
                    <Flex gap={40} w="100%" bg="#111111" h={80} pl={35} align="center">
                        <Burger
                            lineSize={5}
                            size="xl"
                            className={styles.burger}
                            opened={isNavbarVisible}
                            onClick={() => setIsNavbarVisible((prev) => !prev)}
                            color="white"
                        />

                        <div className={styles.activeSection}>{activeLink}</div>
                    </Flex>
                )}

                {activeLink === 'Work Project' && (<WorkProjects isMobile={isMobile} />)}

	            {activeLink === 'Home Project' && (<ProjectList />)}
            </motion.div>
        </Flex>
)
}

export default ProjectsListPage