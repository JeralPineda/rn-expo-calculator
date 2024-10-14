import { View } from "react-native";
import { ThemeText } from "@/components/ThemeText";
import { globalStyles } from "@/styles/global-styles";
import { Button } from "@/components/Button";

export default function CalculatorApp() {
  return (
    <View style={globalStyles.calculatorContainer}>
      {/* Resultados */}
      <View style={{ paddingHorizontal: 30, paddingBottom: 20 }}>
        <ThemeText variant="h1">50 x 50</ThemeText>
        <ThemeText variant="h2">100</ThemeText>
      </View>

      {/* Fila de Botones */}
      <View style={globalStyles.row}>
        {/* Botón */}
        <Button
          label="C"
          background="lightGray"
          onPress={() => console.log("C")}
          blackText
        />
        <Button
          label="+/-"
          background="lightGray"
          onPress={() => console.log("+/-")}
          blackText
        />
        <Button
          label="del"
          background="lightGray"
          onPress={() => console.log("del")}
          blackText
        />
        <Button
          label="÷"
          background="colorOrange"
          onPress={() => console.log("÷")}
        />
      </View>

      <View style={globalStyles.row}>
        {/* Botón */}
        <Button
          label="7"
          background="darkGray"
          onPress={() => console.log("7")}
        />
        <Button
          label="8"
          background="darkGray"
          onPress={() => console.log("8")}
        />
        <Button
          label="9"
          background="darkGray"
          onPress={() => console.log("9")}
        />
        <Button
          label="x"
          background="colorOrange"
          onPress={() => console.log("x")}
        />
      </View>

      <View style={globalStyles.row}>
        {/* Botón */}
        <Button
          label="4"
          background="darkGray"
          onPress={() => console.log("4")}
        />
        <Button
          label="5"
          background="darkGray"
          onPress={() => console.log("5")}
        />
        <Button
          label="6"
          background="darkGray"
          onPress={() => console.log("6")}
        />
        <Button
          label="-"
          background="colorOrange"
          onPress={() => console.log("-")}
        />
      </View>

      <View style={globalStyles.row}>
        {/* Botón */}
        <Button
          label="1"
          background="darkGray"
          onPress={() => console.log("1")}
        />
        <Button
          label="2"
          background="darkGray"
          onPress={() => console.log("2")}
        />
        <Button
          label="3"
          background="darkGray"
          onPress={() => console.log("3")}
        />
        <Button
          label="+"
          background="colorOrange"
          onPress={() => console.log("+")}
        />
      </View>

      <View style={globalStyles.row}>
        {/* Botón */}
        <Button
          label="0"
          background="darkGray"
          onPress={() => console.log("0")}
          dobleSize
        />
        <Button
          label="."
          background="darkGray"
          onPress={() => console.log(".")}
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
