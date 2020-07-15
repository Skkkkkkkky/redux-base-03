import React,{Component} from "react";

class Main extends Component{ //上面直接引用了组件 所以Component不再需要加前缀React
	render(){
		return <div>
			<h3>计数器</h3>
			<button onClick={this.props.onIncrement}>这是加</button>
			<span>计数器的值:{this.props.value}</span>
			<button onClick={this.props.onDecrement}>这是减</button>
		</div>
	}
}

export default Main;