import Footer from "./Footer";
import Navbar from "./Navbar";
import Head from "next/head";

export default function Layout({children}){
    return(
        <>
        <Head>
            <link rel="shorcut icon" href="/images/favicon.ico" />
            <title>PokeNext</title>
        </Head>
        <Navbar/>
        <main className="main-container">{children}</main>
        <Footer/>
        </>
    )
}