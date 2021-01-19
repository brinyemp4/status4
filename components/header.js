import Head from "next/head";

const Header = () => {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="status4 - A custom monitoring tool" />
        <meta
          name="keywords"
          content="status4, monitoring tool, nextjs, hackathon - 2021, vercel, hashnode"
        />
        <title>STATUS4 - A monitoring tool</title>
      </Head>
      <img className="h-12 w-12" src="./assets/logo.png" alt="status4" />
    </>
  );
};

export default Header;
