import { Flex } from '@mantine/core'
import CustomNavbar from '../../components/customNavbar/CustomNavbar.tsx'
import { AnimatePresence, motion } from 'framer-motion'
import WorkProjects from '../../components/workProjects/WorkProjects.tsx'
import styles from './../../syles/CustomScrollBar.module.css'
import { useState } from 'react'

const ProjectsListPage = () => {
    const [isExiting, setIsExiting] = useState(false)
    const [activeLink, setActiveLink] = useState('Work Project')

    return (
        <Flex style={{ background: '#242423' }}>
            <AnimatePresence>
                {!isExiting && (
                    <>
                    <motion.div
                        initial={{ opacity: 0, x: -200 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -200 }}
                        transition={{ duration: 0.5 }}
                    >
                        <CustomNavbar
                            setIsExiting={setIsExiting}
                            setActiveLink={setActiveLink}
                            activeLink={activeLink}
                        />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 200 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        exit={{ opacity: 0, x: 200 }}
                        style={{ width: '100%', height: '100vh' }}
                        className={styles.scrollBar}
                    >
                        {activeLink === 'Work Project' && (<WorkProjects />)}
                    </motion.div>
                </>
            )}
            </AnimatePresence>
        </Flex>
)
}

export default ProjectsListPage