import Head from "next/head";
import styles from "@/styles/Home.module.css";
import Navbar from "../partials/Navbar";
import About from "../partials/About";
import WhatDoWeOffer from "../partials/WhatDoWeOffer";
import Shop from "../partials/Shop";
import Socials from "../partials/Socials";

export default function Home() {
  return (
    <>
      <Head>
        <title>Rusty Operations</title>
        <meta name="description" content="Bringing People Together" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <Navbar />
        <About />
        <WhatDoWeOffer />
        <Shop />
        <Socials />
      </main>
    </>
  );
}
