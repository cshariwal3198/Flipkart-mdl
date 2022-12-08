import './App.css';
import Home from './Components/Home';
import {BrowserRouter as Router , Route , Switch} from 'react-router-dom'
import LogIn from './Components/LogIn';
import AddProducts from './Components/AddProducts';
import AdminPage from './Components/AdminPage';
import ProductDetails from './Components/ProductDetails';

function App() 
{
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <LogIn />
          </Route>
          <Route path="/user">
            <Home />
          </Route>
          <Route  path="/admin">
            <AdminPage />
          </Route>
          <Route  path="/productdetails:id">
            <ProductDetails />
          </Route>
          <Route  path="/addproduct">
            <AddProducts />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
