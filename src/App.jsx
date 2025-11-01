// import './App.css'
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import SearchPage from "./pages/SearchPage";
import CategoryPage from "./pages/CategoryPage";
import ProductPage from "./pages/ProductPage";
import CartPage from "./pages/CartPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />}>
        <Route path="/search/:searchItem" element={<SearchPage />} />
        <Route path="/category/:categoryID" element={<CategoryPage />} />
      </Route>

      <Route path="/products/:productID" element={<ProductPage />} />
      <Route path="/carts" element={<CartPage />} />
    </Routes>
  );
}

export default App;
