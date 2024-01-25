import NavCSS from "./Nav.module.css";

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
          Addition
        </li>
        <li
          className={NavCSS.link}
          onClick={() => {
            setTopic("subtraction");
          }}
        >
          Subtraction
        </li>
        <li
          className={NavCSS.link}
          onClick={() => {
            setTopic("multiplication");
          }}
        >
          Multiplication
        </li>
        <li
          className={NavCSS.link}
          // onClick={() => {
          //   setTopic("division");
          // }}
        >
          Division
        </li>
      </ul>
    </div>
  );
}
