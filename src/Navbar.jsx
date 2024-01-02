import React from 'react'
import logo from './images/logo.svg'
import { useGlobalContext } from './context'

const Navbar = () => {
  const { openSideBar,openSubmenu,closeSubmenu}=useGlobalContext();
  const dispalySubMenu=(e)=>{
    console.log(e.target);
    const page =e.target.textContent;
    const tempbtn=e.target.getBoundingClientRect()
    const center=(tempbtn.left+tempbtn.right)/2;
    const bottom=tempbtn.bottom-3;
    openSubmenu(page,{center,bottom})
  }

  const closeSubmenuHandle=(e)=>{
if(!e.target.classList.contains('link-btn')){
  closeSubmenu()
}
  }
  
  return <nav className="nav" onMouseOver={closeSubmenuHandle}>
       <div className="nav-center">
        <div className="nav-header">
             <p className="logo">nithin</p>
             <button className="btn toggle-btn" onClick={openSideBar}>menu</button>
        </div>
        <ul className="nav-links">
         <li>
            <button className="link-btn" onMouseOver={dispalySubMenu}>products</button>
            </li>
            <li>
            <button className="link-btn" onMouseOver={dispalySubMenu}>developers</button>

            </li>
            <li>
            <button className="link-btn" onMouseOver={dispalySubMenu}>company</button>
         </li>
        </ul>
        <button className="btn signin-btn">Sign in</button>
       </div>
  </nav>
}

export default Navbar
