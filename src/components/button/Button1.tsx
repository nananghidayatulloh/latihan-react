import { ButtonHTMLAttributes, FC, HtmlHTMLAttributes } from "react";
import "./Button.css"

type variant = "primary" | "secondary";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement>{
  label?: string;
  variant?: variant;
}
const Button1: FC<Props> = ({ label, variant = "primary", ...props }) => {
  const style = "button_" + variant;
  return (
    <>
      <button className={style} {...props}>{label}</button>
    </>
  );
};
export default Button1;