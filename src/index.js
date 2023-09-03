import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { logger } from 'redux-logger';
import ReduxThunk from 'redux-thunk';

// 라우팅
import Routes from './Routes';

// 리듀서
import reducers from './modules';

// OAuth 인터셉터
import configureAndConnectOAUthInterceptor from './utils/oauthInterceptor';

/*
Q.
    The initial state, preLoadedState, is passed as an argument to configure.

A.
   I removed the preloadedStore because I didn't need it :)
*/
// logger는 마지막에 놓아야 합니다. 다른 Middleware가 전처리하기 전의 Action이 통과되기 때문입니다.
const store = createStore(reducers, {}, applyMiddleware(ReduxThunk, logger));

configureAndConnectOAUthInterceptor(store);

ReactDOM.render(
    <Provider store={store}>
        <Routes />
    </Provider>,
    document.getElementById('root'),
);
