import React from "react";
import { RouterProvider } from "react-router-dom";
import { routes } from "./utils/routes";
import { styled, createGlobalStyle } from "styled-components";

const Layout = styled.div`
  display: flex;
`;

const GlobalCSS = createGlobalStyle`
    body{
        font-family: "Helvetica Neue";
        color: black;
    }
    
   a {
       text-decoration: none;
       color: black;
   }
`;

function App() {
  return (
    <Layout className="App">
      <GlobalCSS />
      <RouterProvider router={routes} />
    </Layout>
  );
}

export default App;
