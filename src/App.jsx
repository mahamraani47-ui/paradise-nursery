import "./App.css";
import ProductList from "./components/ProductList";
import CartItem from "./components/CartItem";

function App() {
const path = window.location.pathname;

if (path === "/plants") {
return <ProductList />;
}

if (path === "/cart") {
return <CartItem />;
}

return ( <div className="landing-page"> <div className="landing-content"> <h1>Paradise Nursery</h1> <a href="/plants"> <button>Get Started</button> </a> </div> </div>
);
}

export default App;
