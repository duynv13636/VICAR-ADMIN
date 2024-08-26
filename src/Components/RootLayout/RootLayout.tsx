import { Outlet } from 'react-router-dom';
import Sidebar from '../Sidebar/Sidebar';
import Header from '../Header/Header';

const RootLayout = () => {
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
