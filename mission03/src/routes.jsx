import Layout from './layout/Layout'
import SignUp from './pages/SignUp'
import SignIn from './pages/SingIn'

import Home from './pages/Home'

import Products from './pages/Products'
import ProductEdit from './pages/ProductEdit'
import { Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="Products" element={<Products />} />
      <Route path="product/edit/:productId" element={<ProductEdit />} />

      <Route path="SignUp" element={<SignUp />} />
      <Route path="SignIn" element={<SignIn />} />
    </Route>
  )
)

export default router
