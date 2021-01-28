import "./App.css";
import Home from "./components/Home";
import ListCategory from "./components/category/ListCategory";
import AddCategory from "./components/category/AddCategory";
import EditCategory from "./components/category/EditCategory";
import ListProduct from "./components/product/ListProduct";
import AddProduct from "./components/product/AddProduct";
import EditProduct from "./components/product/EditProduct";
import ListAccount from './components/accounts/ListAccount';
import AddAccount from './components/accounts/AddAccount';
import EditAccount from './components/accounts/EditAccount';

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/list-category" component={ListCategory} />
        <Route path="/add-category" component={AddCategory} />
        <Route path="/edit-category" component={EditCategory} />
        <Route path="/list-product" component={ListProduct} />
        <Route path="/add-product" component={AddProduct} />
        <Route path="/edit-product" component={EditProduct} />
        <Route path="/add-account" component={AddAccount} />
        <Route path="/list-account" component={ListAccount} />
        <Route path="/edit-account" component={EditAccount} />
        <div className="App">
          <Home />
        </div>
      </Switch>
    </Router>
  );
}

export default App;
