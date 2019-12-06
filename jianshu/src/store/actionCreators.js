import { CHAGE_INPUT_VALUE, ADD_TODO_ITEM, DELETE_TODO_ITEM, INIT_LIST_ACTION, GET_INIT_LIST } from './actionTypes'

export const getInputChangeAction = (value) => ({
  type: CHAGE_INPUT_VALUE,
  value
})
export const getAddItemAction = () => ({
  type: ADD_TODO_ITEM
})
export const getDeleteItemAction = (index) => ({
  type: DELETE_TODO_ITEM,
  index
})
export const getInitList = (data) => ({
  type: GET_INIT_LIST
})
export const getInitListAction = (data) => ({
  type: INIT_LIST_ACTION,
  data
})
export const initListAction = (data) => ({
  type: INIT_LIST_ACTION,
  data
})
// export const getTodoList = () => {
//   return (dispatch) => {
//     axios.get('/todolist.json').then((res) => {
//       const data = res.data;
//       const action = initListAction(data);
//       console.log(data);
//       dispatch(action);
//     });
//   }
// }
