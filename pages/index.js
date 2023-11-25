import React, { useState, useEffect } from "react";
import Featured from "@/Components/Featured";
import PizzaList from "@/Components/PizzaList";
import AddButton from "@/Components/AddButton";
import Add from "@/Components/Add";
import Head from "next/head";
import axios from "axios";

export default function Home({ pizzaList, admin }) {
  const [loading, setLoading] = useState(true);
  const [showAdd, setShowAdd] = useState(false);

  // Watch for changes in pizzaList props
  useEffect(() => {
    if (pizzaList.length > 0) {
      console.log("pizza is here");
      // Handle logic when pizzaList is not empty
    }
  }, [pizzaList]); // Re-run the effect whenever pizzaList changes

  useEffect(() => {
    setLoading(false);
  }, []);

  return (
    <div>
      <Head>
        <title>Pizza Restaurant in Alexandria</title>
        <meta name="description" content="Best pizza shop in town" />
      </Head>
      <Featured />
      {admin && <AddButton setClose={() => setShowAdd(true)} />}
      {loading ? (
        <p>Loading...</p>
      ) : (
        <PizzaList pizzaList={pizzaList} />
      )}
      {showAdd && <Add setClose={() => setShowAdd(false)} />}
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
