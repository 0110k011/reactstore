import React, { useState } from 'react';
import { Grid } from '@material-ui/core';

import Product from './Product/Product';
import useStyles from './styles';

import products from '../../products.json';

const Products = ({ productToCart }) => {
    const classes = useStyles();
    products.sort((a, b) => (a.name > b.name) ? 1 : -1);
    const [ order, setOrder] = useState(products);

    const myOrder = () => {
        var x = document.getElementById("mySelect").value;
        switch (x) {
            case 'name':
                products.sort((a, b) => (a.name > b.name) ? 1 : -1); 
                setOrder([].concat(products));
                break;
            case 'score':
                products.sort((a, b) => (a.score < b.score) ? 1 : -1); 
                setOrder([].concat(products));
                break;
            case 'price':
                products.sort((a, b) => (a.price > b.price) ? 1 : -1); 
                setOrder([].concat(products));
                break
            default:
                setOrder([]);
        }
    }    

    return (
        <main className={classes.content}>
            <div className={classes.toolbar} />
            <Grid container justify="flex-end" spacing={1}>
                <i>Ordenar por: </i>
                <select id="mySelect" onChange={() => myOrder()}>
                    <option value="name">Nome</option>
                    <option value="price">Menor preço</option>
                    <option value="score">Relevância</option>
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