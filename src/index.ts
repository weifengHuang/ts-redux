import redux, { createStore } from "redux";
// creator actions
const ADD_TODO = "ADD_TODO"
const DELETE_TODO = "DELETE_TODO"
// todo 这里的怎么写
interface IAction {
  type: string,
  text?: string,
  id?: number
  // keyof T: 
  [key: string]: any,
}

function addTodo(text:string): IAction {
  return {
    type: ADD_TODO,
    text
  }
}

function deleteTodo(id: number): IAction {
  return {
    type: DELETE_TODO,
    id
  }
}

interface ITodo {
  id: number,
  text: string,
  completed: boolean
}

interface IInitStore {
  todos: ITodo[]
}

const initStore = {
  todos: [
    {
      id: 0,
      text: "这是0",
      completed: false,
    },
    {
      id: 0,
      text: "这是0",
      completed: false,
    }
  ]
}

function todoApp (preState: IInitStore = initStore, action: IAction) {
  // dee copy preState
  const newState = {...preState}
  switch(action.type) {
    case ADD_TODO:
      newState.todos.push({
        id: newState.todos.length + 1,
        text: action.text,
        completed: false
      })
      return newState
    case DELETE_TODO: 
      newState.todos = newState.todos.filter((todo) => todo.id === action.id)
      return newState
    default: 
      return newState
  }
}

let store = createStore(todoApp)

console.log("store getstate", store.getState())
const unsubscribe = store.subscribe(() => console.log(store.getState()))
store.dispatch(addTodo("add1"))
store.dispatch(addTodo("add2"))
store.dispatch(addTodo("add3"))

unsubscribe()
