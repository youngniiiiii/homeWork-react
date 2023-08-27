import Layout from './layout/Layout'
import SignUp from './pages/SignUp'
import SignIn from './pages/SingIn'
import Home from './pages/Home'
import { Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />

      <Route path="SignIn" element={<SignIn />} />
      <Route path="SignUp" element={<SignUp />} />
    </Route>
  )
)

export default router
