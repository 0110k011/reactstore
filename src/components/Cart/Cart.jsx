import React from 'react';
import { Container, Typography } from '@material-ui/core';

import FilledCart from './FilledCart';
import useStyles from './styles';

const Cart = ({ cart, productOutCart }) => {
    const classes = useStyles();

    const EmptyCart = () => (
        <Typography variant="subtitle1">Seu carrinho está vazio.</Typography>
    );
 
    return (
        <Container>
            <div className={classes.toolbar} />
            <Typography className={classes.title} variant="h4" gutterBottom>Carrinho</Typography>
            { !cart.length ? <EmptyCart /> : <FilledCart cart={cart} productOutCart={productOutCart} />}
        </Container>
    )
};

export default Cart;