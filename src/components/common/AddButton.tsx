import { Link } from "react-router-dom";

type Props = {
  link: string;
};

export function AddButton(props: Props) {
  return (
    <div>
      <Link to={props.link}>＋</Link>
    </div>
  );
}
