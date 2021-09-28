import React, { Fragment } from 'react';
import { useDispatch } from 'react-redux';
import {  removeTodo, toggleTodo } from '../../store/actions';
import * as S from '../TodoList/styles';
import checkImg from '../../assets/img/icon-check.svg'

// import { Container } from './styles';

function Item({data}) {
    const dispatch = useDispatch();
    //CHAMANDO OS DISPATCHS PARA REALIZAR AS AÇÕES DO REDUX
    function handleDeleteTodo(id) {
        dispatch(removeTodo(id));
    }
    //ALTERA O VALOR DO ACTIVE
    function handleToggleTodo(id) {
        dispatch(toggleTodo(id));
    }
   
    return (
        <Fragment>
            <S.TodoItem  >
                <article >
                    <input
                        onClick={() => handleToggleTodo(data.id)} type="checkbox"
                        name={data.id} id={data.id} checked={data.active} />
                    <label htmlFor={data.id}>
                        {data.active && <img alt='check' src={checkImg} />}
                    </label>
                </article>
                <S.Title active={data.active} >{data.text}</S.Title>
                <span onClick={() => handleDeleteTodo(data.id)} >x</span>
            </S.TodoItem>
        </Fragment>
    )
}

export default Item;