import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { MantineProvider } from '@mantine/core'
import { createHashRouter, RouterProvider } from 'react-router-dom'
import { Provider as ReduxProvider } from 'react-redux'
import MainPage from './pages/mainPage/MainPage.tsx'
import ProjectsListPage from './pages/projectsListPage/ProjectsListPage.tsx'
import '@mantine/core/styles.css'
import './index.css'
import store from './store/store.ts'

const router = createHashRouter(
    [
        { path: '/', element: <MainPage /> },
        { path: '/projectsList', element: <ProjectsListPage /> },
    ],
)

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <ReduxProvider store={store}>
            <MantineProvider>
                <RouterProvider router={router} />
            </MantineProvider>
        </ReduxProvider>
    </StrictMode>
)
