import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";

<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
  integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
  crossorigin="anonymous"
/>;

const Calculator = () => {
  const [calc, setCalc] = useState("");
  const [result, setResult] = useState("");

  const operations = ["/", "*", "+", "-", "."];

  const updateCalc = (value) => {
    if (
      (operations.includes(value) && calc === "") ||
      (operations.includes(value) && operations.includes(calc.slice(-1)))
    ) {
      return;
    }

    setCalc(calc + value);

    if (!operations.includes(value)) {
      setResult(eval(calc + value).toString());
    }
  };

  const calculate = () => {
    setCalc(eval(calc).toString());
  };

  const deleteLast = () => {
    if (calc === "") {
      return;
    } else {
      const value = calc.slice(0, -1);
      setCalc(value);
      if (value === "") {
        setResult("");
      } else {
        setResult(eval(value).toString());
      }
    }
  };

  const clearAll = () => {
    setCalc("");
    setResult("");
  };

  return (
    <div className="calculator">
      <div className="display">
        {result ? (
          <span>
            <sub>({result})</sub>
          </span>
        ) : (
          ""
        )}{" "}
        {calc || 0}
      </div>
      <div className="buttons">
        <div className="digits">
          <Button variant="secondary" size="lg" onClick={() => updateCalc("1")}>
            1
          </Button>
          <Button variant="secondary" size="lg" onClick={() => updateCalc("2")}>
            2
          </Button>
          <Button variant="secondary" size="lg" onClick={() => updateCalc("3")}>
            3
          </Button>
          <Button variant="secondary" size="lg" onClick={() => updateCalc("4")}>
            4
          </Button>
          <Button variant="secondary" size="lg" onClick={() => updateCalc("5")}>
            5
          </Button>
          <Button variant="secondary" size="lg" onClick={() => updateCalc("6")}>
            6
          </Button>
          <Button variant="secondary" size="lg" onClick={() => updateCalc("7")}>
            7
          </Button>
          <Button variant="secondary" size="lg" onClick={() => updateCalc("8")}>
            8
          </Button>
          <Button variant="secondary" size="lg" onClick={() => updateCalc("9")}>
            9
          </Button>

          <Button variant="secondary" size="lg" onClick={() => updateCalc(".")}>
            .
          </Button>
          <Button variant="secondary" size="lg" onClick={() => updateCalc("0")}>
            0
          </Button>
          <Button
            size="lg"
            disabled={calc === "" || operations.includes(calc.slice(-1))}
            onClick={() => calculate()}
          >
            =
          </Button>
        </div>

        <div className="operators">
          <Button variant="info" size="lg" onClick={() => updateCalc("/")}>
            /
          </Button>
          <Button variant="info" size="lg" onClick={() => updateCalc("*")}>
            *
          </Button>
          <Button variant="info" size="lg" onClick={() => updateCalc("+")}>
            +
          </Button>
          <Button variant="info" size="lg" onClick={() => updateCalc("-")}>
            -
          </Button>

          <Button size="lg " onClick={() => deleteLast()}>
            DEL
          </Button>
          <Button
            variant="danger"
            size="lg"
            disabled={calc === ""}
            onClick={() => clearAll()}
          >
            C
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
