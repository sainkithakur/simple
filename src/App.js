import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import Cart from "./Pages/Cart";
import Navbar from "./Components/Navbar";
import { Provider } from "react-redux";
import store from "./Stores/Store";

function App() {
  return(
  <div>
   <Provider store={store}>
   <Navbar />
    <Routes> 
      <Route path="/" element={<Home />} />
      <Route path="/cart" element={<Cart />} />
    </Routes>
   </Provider>
  </div>
  )
}

export default App;
