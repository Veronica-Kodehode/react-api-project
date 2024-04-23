import { Route, Routes } from "react-router-dom";
import Jokes from "./Jokes";


export default function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Jokes />}></Route>
      </Routes>
    </>
  );
}
