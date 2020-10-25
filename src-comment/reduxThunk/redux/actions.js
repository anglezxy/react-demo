/*
包含所有action creator
 */

// 增加
import {INCREMENT,DECREMENT} from './action-types'
export const increment = (number) => ({
    type: INCREMENT,
    data: number
})
// 返回一个对象
export const decrement = (number) => ({
    type: DECREMENT,
    data: number
})
//异步action 返回一个函数
export const incrementAsync = (number)  => {
    return dispatch => {
        setTimeout(() => {
            // 一秒之后才去分发一个增加的action
            dispatch(increment(number))
        },1000)
    }
}
