
import Link from "next/link";
import Image from "next/image";
import { ProductContainer, Title, ProductList, ProductItem, ProductName, ProductPrice, ProductSplitPrice } from "./styles";
import { IProduct } from "../../../types";


interface ProductsProps {
    products: IProduct[];
}


const Products = ({products}: ProductsProps) => {
  console.log(products);
  return (
    <ProductContainer>
      <Title>
        <span>Des</span>taques
      </Title>

      <ProductList>
        {products && products.map((product) => (
          <ProductItem key={product._id}>
          <Link href={`/products/${product._id}`}>
            <a>
            {/* <Image src={product.image} alt="Product 1" width={230} height={230} /> */}
            <Image src={`https://shopee-frontend-teal.vercel.app?${product.image}`} alt="Product 1" width={230} height={230} />
              <ProductName>
                {product.name}
              </ProductName>
              <ProductPrice>
                {product.formattedPrice}
              </ProductPrice>
              <ProductSplitPrice>
                10x de {product.splitPrice} sem juros
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