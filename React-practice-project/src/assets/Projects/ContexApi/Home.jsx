import "./contex.css";
import { useBioContext } from "./ContexApi.jsx";

export const Home = () => {
  const { Myname, MyEmail, MyAge } = useBioContext();

  return (
    <div>
      <h1>My Name Is {Myname}</h1>
      <h2>my Email is {MyEmail}</h2>
    </div>
  );
};
