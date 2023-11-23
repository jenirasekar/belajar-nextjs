import { useRouter } from "next/router";
import { useEffect, useState } from "react";

type ProductType = {
  id: number;
  name: string;
  price: number;
  size: string;
};

const ProductPage = () => {
  const [isLogin, setIsLogin] = useState(false);
  const { push } = useRouter();
  const [products, setProducts] = useState<ProductType[]>([]);

  // useEffect(() => {
  //   if (!isLogin) {
  //     push("/auth/login");
  //   }
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [isLogin, push]);

  useEffect(() => {
    fetch("/api/product")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.data);
      });
  }, []);

  return (
    <div>
      <h2>Product Page</h2>
      {products.map((product: ProductType) => (
        <div key={product.id}>
          <h3>{product.name}</h3>
          <p>{product.price}</p>
        </div>
      ))}
    </div>
  );
};

export default ProductPage;
