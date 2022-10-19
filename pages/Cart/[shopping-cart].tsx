import { NextPage } from "next";
import { faX } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import { useContext, useEffect, useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from "next/router";
import { ShoppingCartContext } from "../../contexts/ShoppingCartContext";
import { Main, Title, SubTitle, ShoppingCartContainer, ShoppingCartProducts, Separator, ButtonContainer, Product, ProductName, ProductPrice, DeleteIcon, ShoppingCartPayment, PaymentTitle, PaymmentValue, PaymmentShipping, PaymmentTotal, LoginTitle, InputGroup, Button } from "../../styles/stylescart";
import { IProduct } from "../../types";



const ShoppingCart: NextPage = () => {
  
  
  const { 
    getProducts,
    deleteProduct, 
    getTotalValue, 
    getTotalProducts, 
    getShippingValue, 
    clearAll 
  } = useContext(ShoppingCartContext);
  const [products, setProducts] = useState<IProduct[]>([]);
  const [refresh, setRefresh] = useState<number>(0);
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const router = useRouter();

  useEffect(() => {
    const values = getProducts();
    setProducts(values);
    // console.log(products);
  }, [getProducts, refresh]);

  const handleDeleteProduct = (id: string) => {
    toast.success("Produto removido do carrinho!",  {
      position: "bottom-right",
      autoClose: 2000,
    });
    deleteProduct(id);
    setRefresh(oldValue => oldValue + 1);
  }

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    const api = 'https://e-commerce-back-tau.vercel.app';
    const token = await getTokenLogin(api, email, password);
    if(!token){
      toast.error("Login inválido",  {
        position: "bottom-right",
        autoClose: 2000,
      });
      // console.log('login invalido');
      return;
    }

    const productIds: string[] = [];
    products.map(product => productIds.push(product._id));
    const sell = await sellProducts(api, token, productIds);
    // console.log(token);
    if(!sell){
      toast.error("Compra inválida",  {
        position: "bottom-right",
        autoClose: 2000,
      });
      // console.log('compra invalida');
      return;
    }
    // console.log('compra realizada com sucesso');
    clearAll();
    router.push('success');
  }

  const getTokenLogin = async (api: string, email: string, password: string): Promise<string | null> => {
    const result = await fetch(`${api}/login`, {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: {
        'Content-Type': 'application/json'
      }
    });	

    if(result.status !== 200) {
      return null;
    }
    const {token} = await result.json();
    return token;
  }

  const sellProducts = async (api: string, token: string,  products: string[]): Promise<string | null> => {
    const result = await fetch(`${api}/products/sell`, {
      method: "POST",
      body: JSON.stringify({ products }),
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      }
    });	

    if(result.status !== 200) {
      return null;
    }
    // const {token} = await result.json();
    return 'success';
  }
  
  return (products && products.length > 0 ? (

    <>
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
                      <Image src={product.image} width={180} height={180} alt=""/>
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
                <input type="text" value={email || ''} onChange={(e) => setEmail(e.currentTarget.value)} />
              </InputGroup>
              <InputGroup>
                <span>SENHA:</span>
                <input type="password" value={password || ''} onChange={(e) => setPassword(e.currentTarget.value)} />
              </InputGroup>
              <Button type='submit' onClick={handleSubmit}>
                Continuar
              </Button> 
            </ShoppingCartPayment>
          </section>
        </ShoppingCartContainer>
      </Main>
      <ToastContainer />
    </>
  ) : (

    <Main>
      <h1>Sem produto no carrinho</h1>
    </Main>

  ))
}


export default ShoppingCart;
