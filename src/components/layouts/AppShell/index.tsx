import Navbar from "../Navbar";

// layouting, membuat komponen luar
type AppShellProps = {
  children: React.ReactNode;
};
const AppShell = (props: AppShellProps) => {
  const { children } = props;
  return (
    <main>
      {/* navbar section */}
      <Navbar />

      {/* mirip dengan laravel yield */}
      {children}
    </main>
  );
};

export default AppShell;
