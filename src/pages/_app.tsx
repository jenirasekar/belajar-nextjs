import "@/styles/globals.css";
import type { AppProps } from "next/app";
import AppShell from '@/components/layouts/AppShell'

export default function App({ Component, pageProps }: AppProps) {
  return (
    // implementasi komponen luar yang dibuat di @/components/layouts/AppShell
    <AppShell>
      <Component {...pageProps} />
    </AppShell>
  );
}
