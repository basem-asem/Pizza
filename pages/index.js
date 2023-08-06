import Featured from "@/Components/Featured";
import PizzaList from "@/Components/PizzaList";
import AddButton from "@/Components/AddButton";
import Head from "next/head";
import axios from "axios";
import { useState, useEffect } from "react";
import Add from "@/Components/Add";

export default function Home({ pizzaList, admin }) {
  const [loading, setLoading] = useState(true);
  const [showAdd, setShowAdd] = useState(false); // Rename 'close' to 'showAdd'

  useEffect(() => {
    setLoading(false)
  }, []);

  return (
    <div>
      <Head>
        <title>Pizza Restaurant in Alexandria</title>
        <meta name="description" content="Best pizza shop in town" />
      </Head>
      <Featured />
      {admin && <AddButton setClose={() => setShowAdd(true)} />} {/* Update setClose */}
      {loading ? (
        <p>Loading...</p>
      ) : (
        <PizzaList pizzaList={pizzaList} />
      )}
      {showAdd && <Add setClose={() => setShowAdd(false)} />} {/* Update showAdd */}
    </div>
  );
}


export async function getServerSideProps(ctx) {
  const myCookie = ctx.req?.cookies || {};
  let admin = false;

  if (myCookie.token === process.env.TOKEN) {
    admin = true;
  }

  try {
    const res = await axios.get("https://alex-pizza.vercel.app/api/products");
    return {
      props: {
        pizzaList: res.data,
        admin,
      },
    };
  } catch (error) {
    console.error("Error fetching data:", error.message);
    return {
      props: {       
        pizzaList: [],
        admin,
      },
    };
  }
}
