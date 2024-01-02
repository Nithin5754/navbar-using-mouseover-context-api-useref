import React, { useState, useRef, useEffect } from 'react'
import { useGlobalContext } from './context'

const Submenu = () => {
 

const {isSubMenu,isLocation,isText} =useGlobalContext()
  const {links,page}=isText

const container=useRef(null)
useEffect(()=>{
 const submenu=container.current;
 const {center,bottom}=isLocation

 submenu.style.left=`${center}px`
 submenu.style.top=`${bottom}px`


},[isLocation,isText])

  return <aside ref={container} className={`${isSubMenu?'submenu show':'submenu'}`}>
   <div>
{
links.map((link)=>{
  const {label,url}=link
  return(
<h5>{label}</h5>
  )
})
}
   </div>
  </aside>
}

export default Submenu
