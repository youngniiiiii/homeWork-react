import Footer from './Footer'
import Header from './Header'
import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <div className="Layout bg-indigo-100">
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default Layout
