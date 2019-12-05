
import { CHAGE_INPUT_VALUE, ADD_TODO_ITEM, DELETE_TODO_ITEM, INIT_LIST_ACTION } from './actionTypes'
// 数据记录
const defaultState = {
  inputValue: '520minnn',
  list: [1, 234, 435, 9, 67, 564]
}
// reducer 可以接受state 但是不能修改 state
// 纯函数 给定固定的输入，就一定有固定的输入  而且不会有任何副作用（对参数的修改）
export default (state = defaultState, action) => {
  // console.log(state, action);
  if (action.type === CHAGE_INPUT_VALUE) {
    const newState = JSON.parse(JSON.stringify(state));
    newState.inputValue = action.value;
    return newState;
  }
  if (action.type === ADD_TODO_ITEM) {
    const newState = JSON.parse(JSON.stringify(state));
    newState.list.push(newState.inputValue);
    newState.inputValue = '';
    return newState;
  }
  if (action.type === DELETE_TODO_ITEM) {
    const newState = JSON.parse(JSON.stringify(state));
    newState.list.splice(action.index, 1)
    return newState;
  }
  if (action.type === INIT_LIST_ACTION) {
    const newState = JSON.parse(JSON.stringify(state));
    newState.list = action.data;
    return newState;
  }
  return state;
}