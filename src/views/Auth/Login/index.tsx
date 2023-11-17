import Link from "next/link";
import useRouter from "next/router";
import styles from "./Login.module.scss";

// next router untuk navigating halaman tanpa refresh
const LoginViews = () => {
  // mengambil function push dari useRouter
  const { push } = useRouter();

  // fungsi untuk redirect halaman
  const handleLogin = () => {
    push("/product");
  };
  return (
    <div className={styles.container}>
      <h1 className="text-3xl">Login Page</h1>
      {/* memanggil fungsi handlerLogin */}
      <button onClick={() => handleLogin()}>Login</button>
      <p style={{ color: "red", textDecoration: "underline" }}>
        Belum punya akun? Registrasi <Link href={"/auth/login"}>di sini</Link>
      </p>
    </div>
  );
};

export default LoginViews;
