import { useEffect, useRef, useState } from "react";

enum Operator {
  add = "+",
  subtract = "-",
  multiply = "×",
  divide = "÷",
}

export const useCalculator = () => {
  const [formula, setFormula] = useState("0");
  const [number, setNumber] = useState("0");
  const [prevNumber, setPrevNumber] = useState("0");

  const lastOperation = useRef<Operator>();

  useEffect(() => {
    if (lastOperation.current) {
      const firstFormulaPart = formula.split(" ").at(0);
      setFormula(`${firstFormulaPart} ${lastOperation.current} ${number}`);
    } else {
      setFormula(number);
    }
  }, [formula, number]);

  useEffect(() => {
    //TODO: Calcular el resultado
    // setPrevNumber(number);
  }, [number]);

  const clean = () => {
    setNumber("0");
    setPrevNumber("0");
    setFormula("0");

    lastOperation.current = undefined;
  };

  const toggleSign = () => {
    if (number.includes("-")) {
      return setNumber(number.replace("-", ""));
    }

    setNumber("-" + number);
  };

  const deleteLast = () => {
    let currentSign = "";
    let temporalNumber = number;

    if (number.includes("-")) {
      currentSign = "-";
      temporalNumber = number.substring(1);
    }

    if (temporalNumber.length > 1) {
      return setNumber(currentSign + temporalNumber.slice(0, -1));
    }

    setNumber("0");
  };

  const setLastNumber = () => {
    // TODO: Calculate result

    if (number.endsWith(".")) {
      setPrevNumber(number.slice(0, -1));
    }

    setPrevNumber(number);
    setNumber("0");
  };

  const divideOperation = () => {
    setLastNumber();
    lastOperation.current = Operator.divide;
  };

  const multiplyOperation = () => {
    setLastNumber();
    lastOperation.current = Operator.multiply;
  };

  const substractOperation = () => {
    setLastNumber();
    lastOperation.current = Operator.subtract;
  };

  const addOperation = () => {
    setLastNumber();
    lastOperation.current = Operator.add;
  };

  const buildNumber = (numberString: string) => {
    //Verificar si ya existe un punto decimal
    if (number.includes(".") && numberString === ".") return;

    if (number.startsWith("0") || number.startsWith("-0")) {
      if (numberString === ".") {
        return setNumber(number + numberString);
      }

      //Evaluar si es otro 0 y no hay punto decimal
      if (numberString === "0" && number.includes(".")) {
        return setNumber(number + numberString);
      }

      // Evaluar si es diferente de 0, no hay punto y es el primer numeró
      if (numberString !== "0" && !number.includes(".")) {
        return setNumber(numberString);
      }

      // Evitar el 00000.00
      if (numberString === "0" && !number.includes(".")) return;
    }

    setNumber(number + numberString);
  };

  return {
    //Props
    formula,
    number,
    prevNumber,

    //Methods
    buildNumber,
    clean,
    toggleSign,
    deleteLast,

    divideOperation,
    multiplyOperation,
    substractOperation,
    addOperation,
  };
};
