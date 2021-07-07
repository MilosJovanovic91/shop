import React, {useState} from 'react'
import './App.css';

const PAGE_PRODUCTS = 'products';
const PAGE_CART = 'cart';

function App() {
  const [cart, setCart] = useState([]);
  const [page, setPage] = useState(PAGE_PRODUCTS);
  const [products] = useState([
    {
      id: 1,
      name: "Multicolored Coat",
      price: 52,
      description: "This contoured, classic cut V-neck T-shirt has that flattering style that's sure to turn some heads. It's great for layering under a sweater or sweatshirt and even better by itself with a pair of jeans. It's a good idea to own this one in a few different colors; it's definitely a go-to item.",
      src: "https://images.pexels.com/photos/2703039/pexels-photo-2703039.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
      sale: false,
      color: "white",
      size : ["XS","S", "XL"]
  },
  {
      id: 2,
      name: "Black sweatsuit",
      price: 28,
      description: "This contoured, classic cut V-neck T-shirt has that flattering style that's sure to turn some heads. It's great for layering under a sweater or sweatshirt and even better by itself with a pair of jeans. It's a good idea to own this one in a few different colors; it's definitely a go-to item.",
      src: "https://images.pexels.com/photos/965324/pexels-photo-965324.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      sale: true,
      newprice: 20,
      color: "black",
      size : ["M","L", "XL"]
  },
  {
      id: 3,
      name: "Plaid Skirt",
      price: 52,
      description: "This contoured, classic cut V-neck T-shirt has that flattering style that's sure to turn some heads. It's great for layering under a sweater or sweatshirt and even better by itself with a pair of jeans. It's a good idea to own this one in a few different colors; it's definitely a go-to item.",
      src: "https://images.pexels.com/photos/794063/pexels-photo-794063.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
      sale: false,
      color: "brown",
      size : ["XS","S", "XL"]
  },
  {
      id: 4,
      name: "Dual colored jacket",
      price: 24,
      description: "This contoured, classic cut V-neck T-shirt has that flattering style that's sure to turn some heads. It's great for layering under a sweater or sweatshirt and even better by itself with a pair of jeans. It's a good idea to own this one in a few different colors; it's definitely a go-to item.",
      src: "https://images.pexels.com/photos/2703181/pexels-photo-2703181.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      sale: true,
      newprice: 19,
      color: "pink",
      size : ["S","L", "XXL"]
  },
  {
      id: 5,
      name: "Navy blue pants",
      price: 33,
      description: "This contoured, classic cut V-neck T-shirt has that flattering style that's sure to turn some heads. It's great for layering under a sweater or sweatshirt and even better by itself with a pair of jeans. It's a good idea to own this one in a few different colors; it's definitely a go-to item.",
      src: "https://images.pexels.com/photos/818992/pexels-photo-818992.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      sale: false,
      color: "blue",
      size : ["M","L", "XXL"]
  },
  {
      id: 6,
      name: "Pink top",
       price: 23,
      description: "This contoured, classic cut V-neck T-shirt has that flattering style that's sure to turn some heads. It's great for layering under a sweater or sweatshirt and even better by itself with a pair of jeans. It's a good idea to own this one in a few different colors; it's definitely a go-to item.",
      src: "https://images.pexels.com/photos/1070030/pexels-photo-1070030.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      sale: false,
      color: "pink",
      size : ["XS","S", "XXL"]
  }
  ])

  const addToCart = (product) =>{ 
    console.log('we are in addtocart');
    setCart([...cart, product])
  }

  const renderProducts = () => (
    <>
      <h1>Products</h1>
      <div className="products">
      {products.map((product) => (
        <div className="product" key={products.id}>
        <h3>{product.name}</h3>
        <h4>${product.price}</h4>
        <img src={product.src} alt={product.name} />
        <button onClick={() => addToCart(product)}>Add to Cart</button>
      </div>
        ))} 
        </div>
        </>
  )

  const renderCart = () => (
    <>
      <h1>Cart</h1>
      <div className="products">
      {products.map((product) => (
        <div className="product" key={products.id}>
        <h3>{product.name}</h3>
        <h4>${product.price}</h4>
        <img src={product.src} alt={product.name} />
        {/* <button onClick={() => addToCart(product)}>Add to Cart</button> */}
      </div>
        ))} 
        </div>
        </>
  )

  return (
    <div className="app">
      <header>
        <button>Go to Cart({cart.length})</button>
      </header>
      {page === PAGE_PRODUCTS && renderProducts()}
      {page === PAGE_CART && renderCart()}
    </div>
  );
}

export default App;
