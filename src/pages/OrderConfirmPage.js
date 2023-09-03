import React from 'react';
import queryString from 'query-string';
import OrderConfirm from '../components/Order/OrderConfirm';

/*
    The logic is not big enough to be divided into containers, so it is performed on the page.
*/
class OrderConfirmPage extends React.Component {
    handleClickConfirm = () => {
        const { history } = this.props;
        history.push('/basic');
    };

    handleClickAbout = f => f;

    render() {
        const { handleClickConfirm, handleClickAbout } = this;
        const { location: { search } } = this.props;
        let { number } = queryString.parse(search);
        if (number === 'undefined' || number === undefined || number === null) { number = '미정'; }

        return (
            <OrderConfirm
                handleClickConfirm={handleClickConfirm}
                handleClickAbout={handleClickAbout}
                orderNumber={number}
            />
        );
    }
}

export default OrderConfirmPage;
