import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { MantineProvider } from '@mantine/core'
import { createHashRouter, RouterProvider } from 'react-router-dom'
import MainPage from './page/mainPage/MainPage.tsx'
import ProjectsListPage from './page/projectsListPage/ProjectsListPage.tsx'
import '@mantine/core/styles.css'
import './index.css'

const router = createHashRouter(
    [
        { path: '/', element: <MainPage /> },
        { path: '/projectsList', element: <ProjectsListPage /> },
    ],
)

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <MantineProvider>
            <RouterProvider router={router} />
        </MantineProvider>
    </StrictMode>
)
