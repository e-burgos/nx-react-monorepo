import { FC } from "react";

interface ButtonProps {
  count?: number;
  setCount: (count: number) => void;
}

export const Button: FC<ButtonProps> = ({ count, setCount }) => {
  return (
    <button onClick={() => setCount(count + 1)}>count is {count || 0}</button>
  );
};

export default Button;
