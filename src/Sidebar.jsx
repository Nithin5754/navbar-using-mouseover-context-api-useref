import React from 'react'

import sublinks from './data'
import { useGlobalContext } from './context'



const Sidebar = () => {
  const {closeSideBar,isSideBar}=useGlobalContext()
  return <aside className={`${isSideBar?'sidebar-wrapper show':'sidebar-wrapper'}`}>

{
       <div className="sidebar">
    <button className="close-btn" onClick={closeSideBar}>x</button>
    <div className='sidebar-links'>
    {
      sublinks.map((link)=>{
       
     const {links,page}=link
        return <article   key={link.page}><h4>{page}</h4>
      <div className="sidebar-sublinks">
      {
              links.map((link)=>{
                const {url,label}=link
               return(
                <p key={label}><a href={{label}}>{label}</a></p>
               )
              })
             }
      </div>
        </article>
       
      })
    }
       
  </div>
  </div>
}

       
  </aside>
}

export default Sidebar
