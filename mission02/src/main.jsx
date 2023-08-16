import React from 'react'
import ReactDOM from 'react-dom/client'
import Layout from './pages/Layout'
import './styles/tailwind.css'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter(
  /* Routes */
  [
    /* Route Object */
    {
      path: '/',
      element: <Layout />,
      children: [
        { path: 'cta', element: <CTA /> },
        { path: 'container', element: <Container headline="Container" colorClassName="bg-indigo-500" /> },
      ],
    },
  ]
)

function CTA() {
  return (
    <div>
      <abbr title="Call To Action">CTA</abbr>
    </div>
  )
}

function Container({ headline, colorClassName, children }) {
  return (
    <section className={`h-screen ${colorClassName} p-5`}>
      <h2 className="text-black">{headline}</h2>
      {children}
    </section>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
