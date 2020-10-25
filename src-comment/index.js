import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import store from "./reduxThunk/redux/store";
// import App from './redux/app'
import App from './reduxThunk/containers/app'
// import { counter } from "./redux/reducers";
// import App from "./antMobile/app";
// import "./index.css"
// import 'antd-mobile/dist/antd-mobile.css'


 // 内部会第一次调用得到初始state

// function render() {
//     ReactDOM.render(<App store={store}/>,document.getElementById("root"))
// }
// render()
//
// store.subscribe(render)

ReactDOM.render((
    <Provider store={store}>
        <App/>
    </Provider>
),document.getElementById("root"))