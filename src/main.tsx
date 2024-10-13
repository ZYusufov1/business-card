import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { MantineProvider } from '@mantine/core'
import { createHashRouter, RouterProvider } from 'react-router-dom'
import MainPage from './page/mainPage/MainPage.tsx'
import '@mantine/core/styles.css'
import './index.css'

const router = createHashRouter(
    [
        { path: '/', element: <MainPage /> },
        { path: '/explore', element: <div /> },
    ],
    { basename: '/business-card' }
)

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <MantineProvider>
            <RouterProvider router={router} />
        </MantineProvider>
    </StrictMode>
)
