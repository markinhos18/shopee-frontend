import { GetServerSideProps, NextPage } from "next";
import Image from "next/image";
import { useContext } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState } from 'react'

import Banner from "../../src/components/Banner/Banner";
import BannerProduct from '../../public/img/banner2.png';
import { Button, InfoSummary, InfoTitle, ProductContainer, ProductDescription, ProductDetails, ProductImage, ProductName, ProductPrice, ProductSplitPrice, AlertAddCartSucess } from "../../styles/stylesproduct";
import { IProduct } from "../../types";
import { ShoppingCartContext } from "../../contexts/ShoppingCartContext";



interface ProductsProps {
    product: IProduct;
}


export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const productId = ctx.params?.productId;
  // const api = 'https://ecommerceshopnode.herokuapp.com';
  const api = 'https://e-commerce-back-tau.vercel.app';
  const result = await fetch(`${api}/products/${productId}`);	
  const product: IProduct= await result.json();
   
  product.image = `${api}/uploads/${product.image}`;
  product.formattedPrice = (new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(product.price)); // Formata o preço e R$
  product.splitPrice = (new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(product.price/10)); // Formata o parcela e R$
  
  
  
  return {
    props: {
      product
    }
  }
}

const ProductId: NextPage<ProductsProps> = ({ product }) => {

  const [showElement, setShowElement] = useState(false);
 

  const { addProduct } = useContext(ShoppingCartContext);

  const addProductInShoppingCart = (product: IProduct) => {
    // console.log(product);
    addProduct(product);
    toast.success("Produto adicionado ao carrinho!",  {
      position: "bottom-right",
      autoClose: 2000,
    });
    // showOrHide();
  }

  // const showOrHide = () => {
  //   setShowElement(true);
  //   setTimeout(() => {
  //     setShowElement(false);
  //   }, 2000);
  // };




  return (
    <>
      <ProductContainer>
        <Banner image={BannerProduct} width={1140} height={145} />
        <ProductDetails>
          <ProductImage>
            <Image src={product.image} width={200} height={200} alt="" />
          </ProductImage>

          <div>
            <ProductName>{product.name}</ProductName>

            <ProductPrice>{product.formattedPrice}</ProductPrice>

            <ProductSplitPrice>10x de {product.splitPrice} sem juros</ProductSplitPrice>

            <Button onClick={() => addProductInShoppingCart(product)   }>
              Adicionar ao carrinho
            </Button>

            
            {/* { showElement ? <AlertAddCartSucess>Produto adicionado no carrinho !</AlertAddCartSucess> : null } */}


            <ProductDescription>  {product.description} </ProductDescription>
          </div>
        </ProductDetails>

        <InfoTitle><span>Inf</span>ormações do Produto</InfoTitle>
        <InfoSummary>
          {product.summary}
        </InfoSummary>
      </ProductContainer>
      <ToastContainer />
    </>
  );
};


export default ProductId;
