import styled from 'styled-components';

export const TodoItem = styled.div`
    background: ${p => p.theme.List};
    width: 100%;
    padding: 20px;
    display: flex;
    border-bottom: 1px solid ${p => p.theme.DarkGrayishBlue};
    align-items: center;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    span{
        color: ${p => p.theme.VeryDarkGrayishBlue};
        font-size: 30px;
        font-weight: 400;
        cursor: pointer;
       
    }
    ////O MESMO CODIGO DO OUTRO CHECKBOX
    article{
        label:before{
            content:'';
            display: inline-block;
            border: 1px solid ${p => p.theme.DarkGrayishBlue};
            border-radius: 10px;
            width: 20px;
            height: 20px;
            cursor: pointer;
            }
            input[type="checkbox"]{
                display: none;
                cursor: pointer;
            }
            input[type="checkbox"]:hover + label:before{
                border-image:1px solid linear-gradient(to right,hsl(192, 100%, 67%),hsl(280, 87%, 65%));
            }
            input[type="checkbox"]:checked + label:before{
                cursor: pointer;
                background-image: linear-gradient(to right,hsl(192, 100%, 67%),hsl(280, 87%, 65%));
            }
            label img{
                transform: translateX(-17px) translateY(7px);
                position:absolute;

                width: 12px;
            }
    }
    @media(max-width:375px){
        padding: 13px;
        
    }
`;
export const Title = styled.p`
    color: ${p => p.active ? `${p.theme.VeryDarkGrayishBlue}` : `${p.theme.Text}`};
    text-decoration:${p => p.active ? 'line-through' : 'none'};
    margin-left: 20px;
    width: 100%;
    @media(max-width:375px){
        font-size:15px ;
        
    }
`;