import React from 'react';
import { Card, CardMedia, CardContent, CardActions, Typography, IconButton } from '@material-ui/core';
import { AddShoppingCart } from '@material-ui/icons';

import useStyles from './styles';

const Product = ({ product, productToCart }) => {
    const classes = useStyles();
    
    return (
        <div>
            <Card className={classes.root}>
                <CardMedia image={`./assets/${product.image}`} title={product.name} className={classes.media} />
                <CardContent>
                    <div className={classes.cardContent}>
                        <Typography variant="h5" gutterBottom>
                            {product.name}
                        </Typography>
                    </div>
                    <div className={classes.cardPrice}>
                        <Typography variant="body1" color="textSecondary">
                            R$ {product.price.toFixed(2).replace('.', ',')}
                        </Typography>
                    </div>
                </CardContent>
                <CardActions disableSpacing className={classes.cardActions}>
                    <IconButton aria-label="Add to Cart" onClick={() => productToCart(product.id, product.name, product.price)}>
                        <AddShoppingCart />
                    </IconButton>
                </CardActions>
            </Card>
        </div>
    )
};

export default Product;