/* eslint-disable react/prop-types */
import React from 'react';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import GradeIcon from '@material-ui/icons/Grade';
import HomeScreenStyles from '../styles/HomeScreenStyles';

// eslint-disable-next-line no-unused-vars
// eslint-disable-next-line react/prop-types
const Product = ({ product }) => {
  const classes = HomeScreenStyles();

  return (
    <>
      <Grid item>
        <Card className={classes.card} elevation={3}>
          <CardMedia
            image={product.image}
            title="classor1"
            className={classes.media}
          />
          <IconButton classes={{ root: classes.favoriteIcon }}>
            <FavoriteBorderIcon />
          </IconButton>
          <CardContent classes={{ root: classes.cardContent }}>
            <Typography variant="h6">{product.name}</Typography>
            <Grid container alignItems="center">
              <Grid item xs={5}>
                <Typography variant="h6" classes={{ root: classes.price }}>
                  {`${product.price.toLocaleString('fa-IR')} تومان`}
                </Typography>
              </Grid>
              <Grid item xs={3}>
                <Typography variant="h6" classes={{ root: classes.oldPrice }}>
                  ۳۵۰‌‌‌‌,۰۰۰
                </Typography>
              </Grid>
              <Grid item>
                <div className={classes.offAmount}> ۱۰٪ تخفیف</div>
              </Grid>
            </Grid>
            <Typography className={classes.description}>
              {product.description}
            </Typography>
            <Grid container alignItems="center" style={{ marginTop: '1rem' }}>
              <Grid
                item
                container
                alignItems="center"
                style={{ marginBottom: '1rem' }}
              >
                <Grid item>
                  <GradeIcon
                    color="primary"
                    fontSize="small"
                    classes={{ root: classes.gradIcon }}
                  />
                </Grid>
                <Grid item>
                  <Typography className={classes.rateNumber}>
                    <strong>۵</strong> (۳۴)
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography className={classes.category}>
                    دسته بندی
                  </Typography>
                </Grid>
                <Grid item>
                  <Button
                    variant="contained"
                    classes={{
                      root: classes.addToCart,
                    }}
                  >
                    <Typography
                      classes={{
                        root: classes.addToCartTxt,
                      }}
                    >
                      خرید
                    </Typography>
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Grid>
    </>
  );
};

export default Product;
