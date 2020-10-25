import React,{Component} from 'react'
import * as actions from './actions'
export default class App extends Component {
    increment = () => {
        const number = this.select.value * 1
        // const count = this.state.count + number
        // this.setState({count})
        // 调用store 方法更新状态
        this.props.store.dispatch(actions.increment(number))
    }
    decrement = () => {
        const number = this.select.value * 1
        // const count = this.state.count - number
        // this.setState({count})
        this.props.store.dispatch(actions.decrement(number))
    }
    render() {
        const count = this.props.store.getState()
        return(
            <div>
                <p>click {count} times </p>
                <select ref={select => this.select = select}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>
                <button onClick={this.increment}>+</button>&nbsp;
                <button onClick={this.decrement}>-</button>&nbsp;

            </div>
        )
    }
}