import React from "react";
import { Label, Span, Input } from "./styles";
export default function Input_Components({
  type,
  name,
  value,
  id,
  label,
  handleBlur,
  placeholder,
  handleChanger,
}) {
  return (
    <>
      <Label htmlFor={label}>
        <Span>{label}</Span>
        <Input
          type={type}
          placeholder={placeholder}
          name={name}
          id={id}
          onChange={handleChanger}
          onBlur={handleBlur}
          value={value}
        />
      </Label>
    </>
  );
}
