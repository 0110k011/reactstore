import React from 'react';
import { Typography, Button, Grid } from '@material-ui/core';

import useStyles from './styles';

const FilledCart = ({ cart, productOutCart }) => {
    const classes = useStyles();
    var sum = 0;
    var sumFrete = 0;

    return (
        <>
            <Grid container spacing={3}>
                {cart.map((item, key) => (
                    <Grid item xs={12} sm={4} key={key}>
                        <Typography variant="h6">{item.name}</Typography>
                        <Typography variant="body1" color="textSecondary">
                            R$ {item.price.toFixed(2).replace('.', ',')}
                        </Typography>  
                        <div>  
                            <Button size="small" type="button" variant="contained" color="secondary" onClick={() => productOutCart(cart, key)}>Retirar</Button>                        
                        </div>
                    </Grid>
                ))}
            </Grid>
            <div className={classes.cardDetails}>
                <Typography variant="h6">  
                        {cart.forEach(item => {
                            sum += item.price;
                            sumFrete += 10;
                        })}
                        <div>SubTotal: R$ {sum.toFixed(2).replace('.', ',')}</div>
                        <div>
                            Frete: {sum.toFixed(2) >= 250 ? 
                            <>
                                <b>frete grátis</b>
                                <div>Total: R$ {sum.toFixed(2).replace('.', ',')}</div>
                            </> 
                            : <>R$ {sumFrete.toFixed(2).replace('.', ',')}
                            <div>Total: R$ {(sum + sumFrete).toFixed(2).replace('.', ',')}</div>
                            </> }
                        </div>
                </Typography>
                <div>
                    <Button className={classes.emptyButton} size="medium" type="button" variant="contained" color="secondary" onClick={() => productOutCart([], 0)}>Esvaziar</Button>
                    <Button className={classes.checkoutButton} size="medium" type="button" variant="contained" color="primary" onClick={() => productOutCart([], 0)}>Finalizar</Button>
                </div>
            </div>
        </>
    )};

export default FilledCart;