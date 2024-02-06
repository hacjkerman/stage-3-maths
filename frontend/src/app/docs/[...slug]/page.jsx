import Add from "../../addition/page.jsx";
import Divide from "../../divide/page.jsx";
import Minus from "../../subtract/page.jsx";
import Multiply from "../../multiply/page.jsx";
export default function Docs({ params }) {
  if (params.slug.length === 1) {
    switch (params.slug[0]) {
      case "addition":
        return Add();
      case "subtraction":
        return Minus();
      case "division":
        return Divide();
      case "multiplication":
        return Multiply();
    }
    return <h1>Viewing {params.slug[0]} page </h1>;
  } else if (params.slug.length == 2) {
    return (
      <h1>
        Viewing {params.slug[0]} of difficulty {params.slug[1]}
      </h1>
    );
  }
  return <h1>Docs home page</h1>;
}
