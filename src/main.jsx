import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import RouterList from './routerlist/RouterList'
import ContextRoute from './appcontext/ContextRoute'
import { RouterProvider } from 'react-router'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ContextRoute>
      <RouterProvider router={RouterList}>
      </RouterProvider>
    </ContextRoute>
  </StrictMode>,
)
