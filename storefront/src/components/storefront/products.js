import React from 'react';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { add } from '../../store/cart';
import { Link } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        fontSize: '100%',
    },
}));


const Products = props => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Paper className={classes.paper}>{props.categories.activeCategory === ''? 'choose category' : props.categories.activeCategory.toUpperCase()}</Paper>
                    <Paper className={classes.paper}>description</Paper>
                </Grid>
                {props.categories.products.map((product, idx) =>{
                    if(product.category === props.categories.activeCategory){
                        return (
                            <Grid item xs={4}>
                                <Paper key={idx} className={classes.paper}>
                                <img src='https://colorlib.com/sparkling/wp-content/uploads/sites/5/2013/03/image-alignment-150x150.jpg' alt='just 150*150' />
                                    <h4>{product.name}</h4>
                                    <p>{product.description}</p>
                                    <Link className="a" color="primary" onClick={() => props.add(product.name)} key={idx}>
                                       ADD TO CART
                                    </Link><br></br><br></br>
                                    <Link className="a" color="primary"  key={idx}>
                                        VIEW DETAILS
                                    </Link>
                                </Paper>
                            </Grid>
                        )
                    }
                }
                )}
            </Grid>
        </div>
    );
}

const mapStateToProps = state => ({
    categories: state.categories
});


const mapDispatchToProps = { add };
export default connect(mapStateToProps,mapDispatchToProps)(Products);