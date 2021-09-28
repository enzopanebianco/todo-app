import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import check from '../../assets/img/icon-check.svg';
import { addTodo } from '../../store/actions';
import { DarkTheme, LightTheme } from '../../Theme/colors';
import TodoList from '../TodoList';
import * as S from './styles';

function MainApp({ setTheme, theme }) {
    const [actived, setActived] = useState(false);
    const [text, setText] = useState('');
    const dispatch = useDispatch();

    function handleNewToDo(e) {
        if (e.key === 'Enter') {
            dispatch(addTodo(text, actived));
       }
    }

    //MUDAR O TEMA PELO TITLE DO OBJETO DEFINIDO
    function changeTheme() {
        setTheme(theme.title === 'light' ? DarkTheme : LightTheme)
    }
   
    return (
        <S.Container>
            <S.ImgBackground />
            <S.Content>
                <S.Header>
                    <S.Title>TODO</S.Title>
                    <img src={theme.IconChangeTheme} alt='mudar tema' onClick={changeTheme} />
                </S.Header>
                <S.InputArea>
                        <div>
                            <input type="checkbox" checked={actived} 
                            name="check" id="check" onChange={() => setActived(!actived)} />
                            <label htmlFor="check">
                                {actived && <img alt='check' src={check} />}
                            </label>
                        </div>
                        <input type="text" 
                        onKeyDown={e =>handleNewToDo(e)} 
                        value={text} 
                        onChange={e => setText(e.target.value)} 
                        placeholder="Create a new todo..." />
                </S.InputArea>
                <TodoList /> {/* Lista de todos */}
            <S.FooterInfo>Drag and drop to reorder list</S.FooterInfo>
            </S.Content>
        </S.Container>
    );
}

export default MainApp;