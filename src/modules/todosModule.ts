import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// 型定義
interface Todo {
    id: number;
    text: string;
    completed: boolean;
}

// state
export interface TodosState {
    nextTodoId: number;
    list: Todo[];
};

// state の初期値
const todoInitialState: TodosState = {
    nextTodoId: 0,
    list: []
};

// actions と reducers の定義
const todosModules = createSlice({
    name: "todos",
    initialState: todoInitialState,
    reducers: {
        // todo を追加
        addTodo: (state, action: PayloadAction<string>) => {
            const todo = {
                id: state.nextTodoId++,
                text: action.payload,
                completed: false
            };
            // Pushしてしまっている
            state.list.push(todo);
        },

        // completed のトグル
        toggleTodo: (state, action: PayloadAction<number>) => {
            const id = action.payload;
            state.list.forEach(todo => {
                todo.completed =
                    todo.id === id ? !todo.completed : todo.completed;
            });
        }
    }
});

export default todosModules;