import type { AppProps } from "next/app";
import { wrapper } from "../app/store";
import Link from "next/link";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <ul>
        <li>
          <Link href="/">counter</Link>
        </li>
        <li>
          <Link href="/kanye">kanye</Link>
        </li>
      </ul>

      <Component {...pageProps} />
    </>
  );
}

export default wrapper.withRedux(MyApp);
