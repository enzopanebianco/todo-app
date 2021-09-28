import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    min-height: 100vh;
    background: ${p => p.theme.Primary};
    display: flex;
    max-height: 200vh;
    justify-content: center;
    @media(max-width:375px){
        width: 375px;
        min-height: 100vh;
        max-height: 500vh;
    }
`;
export const ImgBackground = styled.div`
    width:100%;
    position:absolute;
    z-index: 1;
    top: 0px;
    height: 300px;
    background: ${p => `url(${p.theme.BgImg})`};
    @media(max-width:375px){
        background: ${p => `url(${p.theme.BgMobileImg})`};
        height: 200px;
    }
`;
export const Content = styled.div`
    z-index: 5;
    position: relative;
    display: flex;
    width: 40%;
    flex-direction: column;
    margin-top: 100px;
    margin-bottom: 50px;
    @media(max-width:375px){
        width: 90%;
        margin-top: 50px;
    }
`;
export const Header = styled.header`
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 50px;
    img{
        cursor: pointer;
        width: 40px;
    }
    @media(max-width:375px){
        margin-bottom: 30px;
        img{
            width: 25px;
        }
    }
`;
export const Title = styled.h1`
    color: hsl(0, 0%, 98%);
    letter-spacing: 20px;
    @media(max-width:375px){
        font-size: 30px;
        letter-spacing: 10px;
    }
`;

export const InputArea = styled.div`
    background: ${p => p.theme.List};
    display: flex;
    padding: 20px;
    align-items: center;
    border-radius: 5px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    input[type="text"]{
        border: 0;
        width: 100%;
        outline: none;
        margin-left: 20px;
        background: transparent;
        color: ${p => p.theme.Text};
    }
    label:before{
        content:'';
        display: inline-block;
        border: 1px solid ${p=>p.theme.DarkGrayishBlue};
        border-radius: 10px;
        width: 20px;
        height: 20px;
        cursor: pointer;
    }

    label{
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
        position: absolute;
        top: 117px;
        width: 12px;
        left: 26px;
    }
   @media(max-width:375px){
       padding: 13px;
       label img{
        top: 80px;
        left: 19px;
       }
   }
`;
export const FooterInfo = styled.span`
    color: ${p=>p.theme.VeryDarkGrayishBlue};
    align-self: center;
    transform: translateY(50px);
`;

