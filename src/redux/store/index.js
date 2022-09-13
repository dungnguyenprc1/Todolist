import {configureStore} from '@reduxjs/toolkit'
import filtersReducer from '../../components/Filter/filterSlice';
import todoListReducer from '../../components/Filter/TodoList/todoSlice';


const store = configureStore(
    {
        reducer: {
            filters: filtersReducer ,
            todoList:todoListReducer
        }
    }
);