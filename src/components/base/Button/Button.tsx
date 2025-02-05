import { ButtonHTMLAttributes } from "react";

export const Button = (props: ButtonHTMLAttributes<HTMLButtonElement>) => {
  const { onClick, disabled, children, style } = props;

  return (
    <button disabled={disabled} onClick={onClick} style={style}>
      {children}
    </button>
  );
};
