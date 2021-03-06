import styled from "styled-components";
import { Container } from "./utils"; 




const ProductContainer = styled.main`
  ${Container};
  min-height: 589px;
`;

const ProductDetails = styled.div`
    display: grid;
    grid-template-columns: 31.25rem auto;
    gap: 1rem;
    margin: 3.125rem 0;

`;

const ProductImage = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    border: 2px solid #eaeaea;
    border-radius: 4px;
`;


const ProductName = styled.p`
    font-size: 1.875rem;
    font-weight: 700;
    margin: 0;
`;

const ProductPrice = styled.p`
    color: ${({theme}) => theme.colors.primary};
    font-size: 2.125rem;
    font-weight: 700;
    margin: 0;
    margin-top: 2.8125rem;

`;

const ProductSplitPrice = styled.small`
    font-size: 0.875rem;
    color: #999;
`;

const Button = styled.button`
    display: block;
    border: unset;
    border-radius: 4px;
    width: 290px;
    height: 60px;
    background-color: ${({theme}) => theme.colors.primary};
    color: white;
    font-weight: 700;
    font-size: 1rem;
    font-family: 'Roboto', sans-serif;
    cursor: pointer;
    margin: 2.25rem 0;
`;

const AlertAddCartSucess = styled.div`
    background-color: green;
    width: 45%;
    color: white;
    padding: 15px 0;
    text-align: center;
    border-radius: 4px;
    /* font-weight: 600; */
    margin: 1rem 0;
`;

const ProductDescription = styled.small`
    font-size: 0.875rem;
`;



const InfoTitle = styled.h2`
    font-size: 1.875rem;
    font-weight: 700;
    margin: 0;
    margin-bottom: 2rem;
    span {
        text-decoration: underline ${({ theme }) => theme.colors.primary};

    }
`;


const InfoSummary = styled.p`
    line-height: 2rem;
    
`;

export  { Button, InfoSummary, InfoTitle, ProductContainer, ProductDescription, ProductDetails, ProductImage, ProductName, ProductPrice, ProductSplitPrice, AlertAddCartSucess } ;