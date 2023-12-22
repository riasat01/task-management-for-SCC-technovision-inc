import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import MainRoute from './routes/main-route/MainRoute.jsx'
import AuthProvider from './provider/auth-provider/AuthProvider.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <div className="max-w-screen-2xl mx-auto">
        <RouterProvider router={MainRoute}></RouterProvider>
      </div>
    </AuthProvider>
  </React.StrictMode>,
)
