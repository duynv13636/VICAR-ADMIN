import { Link } from 'react-router-dom';
import { FaListUl, FaRegListAlt } from 'react-icons/fa';
const Sidebar = () => {
  return (
    <div>
      <aside className='flex h-screen w-72 flex-col overflow-y-hidden bg-bgSidebar duration-300 ease-linear lg:static lg:translate-x-0'>
        <div className='flex items-center justify-between gap-2 px-6 py-5'>
          <Link to='/'>
            <h2 className='text-xl text-gray-200'>Admin</h2>
          </Link>
        </div>
        <div className='no-scrollbar flex flex-col overflow-y-auto duration-300 ease-linear'>
          <nav className='mt-5 px-4 py-4 lg:mt-9 lg:px-6'>
            <div>
              <h3 className='mb-4 ml-4 text-sm font-medium text-gray-200'>MENU</h3>
              <ul className='mb-6 flex flex-col gap-2.5 text-white'>
                <li>
                  <Link
                    className='group text-base flex items-center gap-2.5 rounded-sm py-2 font-medium text-gray-200'
                    to='/product-management'
                  >
                    <FaListUl />
                    Management Products
                  </Link>
                </li>
                <li>
                  <Link
                    to='/category-management'
                    className='group text-base flex items-center gap-2.5 rounded-sm py-2 font-medium text-gray-200'
                  >
                    <FaRegListAlt />
                    Management Categories
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </aside>
    </div>
  );
};

export default Sidebar;
