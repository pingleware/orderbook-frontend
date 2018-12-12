import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from 'modules/Cart';

import withStyles from '@material-ui/core/styles/withStyles';
import CartContainer from 'containers/payment/PaymentContainer';
import Header from 'components/Header';
import Footer from 'components/Footer';


const styles = theme => ({
    root: {
        width: '100%',
        // eslint-disable-next-line quotes
        [`@media screen and (max-width: 376px) and  (orientation: portrait)`]: {
            width: '360px',
        },
    },
    Top: {
        height: '56px',
        objectFit: 'contain',
        backgroundColor: '#ff4a5b',
        color: 'white',
        textAlign: 'center',
        alignItems: 'center',
    },
    Mask: {
        height: '100px',
        backgroundColor: '#ff4a5b',
        color: 'white',
        textAlign: 'center',
    },
    MainBody: {
        height: 'calc(100vh - 10rem)',
        overflowY: 'auto',
    },
});


const Payment = ({ classes, totalPrice }) => {
    return (
        <div className={classes.root}>
            <Header title="Payment Methods" />
            <div id="OrderGrid" className={classes.MainBody}>
                <CartContainer />
            </div>
            <Footer totalPrice={totalPrice} text="Proceed to Transaction" />
        </div>
    );
};


export default connect(
    state => ({
        totalPrice: state.Cart.totalPrice,
    }),
    dispatch => ({
        CartActions: bindActionCreators(actions, dispatch),
    }),
)(withStyles(styles)(Payment));
