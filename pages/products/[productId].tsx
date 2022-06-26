import { NextPage } from "next";
import { useRouter } from "next/router";

const ProductDetail: NextPage = () => {
  const router = useRouter();
  const productId = router.query.productId;

  return (
    <div>
      <h1>Product Detail</h1>
      <p>This is the product details</p>
      {productId}
    </div>
  );
};

export default ProductDetail;
