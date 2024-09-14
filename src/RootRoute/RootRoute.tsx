// import RootLayout from "@src/Components/RootLayout/RootLayout";
import RootLayout from '@src/Components/RootLayout/RootLayout';
import CategoryPage from '@src/Pages/CategoryPage';
import ProductPage from '@src/Pages/ProductPage';
import SignIn from '@src/Pages/SignInPage/SignIn';
import SignUp from '@src/Pages/SignUpPage/SignUp';
import { Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';

const RootRouter = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path='/' element={<RootLayout />}>
        <Route index path='product-management' element={<ProductPage />} />
        <Route path='category-management' element={<CategoryPage />} />
      </Route>
      <Route path='signin' element={<SignIn />} />
      <Route path='signup' element={<SignUp />} />
    </Route>
  )
);

export default RootRouter;
