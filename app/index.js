import React from 'react';
import ReactDOM from 'react-dom';
import App from "./container/index";
import './less/index.less'
//连接react和redux
import {Provider} from 'react-redux';
//导入store
import {configureStore} from './store';
//生成store 可以在configureStore中传入初始状态
let store=configureStore();
//负责显示哪一个页面
ReactDOM.render(
    <Provider store={store}>
    <App/>
    </Provider>,
    document.querySelector('#root'));