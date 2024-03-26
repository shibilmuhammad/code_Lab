import React from 'react'; 
import { FAV_ICON, LOGO, USER_ICON } from '../utils/constants';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className='bg-primary-main flex justify-between p-2 h-12 '>
      <div className='flex items-center space-x-1'>
        <img className='w-8' alt='LOGO' src={LOGO}></img>
        <p>CodeLab</p>
      </div>
      <div className='flex space-x-3'>
        <Link to={'/favourite'} > <img  className='w-8' alt='FAV-ICON'  src={FAV_ICON}></img></Link> 
       <Link to={'/profile'}> <img  className='w-8' alt='USER-ICON'  src={USER_ICON}></img></Link>
      </div>
      
    </div>
  )
}
export default Header
