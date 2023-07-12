import Featured from "@/Components/Featured";
import PizzaList from "@/Components/PizzaList";
import AddButton from "@/Components/AddButton";
import Head from "next/head";
import axios from "axios";
import { useState } from "react";
import Add from "@/Components/Add";

export default function Home({pizzaList, admin}) {
  const [close, setClose] = useState(true)
  return (
    <div>
      <Head>
        <title>Pizza Restaurant in Alexandria</title>
        <meta name="description" content="Best pizza shop in town" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Featured />
      {admin && <AddButton setClose={setClose}/>}
      <PizzaList pizzaList={pizzaList}/>
      {!close && <Add setClose={setClose}/>}
    </div>
  );
}
export const getServerSideProps = async (ctx) =>{
  const myCookie = ctx.req?.cookies || '';
  let admin = false;

  if (myCookie.token === process.env.TOKEN) {
    admin = true;
  }
  const res = await axios.get("http://localhost:3000/api/products");
  return {
    props:{
      pizzaList: res.data,
      admin
    }
  }
}