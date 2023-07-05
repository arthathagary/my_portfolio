import React from 'react'

const Navbar = () => {
  return (
    <nav className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-50'>
    <h1>Logo</h1>
    <ul className='flex'>
        <li>Home</li>
        <li>About</li>
        <li>Skills</li>
        <li>Projects</li>
        <li>Contact</li>
    </ul>
    </nav>
  )
}

export default Navbar