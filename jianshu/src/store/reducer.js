// 数据记录
const defaultState = {
  inputValue: '520minnn',
  list: [1, 234, 435, 9, 67, 564]
}
// reducer 可以接受state 但是不能修改 state
export default (state = defaultState, action) => {
  // console.log(state, action);
  if (action.type === 'change_input_value') {
    const newState = JSON.parse(JSON.stringify(state));
    newState.inputValue = action.value;
    return newState;
  }
  if (action.type === 'add_todo_item') {
    const newState = JSON.parse(JSON.stringify(state));
    newState.list.push(newState.inputValue);
    newState.inputValue = '';
    return newState;
  }
  if (action.type === 'delete_todo_item') {
    const newState = JSON.parse(JSON.stringify(state));
    newState.list.splice(action.index, 1)
    return newState;
  }
  return state;
}