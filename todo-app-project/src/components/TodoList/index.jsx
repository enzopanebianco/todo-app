import React from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import * as S from './styles';
import { clearList, filterByActive, getAllTodos } from '../../store/actions';
import Item from '../Item';

function TodoList() {
    const state = useSelector(state => state);
    const dispatch = useDispatch();
    function handleClearList() {
        dispatch(clearList())
    }
    //FILTRA OS TODOS CONFORME O ACTIVE, PODENDO SER ATIVO OU COMPLETO
    function handleFilterTodo(active) {
        dispatch(filterByActive(active));
    }
    function handleGetAllTodos() {
        dispatch(getAllTodos())
    }


    return (
        <>
            <S.Container >
                {state && state.map((st, index) => {
                    // ESTE COMPONENTE É CADA TODO DA LISTA
                    return <Item 
                    data={st} index={index} key={st?.id} />
                })}
                
                <S.Actions>
                    <p>{state?.filter(todo=>todo.active===false).length} items left</p>
                    <div>
                        <p onClick={handleGetAllTodos}>All</p>
                        <p onClick={() => handleFilterTodo(false)} >Active</p>
                        <p onClick={() => handleFilterTodo(true)}>Completed</p>
                    </div>
                    <p onClick={handleClearList}>Clear Completed</p>
                </S.Actions>

                {/* DIV QUE SÓ RENDERIZA QUANDO A TELA ESTIVER PARA MOBILE */}
                <S.ActionsResponsive>

                    <p onClick={handleGetAllTodos}>All</p>
                    <p onClick={() => handleFilterTodo(false)} >Active</p>
                    <p onClick={() => handleFilterTodo(true)}>Completed</p>
                </S.ActionsResponsive>
            </S.Container>
        </>
    );
}

export default TodoList;