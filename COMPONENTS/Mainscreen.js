import React from "react";
import Topview from "./Topview";
import { useCountContext } from "./countContextProvider";
export default function Mainscreen(){
  const countContext = useCountContext();
  console.log(countContext);
  return (
    <>
    <Topview />
    </>
  );
}