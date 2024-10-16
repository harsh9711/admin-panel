"use client"
import { store } from "@/redux/store";
import React from "react";
import { Provider } from "react-redux";

interface AppProps {
  children: React.ReactNode;
}

const App = ({ children }: AppProps) => {
  return <Provider store={store}>{children}</Provider>;
};

export default App;
