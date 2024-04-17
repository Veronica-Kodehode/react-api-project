import { useState, useEffect } from "react";
import Button from "./Button";
import Axios from "axios";

export default function Jokes() {
  const getJoke = async () => {
    const joke = await Axios(
      "https://official-joke-api.appspot.com/random_joke"
    );
  };
  getJoke();
  return <></>;
}
