import { getTodo, getTodos, deleteTodo} from './../actions/todoActions';
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
interface Todo{
    id: number,
    title?: string,
    completed?: boolean,
}
export interface TodoState{
    todo: Todo,
    todos: Todo[],
    loading: boolean,
    error: boolean,
}
const initialState : TodoState = {
    todos: [],
    todo: {
        id: 1,
        title: "Cong viec 1",
        completed: false
    },
    loading: false,
    error: false,
}

const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {

    },
    extraReducers(builder) {
        builder.addCase(getTodo.pending, (state) => {
            state.loading = true;
        })
        builder.addCase(getTodo.fulfilled, (state, action : PayloadAction<Todo>) => {
            state.loading = false;
            state.todo = action.payload
        })
        builder.addCase(getTodo.rejected, (state) => {
            state.loading = false;
            state.error = true;
        })
        builder.addCase(getTodos.pending, (state) => {
            state.loading = true;
        })
        builder.addCase(getTodos.fulfilled, (state, action : PayloadAction<Todo[]>) => {
            state.loading = false;
            state.todos = action.payload
        })
        builder.addCase(getTodos.rejected, (state) => {
            state.loading = false;
            state.error = true;
        })
        builder.addCase(deleteTodo.pending, (state) => {
            state.loading = true;
        })
        builder.addCase(deleteTodo.fulfilled, (state, action : PayloadAction<any, any>) => {
            state.loading = false;
            state.todos = state.todos.filter(todo => todo.id !== action.payload);
        })
        builder.addCase(deleteTodo.rejected, (state) => {
            state.loading = false;
            state.error = true;
        })
    },
})
const todoReducer = todoSlice.reducer;
export default todoReducer;