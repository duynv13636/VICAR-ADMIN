// import RootLayout from "@src/Components/RootLayout/RootLayout";
import RootLayout from "@src/Components/RootLayout/RootLayout";
import ProductPage from "@src/Pages/ProductPage";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

const RootRouter = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<RootLayout />}>
      <Route index element={<ProductPage/>}/>

      </Route>
    </Route>
  )
);

export default RootRouter;
