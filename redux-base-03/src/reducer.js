//纯函数
//创建一个初始值
let defaultState = 10;

/*
	state = defaultState 旧的状态值
	action 动作
*/
export default (state=defaultState,action)=>{
	console.log(action);
	switch(action.type){
		case "INCREMENT": //增加
			return state+1;
		case "DECREMENT": //减少
			return state-1;
		default:
			return state;
	}
}