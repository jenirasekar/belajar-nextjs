import { useRouter } from "next/router";

const DetailProductPage = () => {
  const { query } = useRouter();
  return (
    <div>
      <h1>Detail Produk</h1>
      {/* mengambil query (slug) di URL */}
      <p>Product: {query.product}</p>
    </div>
  );
};

export default DetailProductPage;
