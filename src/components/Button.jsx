import { useState } from "react";
import Axios from "axios";
import style from "/src/styles/Button.module.css";

function Button({ setJoke }) {
  const [isLoading, setIsLoading] = useState(false);

  const fetchJoke = async () => {
    setIsLoading(true);
    try {
      const response = await Axios.get(import.meta.env.VITE_API_URL);
      setJoke(response.data);
    } catch (err) {
      console.error("Error fetching joke:", err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <button className={style.button} onClick={fetchJoke}>
        New joke
      </button>
      {isLoading && <p>Loading...</p>}
      </>
  );
}

export default Button;