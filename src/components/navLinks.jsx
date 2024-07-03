import React from 'react'
import { NavLink } from 'react-router-dom'
import CategoriesCard from './categoriesCard'

const NavLinks = () => {
  return (
    <div>
        <NavLink to="/eventDetails">
        <CategoriesCard/>

        </NavLink>
    </div>
  )
}

export default NavLinks