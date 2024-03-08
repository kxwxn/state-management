import { useRecoilState } from "recoil";
import { countState } from "../stores/recoil/store";

const Recoil = () => {
  const [count, setCount] = useRecoilState(countState);
  return <div>{count}</div>;
};

export default Recoil;
