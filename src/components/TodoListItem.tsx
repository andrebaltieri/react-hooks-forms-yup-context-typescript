import React, { useContext } from 'react';
import { Todo } from '../models/Todo';
import { TodoContext } from '../contexts/TodoContext';
import { TodoContextType } from '../contexts/TodoContextType';

interface TodoListItemProps {
    todo: Todo
}

const TodoListItem = (props: TodoListItemProps) => {
    const { removeTodo } = useContext<TodoContextType>(TodoContext);

    const onRemove = (todo: Todo) => {
        removeTodo(todo);
    }

    return (
        <tr className="uk-animation-slide-bottom-medium" id={props.todo.id.toString()}>
            <td className="uk-width-auto">{props.todo.id}</td>
            <td className="uk-width-expand">{props.todo.title}</td>
            <td className="uk-width-auto uk-animation-toggle">
                <button className="uk-icon-button uk-button-danger uk-animation-shake" onClick={() => onRemove(props.todo)} uk-icon="trash"></button>
            </td>
        </tr>
    );
}

export default TodoListItem;