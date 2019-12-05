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
  return state;
}