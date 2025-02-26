import React from 'react'
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className='bg-red-400 fixed w-full text-black font-semibold p-4 flex justify-between'>
        <h1 className='text-xl font-bold'>Data Listing</h1>
        <nav>
            <Link to={'/'} className='mr-4 text-[18px]'>Home</Link>
            <Link to={'/techData'} className='text-[18px]'>TechData</Link>
        </nav>
    </header>
  )
}

export default Header