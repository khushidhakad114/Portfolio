import React ,{useState} from 'react'
import Home from '../../pages/Home/Home'
import { BsChevronDoubleLeft,  BsChevronDoubleRight } from "react-icons/bs"
import "./Layout.css"
import Menus from '../Menus/Menus'

const Layout = () => {
  const [toggle,setToggle] = useState(true)

  const handleToggle = () => {
    setToggle(!toggle);
  };
  return (
    <>
      <div className='sidebar-section'>
        <div className={toggle ? 'sidebar-toggle sidebar' : 'sidebar'}>
            <div className='sidebar-toggle-icons'>
                <p onClick={handleToggle}>
                  {toggle ?  (
                    <BsChevronDoubleLeft size = {30}/>
                    ) : (
                    <BsChevronDoubleRight size = {30}/>
                  )}
                  </p>
            </div>
            <Menus toggle = {toggle}/>
        </div>
        <div className=''>
          <Home />
        </div>
      </div>
    </>
  )
}

export default Layout
