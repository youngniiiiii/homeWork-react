import Layout from './layout/Layout'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import SignUp from './pages/SignUp'
import SignIn from './pages/SingIn'
import Cart from './pages/Cart'
import Home from './pages/Home'
import ProductPage from './pages/ProductPage'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'ProductPage', element: <ProductPage /> },
      { path: 'SignUp', element: <SignUp /> },
      { path: 'SignIn', element: <SignIn /> },
      { path: 'Cart', element: <Cart headline="Cart" colorClassName="bg-indigo-100" /> },
    ],
  },
])

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
