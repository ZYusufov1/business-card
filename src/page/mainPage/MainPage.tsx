import { Flex, Stack } from '@mantine/core'
import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import AboutMe from '../../components/aboutMe/AboutMe.tsx'
import Projects from '../../components/projects/Projects.tsx'
import ContactInfo from '../../components/contactInfo/ContactInfo.tsx'
import styles from './../../syles/CustomScrollBar.module.css'
import { useMediaQuery } from '@mantine/hooks'
import { useDispatch } from 'react-redux'
import { AppDispatch } from '../../store/store.ts'
import { fetchRepositoriesThunk } from '../../store/projects/actions.ts'

const MainPage = () => {
    const [isExiting, setIsExiting] = useState(false)
    const isMobile = useMediaQuery('(max-width: 768px)')
    const dispatch = useDispatch<AppDispatch>()

    useEffect(() => {
        dispatch(fetchRepositoriesThunk())
    }, [dispatch])

    return (
        <Stack
            w="100%"
            gap={0}
            style={{ background: '#1a1a1a', height: !isMobile ? '100vh' : '100svh' }}
            className={styles.scrollBar}
        >
            <AnimatePresence>
                {!isExiting && (
                    <>
                        <motion.div
                            initial={{ opacity: 1, y: -200 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -200 }}
                            transition={{ duration: 0.5 }}
                        >
                            <AboutMe isMobile={isMobile}/>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 1, y: 200 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 200 }}
                            transition={{ duration: 0.5 }}
                        >
                            <Projects setIsExiting={setIsExiting} isMobile={isMobile}/>

                            {!isMobile ? (
                                <Flex pl={73} pt={41} pb={49} pr={73} justify="space-between">
                                    <ContactInfo />
                                </Flex>
                            ) : (
                                <Stack pt={14} pb={14} align="center">
                                    <ContactInfo isMobile={isMobile}/>
                                </Stack>
                            )}
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </Stack>
    )
}

export default MainPage