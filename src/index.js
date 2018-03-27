import React from 'react';
import ReactDOM from 'react-dom';
import App from '../../sudoku/src/containers/App.js';
import '../../sudoku/src/index.css';
import {AppContainer} from 'react-hot-loader';
import registerServiceWorker from './registerServiceWorker';

const render = Component => {
    ReactDOM.render(
        <AppContainer>
            <Component />
        </AppContainer>,
        document.getElementById('app'),
    )
};

render(App);

// Webpack Hot Module Replacement API
if (module.hot) {
    module.hot.accept('./containers/App.js', () => {
        render(App)
    })
}

registerServiceWorker();

