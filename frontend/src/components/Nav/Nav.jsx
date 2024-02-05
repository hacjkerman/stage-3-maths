import NavCSS from "./Nav.module.css";
import Link from "next/link";

export default function Nav(props) {
  const setTopic = props.setTopic;
  return (
    <div className={NavCSS.navBox}>
      <ul className={NavCSS.links}>
        <li
          className={NavCSS.link}
          onClick={() => {
            setTopic("addition");
          }}
        >
          <Link href="/addition">Addition</Link>
        </li>
        <li
          className={NavCSS.link}
          onClick={() => {
            setTopic("subtraction");
          }}
        >
          <Link href="/subtraction">Subtraction</Link>
        </li>
        <li
          className={NavCSS.link}
          onClick={() => {
            setTopic("multiplication");
          }}
        >
          <Link href="/multiplication">Multiplication</Link>
        </li>
        <li
          className={NavCSS.link}
          // onClick={() => {
          //   setTopic("division");
          // }}
        >
          <Link href="/division">Division</Link>
        </li>
      </ul>
    </div>
  );
}
