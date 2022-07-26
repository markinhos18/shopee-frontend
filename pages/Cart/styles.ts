import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import { Container } from "../../styles/utils"; 





export const Main = styled.main`
    ${Container};
`;

export const Title = styled.h1`
    font-size: 1.875rem;
    font-weight: 700;
    margin: 5.625rem 0;
`;

export const SubTitle = styled.h2`
    font-size: 1rem;
    font-weight: 700;
    margin: 0 0 1rem 0 ;
`;

export const ShoppingCartContainer = styled.div`
    display: grid;
    grid-template-columns: 780px auto;
    gap: 1.5rem;
    min-height: 800px;
`;

export const ShoppingCartProducts = styled.section`

`;

export const Separator = styled.hr`
    border: 1px solid #c8c8c8;
    border-radius: 0px;
`;

export const ButtonContainer = styled.div`
    display: flex;
    justify-content: flex-end;
    margin: 0.8rem 0;

    button {
        border: unset;
        background: unset;
        cursor: pointer;
    }
`;

export const DeleteIcon = styled(FontAwesomeIcon)`
    color: ${({theme}) => theme.colors.secondary};
    font-size: 1rem;
`;

export const Product = styled.div`
    display: grid;
    grid-template-columns: auto 350px auto;
`;

export const ProductName = styled.h3`
    font-size: 1rem;
    color: ${({theme}) => theme.colors.secondary};
    font-weight: 700;
    padding: 0;
    margin: 0;
`;

export const ProductPrice = styled.p`
    font-size: 1.125rem;
    font-weight: 700;
    padding: 0;
    margin: 0;
    place-self: start end;
`;

export const ShoppingCartPayment = styled.div`
    background-color: #f0f1ef;
    border-radius: 1rem;
    padding: 1rem;
`;

export const PaymentTitle = styled.p`
    font-size: 1.5rem;
    font-weight: 700;
    text-transform: uppercase;
    margin: 0;
`;

export const PaymmentValue = styled.div`
    font-size: 1rem;
    font-weight: 300;
    color: ${({theme}) => theme.colors.secondary};
    margin: 0;
    margin-top: 5rem;
    display: flex;
    justify-content: space-between;

    span{
        display: block;
    }
`;

export const PaymmentShipping = styled.div`
    font-size: 1rem;
    font-weight: 300;
    color: ${({theme}) => theme.colors.secondary};
    margin: 0;
    margin-top: 1.5rem;
    display: flex;
    justify-content: space-between;
    
    span{
        display: block;
    }
`;

export const PaymmentTotal = styled.div`
    font-size: 1.125rem;
    font-weight: 700;
    text-transform: uppercase;
    margin: 3.125rem 0 5rem 0;
    
    display: flex;
    justify-content: space-between;
    
    span{
        display: block;
    }
`;

export const LoginTitle = styled.h3`
    font-size: 1.5rem;
    font-weight: 700;
    text-transform: uppercase;
    margin: 2rem 0;

`;

export const InputGroup = styled.div`
    span {
        text-transform: uppercase;
        margin-bottom: 0.625rem;
        display: block;
    }

    input {
        width: 100%;
        height: 2rem;
        border: unset;
    }

    margin-bottom: 1.3rem;

`;

export const Button = styled.button`
    display: block;
    border: inset;
    border-radius: 1rem;
    background-color: ${({theme}) => theme.colors.primary};
    color: white;
    font-weight: 700;
    font-size: 1.5rem;
    font-family: 'Roboto', sans-serif;
    text-transform: uppercase;
    cursor: pointer;
    margin: 0 auto;
    padding: 10px;
    text-align: center;
    width: 100%;
`;