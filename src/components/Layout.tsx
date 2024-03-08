import styled from "styled-components";
import Header from "./Header";
import { Outlet } from "react-router-dom";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100dvw;
  height: 100dvh;
`;

const OutLet = styled(Outlet)`
  display: flex;
  align-content: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

export const Layout = () => {
  return (
    <Wrapper>
      <Header />
      <OutLet />
    </Wrapper>
  );
};
