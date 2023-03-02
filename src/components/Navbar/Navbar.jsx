import s from './Navbar.module.css';
import { NavLink } from 'react-router-dom';

function Navbar(props) {
  return (
    <nav className={ s.nav }>
      <div className={ s.item }>
        <NavLink to="/vitamins" className={ ({ isActive }) => isActive ? s.activeLink : undefined }>Витамины</NavLink>
      </div>
      <div className={ s.item }>
        <NavLink to="/acids" className={ ({ isActive }) => isActive ? s.activeLink : undefined }>Аминокислоты</NavLink>
      </div>
      <div className={ s.item }>
        <NavLink to="/suplimentes" className={ ({ isActive }) => isActive ? s.activeLink : undefined }>БАДы</NavLink>
      </div>
      <div className={ s.item }>
        <NavLink to="/diets" className={ ({ isActive }) => isActive ? s.activeLink : undefined }>Диета</NavLink>
      </div>
    </nav>
  )
};

export default Navbar;