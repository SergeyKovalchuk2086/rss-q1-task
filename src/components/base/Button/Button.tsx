import { ButtonHTMLAttributes } from "react";

export const Button = (props: ButtonHTMLAttributes<HTMLButtonElement>) => {
  const { onClick, children } = props;

  return <button onClick={onClick}>{children}</button>;
};
