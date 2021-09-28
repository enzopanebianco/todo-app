import styled, { css } from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 50px;
    width: 100%;
   
    div:nth-child(1){
        border-radius:5px 5px 0px 0px;
    }
    @media(max-width:375px){
        margin-top: 15px;
    }
`;
export const Actions = styled.div`
    display: flex;
    padding: 20px;
    justify-content: space-between;
    align-items: center;
    background: ${p => p.theme.List};
    width: 100%;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius:0px 0px 5px 5px;
    p{
        color: ${p => p.theme.VeryDarkGrayishBlue};
    }
    div p:nth-child(1){
        color:hsl(220, 98%, 61%)
    }
    div p:hover,p:nth-child(3):hover{
        color: ${p => p.theme.Text};
        cursor: pointer;
    
    }
    div{
        display: flex;
        gap: 15px;
    }
    @media(max-width:375px){
        font-size:15px ;
        div{
            display: none;
        }
    }
`
export const ActionsResponsive = styled.div`
    display: none;
    background: ${p => p.theme.List};
    margin-top: 20px;
    padding: 13px;
    font-size: 15px;
    align-items: center;
    font-weight: bolder;
    border-radius: 5px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    color: ${p => p.theme.VeryDarkGrayishBlue};
    p:nth-child(1){
        color:hsl(220, 98%, 61%)
    }
    @media(max-width:375px){
        display: flex;
        width: 100%;
        justify-content: center;
        gap: 20px;
    }
`