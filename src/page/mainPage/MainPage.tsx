import { Stack } from '@mantine/core'
import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'
import AboutMe from '../../components/aboutMe/AboutMe.tsx'
import Projects from '../../components/projects/Projects.tsx'

const MainPage = () => {
    const [isExiting, setIsExiting] = useState(false)
    
    return (
        <Stack w="100%" gap={0} style={{ background: '#1a1a1a' }}>
            <AnimatePresence>
                {!isExiting && (
                    <>
                        <motion.div
                            initial={{ opacity: 1, y: 0 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -200 }}
                            transition={{ duration: 0.5 }}
                        >
                            <AboutMe/>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 1, y: 0 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 200 }}
                            transition={{ duration: 0.5 }}
                        >
                            <Projects setIsExiting={setIsExiting}/>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </Stack>
    )
}

export default MainPage