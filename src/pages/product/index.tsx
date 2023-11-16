import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const ProductPage = () => {
    const [isLogin, setIsLogin] = useState(false);
    const {push} = useRouter();
    useEffect(() => {
      if (!isLogin) {
        push('/auth/login');
      }
}, []);
    
    return (
        <div>
            <h2>Product Page</h2>
        </div>
    )
}

export default ProductPage;