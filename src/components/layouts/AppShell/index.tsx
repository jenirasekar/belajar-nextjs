import { useRouter } from "next/router";
import Navbar from "../Navbar";

// layouting, membuat komponen luar
type AppShellProps = {
  children: React.ReactNode;
};

const disableNavbar = ["/auth/register", "/auth/login", "/404"];

const AppShell = (props: AppShellProps) => {
  const { children } = props;
  const { pathname } = useRouter();
  return (
    <main>
      {/* navbar section */}
      {!disableNavbar.includes(pathname) && <Navbar />}
      {/* mirip dengan laravel yield */}
      {children}
    </main>
  );
};

export default AppShell;
