import React from 'react'
import { NavLink } from 'react-router-dom';
const Header = () => {
    return (
        <div>
            <ul>
                <li>
                    <NavLink to='/'>Home</NavLink>
                </li>
                <li>
                    <NavLink to='/todos'>Todos</NavLink>
                </li>
            </ul>
        </div>
    )
}

export default Header