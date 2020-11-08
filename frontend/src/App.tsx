import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './app.scss';

import HomeScreen from './screens/HomeScreen/HomeScreen';
import ShopScreen from './screens/ShopScreen/ShopScreen';
import BlogScreen from './screens/BlogScreen/BlogScreen';
import ContectScreen from './screens/ContectScreen/ContectScreen';
import ProductScreen from './screens/ProductScreen/ProductScreen';

const App = () => {
  return (
    <Switch>
      <Router>
        <div className='app'>
          <Route path='/' component={HomeScreen} exact />
          <Route path='/shop' component={ShopScreen} exact />
          <Route path='/blog' component={BlogScreen} exact />
          <Route path='/contect' component={ContectScreen} exact />
          <Route path='/product/:id' component={ProductScreen} />
          {/* <Footer /> */}
        </div>
      </Router>
    </Switch>
  );
};

export default App;
