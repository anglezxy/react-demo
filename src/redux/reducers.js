/*
包含n个reducer函数（根据老的state和action返回一个新的state）
不能直接改变state，而是返回新老对象组合成的新数组
 */
import {ADD_COMMENT,DELETE_COMMENT,RECEIVE_COMMENTS} from "./action-types";
const initComment = []
export function comments(state = initComment,action) {
   switch (action.type) {
       case ADD_COMMENT:
           return [action.data,...state] // 返回新数组 （action.data新加的对象，state是老数组）
       case DELETE_COMMENT:
           return state.filter((comment,index) => index !== action.data)
       case RECEIVE_COMMENTS:
           return action.data
       default: return state
   }
}