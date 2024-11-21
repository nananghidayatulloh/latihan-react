/* import "./Avatar.css";

const Avatar = () => {
  return (
    <>
      <div className="avatar">
        <img src="https://images.unsplash.com/photo-1554151228-14d9def656e4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aHVtYW58ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60" alt="" />
      </div>
    </>
  );
};

export default Avatar; */

import { FC } from "react";
import "./Avatar.css";

type size = "lg" | "sm" | "md";

interface Props {
  url?: string;
  label?: string;
  size?: size;
}
const Avatar: FC<Props> = ({ url, label, size }) => {
  return (
    <>
      <div className={`avatar avatar_${size}`}>
        {url && <img src={url} alt={label} />}
      </div>
    </>
  );
};

Avatar.defaultProps = { size: "md" };
export default Avatar;