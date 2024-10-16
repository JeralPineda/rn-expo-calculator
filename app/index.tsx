import { View } from "react-native";
import { ThemeText } from "@/components/ThemeText";
import { globalStyles } from "@/styles/global-styles";
import { Button } from "@/components/Button";
import { useCalculator } from "@/hooks/useCalculator";

export default function CalculatorApp() {
  const {
    formula,
    prevNumber,
    buildNumber,
    clean,
    toggleSign,
    deleteLast,
    divideOperation,
    multiplyOperation,
    substractOperation,
    addOperation,
  } = useCalculator();

  return (
    <View style={globalStyles.calculatorContainer}>
      {/* Resultados */}
      <View style={{ paddingHorizontal: 30, paddingBottom: 20 }}>
        <ThemeText variant="h1">{formula}</ThemeText>

        {formula === prevNumber ? (
          <ThemeText variant="h2"> </ThemeText>
        ) : (
          <ThemeText variant="h2">{prevNumber}</ThemeText>
        )}
      </View>

      {/* Fila de Botones */}
      <View style={globalStyles.row}>
        {/* Botón */}
        <Button label="C" background="lightGray" onPress={clean} blackText />
        <Button
          label="+/-"
          background="lightGray"
          onPress={toggleSign}
          blackText
        />
        <Button
          label="del"
          background="lightGray"
          onPress={deleteLast}
          blackText
        />
        <Button label="÷" background="colorOrange" onPress={divideOperation} />
      </View>

      <View style={globalStyles.row}>
        {/* Botón */}
        <Button
          label="7"
          background="darkGray"
          onPress={() => buildNumber("7")}
        />
        <Button
          label="8"
          background="darkGray"
          onPress={() => buildNumber("8")}
        />
        <Button
          label="9"
          background="darkGray"
          onPress={() => buildNumber("9")}
        />
        <Button
          label="×"
          background="colorOrange"
          onPress={multiplyOperation}
        />
      </View>

      <View style={globalStyles.row}>
        {/* Botón */}
        <Button
          label="4"
          background="darkGray"
          onPress={() => buildNumber("4")}
        />
        <Button
          label="5"
          background="darkGray"
          onPress={() => buildNumber("5")}
        />
        <Button
          label="6"
          background="darkGray"
          onPress={() => buildNumber("6")}
        />
        <Button
          label="-"
          background="colorOrange"
          onPress={substractOperation}
        />
      </View>

      <View style={globalStyles.row}>
        {/* Botón */}
        <Button
          label="1"
          background="darkGray"
          onPress={() => buildNumber("1")}
        />
        <Button
          label="2"
          background="darkGray"
          onPress={() => buildNumber("2")}
        />
        <Button
          label="3"
          background="darkGray"
          onPress={() => buildNumber("3")}
        />
        <Button label="+" background="colorOrange" onPress={addOperation} />
      </View>

      <View style={globalStyles.row}>
        {/* Botón */}
        <Button
          label="0"
          background="darkGray"
          onPress={() => buildNumber("0")}
          dobleSize
        />
        <Button
          label="."
          background="darkGray"
          onPress={() => buildNumber(".")}
        />
        <Button
          label="="
          background="colorOrange"
          onPress={() => console.log("=")}
        />
      </View>
    </View>
  );
}
