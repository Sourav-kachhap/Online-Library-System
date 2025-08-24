import { NavLink } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="bg-blue-700 p-4">
      <ul className="flex gap-6 text-white font-semibold">
        <li><NavLink to="/" className={({isActive}) => isActive ? "text-yellow-300" : "hover:text-yellow-300"}>Home</NavLink></li>
        <li><NavLink to="/books" className={({isActive}) => isActive ? "text-yellow-300" : "hover:text-yellow-300"}>Browse Books</NavLink></li>
        <li><NavLink to="/add" className={({isActive}) => isActive ? "text-yellow-300" : "hover:text-yellow-300"}>Add Book</NavLink></li>
      </ul>
    </nav>
  );
}
