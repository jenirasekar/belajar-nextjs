import Link from "next/link";
import { useRouter } from "next/router";

// next router untuk navigating halaman tanpa refresh
const LoginPage = () => {
  // mengambil function push dari useRouter
  const { push } = useRouter();

  // fungsi untuk redirect halaman
  const handlerLogin = () => {
    push("/product");
  };
  return (
    <div>
      <h1>Login Page</h1>
      {/* memanggil fungsi handlerLogin */}
      <button onClick={() => handlerLogin()}>Login</button>
      <p>
        Belum punya akun? Registrasi <Link href={"/auth/login"}>di sini</Link>
      </p>
    </div>
  );
};

export default LoginPage;
