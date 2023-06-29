import Featured from "@/Components/Featured";
import PizzaList from "@/Components/PizzaList";
import Head from "next/head";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Pizza Restaurant in Alexandria</title>
        <meta name="description" content="Best pizza shop in town" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Featured />
      <PizzaList />
    </div>
  );
}
