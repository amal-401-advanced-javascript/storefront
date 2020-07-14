import React from 'react';
import { connect } from 'react-redux';
import { Link } from '@material-ui/core'; 

function Header(props) {
    return (
        <>
        <div className="h1">
        <h1> OUR STORE</h1>
        <Link className="cart" color="primary" >
                    CART ({props.cart.count})
                </Link>
            </div>
        </>
    );
}
const mapStateToProps = state => ({
    cart: state.cart
});
export default connect(mapStateToProps)(Header); 