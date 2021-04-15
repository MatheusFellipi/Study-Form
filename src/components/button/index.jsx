import React from "react";
import { StyleBtn } from "./styles";

export default function Button_Components({ type, name }) {
  return (
    <>
      <StyleBtn type={type}>{name}</StyleBtn>
    </>
  );
}
