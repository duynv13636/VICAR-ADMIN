import { Outlet, useNavigate } from 'react-router-dom';
import Sidebar from '../Sidebar/Sidebar';
import Header from '../Header/Header';
import { useEffect } from 'react';
import useLocalStorage from '@src/Hooks/useLocalStorage';

const RootLayout = () => {
  const {storedValue} = useLocalStorage('token', '');
  const navigate = useNavigate();
  console.log("🚀 ~ RootLayout ~ navigate:", navigate)
  useEffect(() => {
    // if (!storedValue) {
    //   navigate('/signin');
    // } else {
    //   navigate('/product-management');

    // }
  }, [storedValue]);
  return (
    <div>
      <div className='flex h-screen overflow-hidden'>
        <div>
          <Sidebar />
        </div>
        <div className='flex flex-col w-full p-6 overflow-auto'>
          <Header />
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default RootLayout;
