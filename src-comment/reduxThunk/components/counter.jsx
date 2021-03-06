import React,{Component} from 'react'
import PropTypes from 'prop-types'

export default class Counter extends Component {
    static propTypes = {
        count: PropTypes.number.isRequired,
        increment: PropTypes.func.isRequired,
        decrement: PropTypes.func.isRequired,
        incrementAsync: PropTypes.func.isRequired
    }
    increment = () => {
        const number = this.select.value * 1
        // const count = this.state.count + number
        // this.setState({count})
        // 调用store 方法更新状态
        this.props.increment(number)
    }
    decrement = () => {
        const number = this.select.value * 1
        // const count = this.state.count - number
        // this.setState({count})
        this.props.decrement(number)
    }
    incrementAsync = () => {
        const number = this.select.value * 1
        this.props.incrementAsync(number)
    }
    render() {
        const count = this.props.count
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
                <button onClick={this.incrementAsync}>+</button>&nbsp;
            </div>
        )
    }
}