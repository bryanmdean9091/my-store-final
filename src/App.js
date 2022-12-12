import React, { useState, useEffect } from "react";
import "./App.css";
import Departments from "./components/Departments";
import Details from "./components/Details";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Products from "./components/Products";
import { Routes, Route } from "react-router-dom";
import Checkout from "./components/Checkout";
import Cart from "./components/Cart";
import ThankYou from "./components/ThankYou";

function App() {
  const [products, setProducts] = useState([]);
  const [ loading, setLoading] = useState(false);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const [cartItem, setCartItem] = useState([]);
  const [price, setPrice] = useState(0);
  const [confirm, setConfirm] = useState('');
  const [user, setUser] = useState('');
 

  const cartUse = (itemId) => {
    const cartGoods = [...cartItem];
    const findItem = cartGoods.find((contents) => contents.id === itemId);
    if (findItem == undefined) {
      const allProducts = products;
      const foundProduct = allProducts.find(
        (contents) => contents.id == itemId
      );
      const newValue = {
        category: foundProduct.category,
        description: foundProduct.description,
        id: foundProduct.id,
        image: foundProduct.image,
        price: foundProduct.price,
        rating: foundProduct.rating,
        title: foundProduct.title,
        quantity: cartCount,
      };
      setCartItem((previousCartState) => {
        return [...previousCartState, newValue];
      });
      setCartCount(1);
    } else {
      const mappedCartGoods = cartGoods.map((item) => {
        if (item.id == itemId) {
          return { ...item, quantity: item.quantity + cartCount };
        }
        return item;
      });
      setCartItem(mappedCartGoods);
      setCartCount(1);
    }

    console.log(cartItem);
    console.log(price);
  };

  const fetchProducts = async () => {
     setLoading(true);
    const req = await fetch(`https://fakestoreapi.com/products`);
    const products = await req.json();
    setProducts(products);
    setLoading(false);
    console.log(products);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const categoryFunc = (inputcategory) => {
    const productsCopy = products.filter(
      (item) => item.category == inputcategory
    );
    setFilteredProducts(productsCopy);
    console.log(productsCopy);
  };

  const productFunc = (ID) => {
    const itemsCopy = products.filter((item) => item.id == ID);
    setFilteredItems(itemsCopy);
    // console.log(itemsCopy);
  };

  return (
    <div className="App">
      <NavBar cartCount={cartCount} cartItem={cartItem} />
      <Routes>
        <Route
          path="/"
          element={<Home fetchProducts={fetchProducts} />}
        ></Route>
        <Route
          path="/departments"
          element={
            <Departments
              products={products}
              fetchProducts={fetchProducts}
              setFilteredProducts={filteredProducts}
              categoryFunc={categoryFunc}
            />
          }
        ></Route>

        <Route
          path="/departments"
          element={
            <Departments
              products={products}
              fetchProducts={fetchProducts}
              setFilteredProducts={filteredProducts}
              categoryFunc={categoryFunc}
            />
          }
        ></Route>
        <Route
          path="/products"
          element={
            <Products
              filteredProducts={filteredProducts}
              productFunc={productFunc}
              loading={loading}
            />
          }
        ></Route>
        <Route
          path="/details"
          element={
            <Details
              productFunc={productFunc}
              filteredItems={filteredItems}
              setCartCount={setCartCount}
              cartCount={cartCount}
              cartUse={cartUse}
              setCartItem={setCartItem}
              cartItem={cartItem}
              price={price}
              setPrice={setPrice}
            />
          }
        ></Route>
        <Route
          path="/cart"
          element={
            <Cart
              cartItem={cartItem}
              setCartItem={setCartItem}
              setCartCount={setCartCount}
              cartCount={cartCount}
              filteredItems={filteredItems}
              setPrice={setPrice}
              price={price}
            />
          }
        />
        <Route
         path="/checkout" 
         element={<Checkout
         setConfirm={setConfirm}
         cartCount={cartCount} 
          setCartCount={setCartCount}
          user={user}
          setUser={setUser}
         />}
          />
          <Route path="/confirm"
          element={<ThankYou
          confirm={confirm}
          user={user}
          />
          } 

          />
      </Routes>
    </div>
  );
}

export default App;
