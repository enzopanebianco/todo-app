export const ADD_TODO = "ADD_TODO";
export const REMOVE_TODO = "REMOVE_TODO";
export const TOGGLE_TODO = "TOGGLE_TODO";
export const CLEAR_LIST = "CLEAR_LIST";
export const FILTER_BY_ACTIVE = "FILTER_BY_ACTIVE";
export const GET_ALL_TODOS = "GET_ALL_TODOS";


export function addTodo(text,active){
    return {type:ADD_TODO,text,active}
}
export function removeTodo(id){
    return {type:REMOVE_TODO,id};
}
export function toggleTodo(id){
    return {type:TOGGLE_TODO,id};
}
export function filterByActive(active){
    return {type:FILTER_BY_ACTIVE,active}
}
export function clearList(){
    return {type:CLEAR_LIST}
}
export function getAllTodos(){
    return {type:GET_ALL_TODOS}
}