// import logo from './logo.svg';
import './App.css';
import { Routes, Route } from "react-router-dom"
import Auth from './pages/auth';
import OrderHistory from './pages/order_history';
import NewOrder from './pages/new_order';
import { useState } from "react"


function App() {

  const [user, setUser] = useState(null);
  return (
    <div className="App">
      {user ?
        <div>

          <Routes>
            <Route path="/orders" element={<OrderHistory />} />
            <Route path="/orders/new" element={<NewOrder />} />
          </Routes>
        </div>
        :
        <Auth />
      }
    </div>

  );
}

export default App;