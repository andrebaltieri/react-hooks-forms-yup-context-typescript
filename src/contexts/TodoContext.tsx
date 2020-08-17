import React, { createContext, useState, useEffect } from 'react';
import { Todo } from '../models/Todo';
import { get, save } from '../services/TodoService';
import { TodoContextType } from './TodoContextType';

export const TodoContext = createContext<TodoContextType>({
    todos: [],
    addTodo: () => { },
    removeTodo: () => { }
});

const TodoProvider = (props: any) => {
    const [todos, setTodos] = useState<Todo[]>(get);

    useEffect(() => {
        save(todos);
    }, [todos]);

    const addTodo = (title: string) => {
        const todo: Todo = { id: todos.length + 1, title: title, done: false };
        setTodos([...todos, todo]);
    }

    const removeTodo = (todo: Todo) => {
        const index = todos.indexOf(todo);
        setTodos(todos.filter((_, i) => i !== index));
    }

    return (
        <TodoContext.Provider value={{ todos, addTodo, removeTodo }}>
            {props.children}
        </TodoContext.Provider>
    )
}

export default TodoProvider;