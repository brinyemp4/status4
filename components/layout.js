import Meta from "./meta";
import Header from "./header";
import Footer from "./footer";

const Layout = (props) => {
  return (
    <>
      <Meta />
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <div className="container mx-auto">{props.children}</div>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
