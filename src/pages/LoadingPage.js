import React from 'react';
import queryString from 'query-string';

import LoadingContainer from '../containers/LoadingContainer';

const LoadingPage = ({ location: { search }, history }) => {
    const { shopId, seatId } = queryString.parse(search);
    return (
        <LoadingContainer
            shopId={shopId}
            seatId={seatId}
            onLoadFinished={() => history.push('/basic')}
        />
    );
};

/*
Q:
    Do I need to use withRouter for Page as well?

A:
    <Route exact path="/" component={LoadingPage} /> together with
     The component passed to the component of the route is provided by React-router.
     Props are passed by default, so there is no need to write withRouter HoC.

*/

export default LoadingPage;
