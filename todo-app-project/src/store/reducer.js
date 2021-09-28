import * as actions from './actions';

// ESTADO INICIAL DA APLICAÇÃO QUE COMEÇA COMO NULO
// UTILIZEI O LOCALSTORAGE PARA SALVAR A LISTA E RECUPERAR OS DADOS
const INITIAL_STATE = JSON.parse(localStorage.getItem('todos')) || null;

export default function reducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case actions.ADD_TODO://ESTA AÇÃO ADICIONA MAIS UM TODO PARA LISTA
        //MAS PRIMEIRO ELE VERFICA SE ESSA LISTA ESTA VAZIA PARA PODER APLICAR O SPREAD OPERATOR
           state = JSON.parse(localStorage.getItem('todos'));
            if (state) {
                localStorage.setItem('todos',
                JSON.stringify([...state,{ id: Math.random(), text: action.text, active: action.active }]));
                return [...state,{ id: Math.random(), text: action.text, active: action.active }]
            }
            else {
                localStorage.setItem('todos',
                JSON.stringify([{ id: Math.random(), text: action.text, active: action.active }]));
                return [{ id: Math.random(), text: action.text, active: action.active }]
            }
           
        case actions.REMOVE_TODO:
            ///REMOVE O TODO: FILTRA TODOS QUE NÃO SÃO DAQUELE ID PASSADO
            state = JSON.parse(localStorage.getItem('todos'));
            const newStateFiltered = state.filter(todo => todo.id !== action.id);
            localStorage.setItem('todos',JSON.stringify([...newStateFiltered]));
            return newStateFiltered;
    
        case actions.TOGGLE_TODO:///MARCAR OU DESMARCAR COMO COMPLETA A TAREFA
            state = JSON.parse(localStorage.getItem('todos'));
            const newState = state.map(todo =>
                todo.id === action.id ?
                    { ...todo, active: !todo.active } :
                    todo
            )
           localStorage.setItem('todos',JSON.stringify([...newState]));
            return newState;
        case actions.CLEAR_LIST:
            //LIMPA TODOS AQUELES QUE ESTÃO COMPLETOS PELO FILTER
            const clearState = state.filter(todo=>todo.active===false);
            localStorage.setItem('todos',JSON.stringify([...clearState]));
            return clearState;
        
        case actions.FILTER_BY_ACTIVE:
            // FILTRA TODOS PELA VARIÁVEL ACTIVE PODENDO RETORNAR TANTO AQUELES
            // QUE NÃO ESTÃO COMPLETOS COMO OS COMPLETOS
            state = JSON.parse(localStorage.getItem('todos'));
            return state.filter(todo => todo.active === action.active);
        case actions.GET_ALL_TODOS:
            state = JSON.parse(localStorage.getItem('todos'));
            return state;
        default:
            return state
    }
}