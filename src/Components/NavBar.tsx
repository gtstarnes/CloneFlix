import React from 'react'

const NavBar = () => {
  return (
    <nav className="flex justify-between items-center p-4 z-[100] absolute w-full">
        <h1 className="text-4xl text-red-600 font-bold cursor-pointer">CloneFlix</h1>
        <div>
            <button className="pr-4">Sign In</button>
            <button className="bg-red-600 px-6 py-2 rounded curosr-pointer">Sign Out</button>
        </div>
    </nav>
  )
}

export default NavBar