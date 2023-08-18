import { Link } from 'react-router-dom'

function Header() {
  return (
    <header className="bg-[#103059] text-white p-4 flex items-center  justify-between ">
      <h1>lumière de l'aube</h1>
      <div className="flex gap-4 text-sm ">
        <Link className="text-xs" to="/">
          Home
        </Link>
        <Link className="text-xs" to="/ProductPage">
          Product Page
        </Link>
        <Link className="text-xs" to="/SignUp">
          SignUp
        </Link>
        <Link className="text-xs" to="/SignIn">
          SignIn
        </Link>
        <Link className="text-xs" to="/Cart">
          Cart
        </Link>
      </div>
    </header>
  )
}

export default Header
