import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Main from "./main";
//引入redux
import {
	createStore
} from "redux";
//引入纯函数
import reducer from "./reducer";
import * as serviceWorker from './serviceWorker';

//1.创建仓库
const store = createStore(reducer);
//2.store.getState 获取state的值
//3.store.dispatch({"type":"INCREMENT"}) 使用 dispatch发送动作
let render = () => ReactDOM.render( 
	<React.StrictMode >
		<Main value = {store.getState()} onIncrement = {() => store.dispatch({"type": "INCREMENT"})} onDecrement = {() => store.dispatch({"type": "DECREMENT"})}/> ,
	</React.StrictMode>,document.getElementById('root'));
render();
//4.当纯函数接收到动作和旧状态，更改为新状态，时，
//需要调用 subscribe 监听新的状态变化了，触发 render，重新渲染页面
//监听状态变化
store.subscribe(render);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
