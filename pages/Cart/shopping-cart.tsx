import { faX } from "@fortawesome/free-solid-svg-icons";
import { NextPage } from "next";
import Image from "next/image";
import { useContext, useEffect, useState } from "react";

import { ShoppingCartContext } from "../../contexts/ShoppingCartContext";
import { Main, Title, SubTitle, ShoppingCartContainer, ShoppingCartProducts, Separator, ButtonContainer, Product, ProductName, ProductPrice, DeleteIcon, ShoppingCartPayment, PaymentTitle, PaymmentValue, PaymmentShipping, PaymmentTotal, LoginTitle, InputGroup, Button } from "./styles";
import { IProduct } from "../../types";






const ShoppingCart: NextPage = () => {
  
  
  const { getProducts, deleteProduct, getTotalValue, getTotalProducts, getShippingValue } = useContext(ShoppingCartContext);
  const [products, setProducts] = useState<IProduct[]>([]);
  const [refresh, setRefresh] = useState<number>(0);

  useEffect(() => {
    const values = getProducts();
    setProducts(values);
    // console.log(products);
  }, [refresh]);

  const handleDeleteProduct = (id: string) => {
    deleteProduct(id);
    setRefresh(oldValue => oldValue + 1);
  }
  
  return (products && products.length > 0 ? (
    <Main>
      <Title>Meu carrinho</Title>
      <SubTitle>Produtos</SubTitle>
      <ShoppingCartContainer>
        <ShoppingCartProducts>
          <Separator></Separator>
          {
            products && products.map((product, index) => (
              <div key={index}>
                <ButtonContainer>
                  <button onClick={() => handleDeleteProduct(product._id)}>
                    <DeleteIcon icon={faX}></DeleteIcon>
                  </button>
                </ButtonContainer>
                <Product>
                  <div>
                    <Image src={product.image} width={180} height={180} />
                  </div>
                  <ProductName>
                    {product.name}
                  </ProductName>
                  <ProductPrice>
                    {product.formattedPrice}
                  </ProductPrice>
                </Product>
                <Separator></Separator>
              </div>
            ))
          }
        </ShoppingCartProducts>

        <section>
          <ShoppingCartPayment>
            <PaymentTitle>1. Resumo do pedido</PaymentTitle>
            <PaymmentValue><span>{products.length} Produtos</span> <span>{getTotalProducts()}</span></PaymmentValue>
            <PaymmentShipping><span>Frete</span> <span>{getShippingValue()}</span></PaymmentShipping>
            <PaymmentTotal><span>Total</span> <span>{getTotalValue()}</span></PaymmentTotal>
            <Separator></Separator>
            <LoginTitle>2. Login</LoginTitle>
            <InputGroup>
              <span>E-MAIL:</span>
              <input type="text" />
            </InputGroup>
            <InputGroup>
              <span>SENHA:</span>
              <input type="password" />
            </InputGroup>
            <Button>
              Continuar
            </Button> 
          </ShoppingCartPayment>
        </section>
      </ShoppingCartContainer>
    </Main>

  ) : (

    <Main>
      <h1>Sem produto no carrinho</h1>
    </Main>

  ))
}


export default ShoppingCart;
