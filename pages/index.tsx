import type { GetServerSideProps, NextPage } from "next";
import styled from "styled-components";
import Banner from "../src/components/Banner/Banner";
import BannerImage from '../public/img/banner1.png';
import Category from "../src/components/Category/Category";
import Products from "../src/components/Products/Products";


export const getServerSideProps: GetServerSideProps = async () => {
  // const api = 'https://ecommerceshopnode.herokuapp.com';
  const api = 'https://e-commerce-back-tau.vercel.app';
  const result = await fetch(`${api}/products`);	
  const data = await result.json();

  // convertendo o valor do preço para o formato brasileiro
  data.forEach((product: any) => {
    product.image = `${api}/uploads/${product.image}`;
    product.formattedPrice = (new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(product.price)); // Formata o preço e R$
    product.splitPrice = (new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(product.price/10)); // Formata o parcela e R$
  });
  
  
  return {
    props: {
      productsApi: data
    }
  }
}

const Home: NextPage = ({ productsApi }: any) => {
  return (
    <Main>
      <Banner image={BannerImage} width={1140} height={325} />
      <Category />
      <Products products={productsApi} />
    </Main>
  );
};

const Main = styled.main`
  min-height: 60vh;
`;

export default Home;
