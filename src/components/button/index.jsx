import React from "react";
import { Style_Btn } from "./styles";

export default function Button_Components({ type, name }) {
  return (
    <>
      <Style_Btn type={type}>{name}</Style_Btn>
    </>
  );
}
