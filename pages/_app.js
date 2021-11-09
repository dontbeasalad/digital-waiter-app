import "../styles/globals.css";
import { FormspreeProvider } from "@formspree/react";

function MyApp({ Component, pageProps }) {
  return (
    <FormspreeProvider project="1807005775965453890">
      <Component {...pageProps} />
    </FormspreeProvider>
  );
}

export default MyApp;
