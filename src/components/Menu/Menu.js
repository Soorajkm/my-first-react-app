import React from 'react'
import Link from 'next/link'
import './Menu.css'
export const Menu = () => {
  const menuItem = [
    {
      text: 'HOME',
      path:'./home'
    },
    {
      text: 'ABOUT',
      path:'./about'
    },
    {
      text: 'CONTACT',
      path:'./contact'
    },

  ];
  return <div className="menu">
    {
      menuItem.map(({text,path},ind)=>{
        return <Link key={"link_"+ind} href={path}>{text}</Link>
      })
    }
  </div>
}
