import React, { useContext } from 'react';
import { TodoContext } from '../contexts/TodoContext';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers';
import * as yup from 'yup';
import { TodoContextType } from '../contexts/TodoContextType';

const schema = yup.object().shape({
    title: yup.string().required('Tarefa inválida'),
});

interface AddTodoForm {
    title: string
}

const AddTodo = () => {
    const { addTodo } = useContext<TodoContextType>(TodoContext);
    const { register, handleSubmit, errors } = useForm({
        resolver: yupResolver(schema),
    });

    const onSubmit = (data: AddTodoForm, e: any) => {
        addTodo(data.title);
        e.target.reset();
    }

    return (
        <form onSubmit={handleSubmit<AddTodoForm>(onSubmit)}>
            <div className="uk-grid">
                <div className="uk-margin uk-width-expand">
                    <input type="text" name="title" id="title" placeholder="Nova tarefa..." className="uk-input" ref={register} />
                    <span><small><strong className="uk-text-danger">{errors.title?.message}</strong></small></span>
                </div>
                <div className="uk-width-auto">
                    <button type="submit" className="uk-button uk-button-primary">Salvar</button>
                </div>
            </div>
        </form>
    );
}

export default AddTodo;