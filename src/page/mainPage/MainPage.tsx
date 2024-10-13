import { Button, Stack } from '@mantine/core'
import { AnimatePresence, motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import AboutMe from '../../components/aboutMe/AboutMe.tsx'

const MainPage = () => {
    const navigate = useNavigate()
    const [isExiting, setIsExiting] = useState(false)

    const handleNavigate = () => {
        setIsExiting(true)

        setTimeout(() => {
            navigate('/explore')
        }, 500)
    }

    return (
        <Stack w="100%" gap={0}>
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
                            exit={{ opacity: 0, y: 200 }} // Нижний блок перемещается вниз
                            transition={{ duration: 0.5 }}
                        >
                            <h3>Bottom Component</h3>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>

            <Button onClick={handleNavigate}>Go to Explore</Button>
        </Stack>
    )
}

export default MainPage