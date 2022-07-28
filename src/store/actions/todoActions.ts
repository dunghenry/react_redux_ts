import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
export const getTodo = createAsyncThunk("todo/getTodo", async( id : number, {rejectWithValue}) =>{
    try {
        const res = await axios.get(`https://jsonplaceholder.typicode.com/todos/${id}`);
        return res.data;
    } catch (error : any) {
        return rejectWithValue(error.response.data)
    }
});
export const getTodos = createAsyncThunk("todo/getTodos", async( _, {rejectWithValue}) =>{
    try {
        const res = await axios.get(`https://jsonplaceholder.typicode.com/todos?_limit=10`);
        return res.data;
    } catch (error : any) {
        return rejectWithValue(error.response.data)
    }
});
export const deleteTodo = createAsyncThunk("todo/deleteTodo", async(id : number, {rejectWithValue}) =>{
    try {
        const res = await axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`);
        return id;
    } catch (error : any) {
        return rejectWithValue(error.response.data)
    }
});