import { useAtom } from "jotai";
import { counter } from "../stores/jotai/store";

const Jotai = () => {
  const [count, setCount] = useAtom(counter);
  const onClick = () => {
    setCount((prev) => prev + 1);
  };
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={onClick}>Click</button>
    </div>
  );
};

export default Jotai;
