import { Link } from 'react-router-dom'

function Header() {
  return (
    <header className="bg-black text-white p-4 flex items-center  justify-between ">
      <h1>
        <Link to="/"> lumière de l'aube </Link>
      </h1>

      <div className="flex gap-4 text-sm ">
        <Link className="text-xs" to="/Products">
          Products
        </Link>

        <Link className="text-xs" to="/SignUp">
          SignUp
        </Link>
        <Link className="text-xs" to="/SignIn">
          SignIn
        </Link>
      </div>
    </header>
  )
}

export default Header
