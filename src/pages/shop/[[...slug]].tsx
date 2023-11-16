import { useRouter } from "next/router";

const ShopPage = () => {
  const { query } = useRouter();
  return (
    <div>
      <h1>Shop Page</h1>

      {/* mengambil query (slug) di URL */}
      {/* <p>Shop: {`${query.s && query.slug[0] + "-" + query.slug[1]}`}</p> */}
      <p>Shop: {query.slug ? query.slug[0] + "-" + query.slug[1] : ""}</p>
    </div>
  );
};

export default ShopPage;
