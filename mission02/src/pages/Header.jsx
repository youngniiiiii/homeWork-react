import { Link } from 'react-router-dom';

function Header() {
  return <header className="bg-black text-white p-4">
    <h2>Header</h2>
    <div className='flex gap-4 text-sm'>
      <Link className='text-xs' to="/">Home</Link>
      <Link className='text-xs' to="/cta">CTA</Link>
      <Link className='text-xs' to="/container">Container</Link>
    </div>
  </header>;
}

export default Header;
