import { NextPage } from "next";


// import { Main } from "./styles";


import styled from "styled-components";
import { Container } from "../../styles/utils"; 




const Success: NextPage = () => {
  
  
  return (
    <Main>
       <h1>Compra realizada com sucesso</h1> 
    </Main>
  );
};

export default Success;




export const Main = styled.main`
    ${Container};
    min-height: 589px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Title = styled.h1`
    font-size: 1.875rem;
    font-weight: 700;
    margin: 5.625rem 0;
`;
