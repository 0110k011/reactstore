import React, { useState } from 'react';

import { Products, Navbar, Cart } from './components';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const App = () => {
    var totalCart = [];
    const [cart, setCart] = useState([]);

    const productToCart = (id, name, price) => {
        totalCart.push({id, name, price});
        setCart(cart.concat(totalCart)); 
    };

    const productOutCart = (outCart, id) => {
        outCart.splice(id,1);
        setCart([].concat(outCart));
    };

    return (
        <Router>
            <div>
                <Navbar totalCart={cart}/>
                <Switch>
                    <Route exact path="/">
                        <Products productToCart={productToCart} /> 
                    </Route>
                    <Route exact path="/cart">
                        <Cart cart={cart} productOutCart={productOutCart} />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
};

export default App;