import React from 'react';
import './NavBar.css';
import {NavLink} from 'react-router-dom';

function NavBar() {
  return (
    <nav className="menu">
      <NavLink to="/"  className={({isActive}) =>  (isActive ? "menu__item_active" : "menu__item")}>Начало</NavLink>
      <NavLink to="/teaching" className={({isActive}) =>  (isActive ? "menu__item_active" : "menu__item")}>Обучение</NavLink>
     
     <NavLink to="/technical" className={({isActive}) =>  (isActive ? "menu__item_active" : "menu__item")}>Технический курс</NavLink>
     <NavLink to="/fisrules" className={({isActive}) =>  (isActive ? "menu__item_active" : "menu__item")}>10 правил FIS</NavLink>
    </nav>
  );
}

export default NavBar;