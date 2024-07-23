'use client';
import React, { use } from 'react';
import Link from 'next/link';
import { AiFillBug } from "react-icons/ai";
import { usePathname } from 'next/navigation';
import classnames from 'classnames';

const NavBar = () => {
  const currentPath = usePathname();
  
   const links=[
    {lable:'Dashboard', href:'/'},
    {lable:'Issues', href:'/issues'},
   ]

  return (
    <nav className='font-bold  flex space-x-6 border-b mb-5 px-5 h-14 items-center '>
      <Link href="/"><AiFillBug /></Link>
      <ul className='flex space-x-6'>
        {links.map(link =>
        <Link
           key={link.href} 
           className={classnames({
             'text-zinc-900': link.href === currentPath,
             'text-zinc-500': link.href !== currentPath,
             'hover:text-zinc-800 transition-color': true,
           })} 
           href={link.href}>{link.lable}
           </Link>)}
      </ul> 
    </nav>
  )
}

export default NavBar
