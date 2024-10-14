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
    </View>
  );
}
