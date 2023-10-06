import React from "react";
import { StoreProvider } from "./store";
import Router from "./router";
import AppRouter from "./router";


const App = () => {
  return  (
  <StoreProvider>
   <AppRouter/>
  </StoreProvider>
  )
};
export default App;
