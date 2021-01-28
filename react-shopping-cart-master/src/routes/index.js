import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Store from '../pages/store';
import NotFound from '../pages/NotFound';
import Cart from "../pages/cart";
import DetailProduct from "../pages/store/detail/DetailProduct";
import Login from "../pages/login/DangNhap";

const Routes = () => {
  return (
    <Router>
        <Switch>
          <Route exact path="/" component={Store}/>
          <Route exact path="/detail" component={DetailProduct}/>
          <Route path="/cart" component={Cart} />
          <Route path="/login" component={Login} />
          <Route path="*" component={NotFound} />
        </Switch>
    </Router>
  );
}

export default Routes;