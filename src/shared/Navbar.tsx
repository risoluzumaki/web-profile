import { Link } from 'react-router';
import { FaGithub } from 'react-icons/fa';
import { SiNotion } from 'react-icons/si';

export default function Navbar () {
  return (
   <nav className="navbar bg-transparent backdrop-blur-2xl fixed top-0 z-50">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </div>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-1 p-2 shadow bg-base-100 rounded-box w-52 text-lg font-bold">
            <li><Link to="/" className='text-lg'>Home</Link></li>
            <li><Link to="/portfolio" className='text-lg'>Portfolio</Link></li>
            <li><Link to="/contact"className='text-lg'>Contact</Link></li>
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost text-2xl">RizkiDev.</Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-lg font-bold">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/portfolio">Portfolio</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </div>
      <div className="navbar-end">
        <a href="https://github.com" className="btn btn-ghost btn-circle mr-2" >
          <FaGithub className="text-2xl" />
        </a>
        <a href="https://notion.so" className="btn btn-ghost btn-circle">
          <SiNotion className="text-2xl" />
        </a>
      </div>
   </nav>
  )
}