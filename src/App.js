import './App.css';
import {
  BrowserRouter,
  Route,
  Routes
} from "react-router-dom";
import Home from './Pages/Home/Home';
import MyStore from './Pages/Mystore/MyStore';
import MyOrders from './Pages/MyOrders/MyOrders';
import Promotion from './Pages/Promotion/Promotion';
import Proposal from './Pages/Proposal/Proposal';
import Sidebar from './Components/Sidebar/Sidebar';
import Notification from './Components/Notification/Notification';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Sidebar/>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/MyOrders' element={<MyOrders/>} />
          <Route path='/Mystore' element={<MyStore />} />
          <Route path='/Promotion' element={<Promotion />} />
          <Route path='/Proposal' element={<Proposal />} />
        </Routes>
      </BrowserRouter>
      <Notification/>
    </div>
  );
}

export default App;
