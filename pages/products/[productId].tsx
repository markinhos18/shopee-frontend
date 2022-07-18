import { GetServerSideProps, NextPage } from "next";
import Image from "next/image";
import { useContext } from "react";

import Banner from "../../src/components/Banner/Banner";
import BannerProduct from '../../public/img/banner2.png';
import { Button, InfoSummary, InfoTitle, ProductContainer, ProductDescription, ProductDetails, ProductImage, ProductName, ProductPrice, ProductSplitPrice } from "./styles";
import { IProduct } from "../../types";
import { ShoppingCartContext } from "../../contexts/ShoppingCartContext";






interface ProductsProps {
    product: IProduct;
}



export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const productId = ctx.params?.productId;
  const api = 'https://ecommerceshopnode.herokuapp.com';
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

  const { addProduct } = useContext(ShoppingCartContext);
  
  const addProductInShoppingCart = (product: IProduct) => {
    // console.log(product);
    addProduct(product);
  }



  return (

    <ProductContainer>
      <Banner image={BannerProduct} width={1140} height={145} />
      <ProductDetails>
        <ProductImage>
          <Image src={product.image} width={200} height={200} />
        </ProductImage>

        <div>
          <ProductName>{product.name}</ProductName>

          <ProductPrice>{product.formattedPrice}</ProductPrice>

          <ProductSplitPrice>10x de {product.splitPrice} sem juros</ProductSplitPrice>

          <Button onClick={() => addProductInShoppingCart(product) }>
            Adicionar ao carrinho
          </Button>

          <ProductDescription>  {product.description} </ProductDescription>
        </div>
      </ProductDetails>

      <InfoTitle><span>Inf</span>ormações do Produto</InfoTitle>
      <InfoSummary>
        {product.summary}
      </InfoSummary>
    </ProductContainer>
  );
};


export default ProductId;
