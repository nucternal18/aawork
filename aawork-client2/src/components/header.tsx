import React, { useState, useContext, MouseEvent } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import axios from 'axios';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const auth = useContext(AuthContext);

  const handleLogout = async (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const res = await axios.post('/api/logout');
    console.log(res.data);
    auth.setUnauthStatus();
  };

  const handleToggle = (e: MouseEvent<HTMLElement>) => {
    e.preventDefault();
    setIsOpen(!isOpen);
  };

  

  return (
    
    <header className='bg-black text-white text-base font-thin font-sans p-6'>
      <nav className='container  mx-auto flex flex-wrap justify-between'>
        <div className='block  z-50'>
          <div className='block lg:hidden  z-50'>
            <button
              type='button'
              onClick={(e) => handleToggle(e)}
              className='flex items-center px-3 py-2 text-white-700 hover:text-white'
            >
              <svg
                className='fill-current h-5 w-5'
                viewBox='0 0 20 20'
                xmlns='http://www.w3.org/2000/svg'
              >
                <title>Menu</title>
                <path d='M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z' />
              </svg>
            </button>
          </div>
          <div
            className={
              isOpen
                ? `w-full flex-grow lg:items-center lg:w-auto z-50`
                : `hidden lg:block lg:items-center lg:w-auto z-50`
            }
          >
            <ul className='text-sm block  lg:flex lg:flex-grow'>
              <li
                onClick={(e) => handleToggle(e)}
                className='block px-1 py-2 m-1 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 hover:text-blue-500'
              >
                <Link to='/home'>HOME</Link>
              </li>
              <li
                onClick={(e) => handleToggle(e)}
                className='block px-1 py-2 m-1 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 hover:text-blue-500'
              >
                <Link to='/dashboard'>DASHBOARD</Link>
              </li>
              <li
                onClick={(e) => handleToggle(e)}
                className='block px-1 py-2 m-1 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 hover:text-blue-500'
              >
                <Link to='/account'>ACCOUNT</Link>
              </li>
              <li
                onClick={(e) => handleToggle(e)}
                className='block px-1 py-2 m-1 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 hover:text-blue-500'
              >
                <Link to='/preferences'>PREFERENCES</Link>
              </li>
              <li
                onClick={(e) => handleToggle(e)}
                className='block px-1 py-2 m-1 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 hover:text-blue-500'
              >
                <Link to='/support'>SUPPORT</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className='z-50'>
            <ul className="flex flex-row">
                  <li className="px-1 py-2 m-1 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 hover:text-blue-500">
                  <Link to="/"><h1 className="font-bold font-sans" >AAWorks</h1></Link>
                  </li>
                  {auth.isAuthenticated && <li className="px-1 py-2 m-1 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 hover:text-blue-500">
                  <button onClick={handleLogout}>Logout</button>
                  </li>
                  }
                  
            </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
