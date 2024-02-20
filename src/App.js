import './components/dark.scss';
import {Route,Routes} from 'react-router-dom';
import Home from './components/pages/home.jsx';
import Form from './components/pages/form.jsx';
import List from './components/pages/list';
import Productlist from './components/pages/productlist'
import User from './components/pages/user';
import Admin from './components/pages/admin';
import Analytics from './components/pages/analytics';
import Sales from './components/pages/sales';
import Transaction from './components/pages/transaction';
import Balance from './components/pages/balance';
import { useContext } from 'react';
import { DarkModeContext } from './context/darkMode';
function App() {
  const {darkMode} = useContext(DarkModeContext)
  return (
    <div className={darkMode? "app dark": "app"}>
<Routes>
  <Route path="/Dashboard">
    <Route index element={<Home/>} />
  </Route>
  <Route path='/list'>
  <Route index element={<List/>} />
  </Route>
  <Route path='/product'>
  <Route index element={<Productlist/>} />
  </Route>
  <Route path='/user'>
  <Route index element={<User/>} />
  </Route>
  <Route path='/form'>
  <Route index element={<Form/>} />
  </Route>
  <Route path='/admin'>
  <Route index element={<Admin/>} />
  </Route>
  <Route path='/sales'>
  <Route index element={<Sales/>} />
  </Route>
  <Route path='/analytics'>
  <Route index element={<Analytics/>} />
  </Route>
  <Route path='/transaction'>
    <Route index element={<Transaction/>}/>
  </Route>
  <Route path='/balance'>
    <Route index element={<Balance/>}/>
  </Route>
</Routes>
    </div>
  );
}

export default App;
