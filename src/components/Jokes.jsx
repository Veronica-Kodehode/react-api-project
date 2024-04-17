import { useState, useEffect } from "react";
// import Button from "./Button";
import Axios from "axios";

function Jokes() {
  const [data, setData] = useState();

  useEffect(() => {
    const getJoke = async () => {
      const joke = await Axios.get(import.meta.env.VITE_API_URL);
      setData(joke);
    };
    getJoke();
  }, []);

  return (
    <>
      <h1>{data?.data.setup}</h1>
      <h2>{data?.data.punchline}</h2>
    </>
  );
}

export default Jokes;
