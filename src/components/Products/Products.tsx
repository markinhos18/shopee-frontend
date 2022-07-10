
import Link from "next/link";
import Image from "next/image";
import { ProductContainer, Title, ProductList, ProductItem, ProductName, ProductPrice, ProductSplitPrice } from "./styles";


interface Product {
    _id: string;
    name: string;
    image: string;
    // price: number;
    formattedPrice: string;
    splitPrice: string;
}

interface ProductsProps {
    products: Product[];
}


const Products = ({products}: ProductsProps) => {
  console.log(products);
  return (
    <ProductContainer>
      <Title>
        <span>Des</span>taques
      </Title>

      <ProductList>
        {products && products.map((products: Product) => (
          <ProductItem key={products._id}>
          <Link href='/'>
            <a>
            <Image src={products.image} alt="Product 1" width={230} height={230} />
              <ProductName>
                {products.name}
              </ProductName>
              <ProductPrice>
                {products.formattedPrice}
              </ProductPrice>
              <ProductSplitPrice>
                10x de {products.splitPrice} sem juros
              </ProductSplitPrice>
            </a>
          </Link>
        </ProductItem>
        ))}
        
      </ProductList>
    </ProductContainer>
  );
}


export default Products;