import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './reducers';
import './index.css';
import 'semantic-ui-css/semantic.min.css';

const store = createStore(rootReducer)
// {/*  */} </Provider>
ReactDOM.render(<Provider store={store}>
                    <Router>
                        <App />
                    </Router>
                </Provider>
               , document.getElementById('root'));
