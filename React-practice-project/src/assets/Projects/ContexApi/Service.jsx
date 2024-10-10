import "./contex.css";
import { useBioContext } from "./ContexApi.jsx";

// Child component using context API
export const Service = () => {
  const { Myname, MyAge } = useBioContext();

  return <div>this is context api calling and my Age is {MyAge}</div>;
};
