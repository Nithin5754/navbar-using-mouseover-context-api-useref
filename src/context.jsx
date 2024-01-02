import React, { useState, useContext } from 'react'
import sublinks from './data'



const AppContext=React.createContext();



const AppProvider=({children})=>{
  const [isSideBar,setSideBar]=useState(false)
  const [isSubMenu,setSubMenu]=useState(false)
  const [isModel,setModel]=useState(false)
  const [isLocation,setLocation]=useState({})
  const [isText,setText]=useState({page:'',links:[]})
 
  const openSideBar=()=>{
    setSideBar(true)
  }
  const closeSideBar=()=>{
    setSideBar(false)
    
  }


  const openSubmenu=(text,cordinates)=>{
    const page=sublinks.find((links)=>links.page===text)
    setText(page)
    console.log("helo",text);
    setLocation(cordinates)
    setSubMenu(true)
   
  }
  const closeSubmenu=()=>{
    setSubMenu(false)
  }


  
  const openModel=()=>{
    setModel(true)
  }
  const closeModel=()=>{
    setModel(false)
  }
  return(
    <AppContext.Provider value={{openSideBar,
    closeSideBar,
    isSideBar
    ,openModel,
    setModel,
    isModel,
    openSubmenu,
    setSubMenu,
    closeModel,
    closeSubmenu,
    isLocation,
    isText,
    isSubMenu}}>
    {children}
       </AppContext.Provider>
  )
}

const useGlobalContext=()=>useContext(AppContext);


export{AppProvider,useGlobalContext}
