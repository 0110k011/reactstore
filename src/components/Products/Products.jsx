import React, { useState } from 'react';
import { Grid } from '@material-ui/core';

import Product from './Product/Product';
import useStyles from './styles';

import products from '../../products.json';

const Products = ({ productToCart }) => {
    const classes = useStyles();
    products.sort((a, b) => (a.name > b.name) ? 1 : -1);
    const [ order, setOrder] = useState(products);
    const [ selOrder, setSelOrder] = useState(0);

    const myOrder = (x) => {
        switch (x) {
            case "0":
                products.sort((a, b) => (a.name > b.name) ? 1 : -1); 
                setOrder([].concat(products));
                setSelOrder(0);
                break;
            case "1":
                products.sort((a, b) => (a.score < b.score) ? 1 : -1); 
                setOrder([].concat(products));
                setSelOrder(1);
                break;
            case "2":
                products.sort((a, b) => (a.price > b.price) ? 1 : -1); 
                setOrder([].concat(products));
                setSelOrder(2);
                break
            default:
                setOrder([]);
        }
    }    

    return (
        <main className={classes.content}>
            <div className={classes.toolbar} />
            <Grid container justify="flex-end" spacing={1}>
                <i>Ordenar por:</i>
                <select name="mySelect" value={selOrder} onChange={orderVal => myOrder(orderVal.target.value)}>
                    <option value="0">Nome</option>
                    <option value="1">Relevância</option>
                    <option value="2">Menor Preço</option>
                </select>
            </Grid>
            <br />
            <Grid container justify="center" spacing={4}>
                {order.map((product) => (
                    <Grid item key={product.id} xs={12} sm={6} md={4} lg={2}>
                        <Product product={product} productToCart={productToCart} />
                    </Grid>
                ))}
            </Grid>
        </main>
    )
};

export default Products;