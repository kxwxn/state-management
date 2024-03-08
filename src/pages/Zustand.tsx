import { useStore } from "zustand";
import { zuStore } from "../stores/zustand/store";
import { devtools } from "zustand/middleware";

const Zustand = () => {
  const { count } = useStore(zuStore);
  return <div>{count}</div>;
};

export default Zustand;
