import "./globals.css";
import "./fanta.css";
import Head from "./head";
import Link from "next/link";
import Cart from "@/components/Cart";
import EmailInput from "@/components/EmailInput";
import { ProductProvider } from "@/context/ProductContext";

export const metadata = {
  title: "Smolstore",
  description: "A super cool store for programmers and productivity!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head />
      <body>
        <ProductProvider>
          <div id="portal" />
          <div id="app">
            <header>
              <div className="header-content">
                <Link href={"/"}>
                  <h1>Smolstore</h1>
                </Link>

                <h5 className="mid-text">- Cool stuff for cool people -</h5>
                <Cart />
              </div>
            </header>
            <main>{children}</main>
          </div>
          <div className="hr" />
          <footer>
            <div className="email-container">
              <h5>
                Get a sneak peak at new additions to the store, special offers,
                and so much more.{" "}
              </h5>
              <EmailInput />
            </div>

            <div className="links-container">
              <div>
                <h3>Smoljames</h3>
                <Link target="_blank" href={"/"}>
                  Smoljames Hub
                </Link>
                <Link target="_blank" href={"/"}>
                  Roadmap
                </Link>
              </div>
              <div>
                <h3>Store</h3>
                <Link href={"/"}>Home</Link>
                <Link href={"/cart"}>Cart</Link>
              </div>
              <div>
                <h3>Support</h3>
                <Link href={"/contact"}>Contact</Link>
                <Link href={"/faq"}>FAQs</Link>
              </div>
            </div>

            <div className="socials">
              <p>
                ©{" "}
                <a href="https://rauwebport.netlify.app/" target="_blank">
                  webdevbyrau
                </a>{" "}
                2025 <br /> Built with NextJS &{" "}
                <a target="_blank" href="https://www.fantacss.smoljames.com/">
                  FantaCSS
                </a>{" "}
                🔥
              </p>
              <div className="social-links">
                <Link href={"https://github.com/rau03"} target="_blank">
                  <i className="fa-brands fa-github"></i>
                </Link>
                <Link href={"www.linkedin.com/in/raucp"} target="_blank">
                  <i className="fa-brands fa-linkedin"></i>
                </Link>
                <Link href={"https://x.com/webdevbyrau"} target="_blank">
                  <i className="fa-brands fa-square-x-twitter"></i>
                </Link>
              </div>
            </div>
          </footer>
        </ProductProvider>
      </body>
    </html>
  );
}
