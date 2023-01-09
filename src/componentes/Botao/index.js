import styled from "styled-components";

const BotaoContainer= styled.div`
display: flex;
justify-content: end;
align-items: center;
`
const Botao= styled.button`

font-size: 16px;
font-weight: 200;
letter-spacing: 1px;
padding: 13px 20px 13px;
outline: 0;
border: 1px solid black;
cursor: pointer;
position: relative;
background-color: rgba(0, 0, 0, 0);
user-select: none;
-webkit-user-select: none;
touch-action: manipulation;

:after {
content: "";
background-color: #d89e1a;
width: 100%;
z-index: -1;
position: absolute;
height: 100%;
top: 7px;
left: 7px;
transition: 0.2s;
}

:hover:after {
top: 0px;
left: 0px;
}

@media (min-width: 768px) {
    {
       padding: 13px 50px 13px;
   }
   }
       }
`
export function Botoes() {
    return <BotaoContainer>
        <Botao className="button-52" role="button">Enviar</Botao>
    </BotaoContainer>
}