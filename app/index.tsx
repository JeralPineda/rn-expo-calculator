import { View } from "react-native";
import { ThemeText } from "@/components/ThemeText";
import { globalStyles } from "@/styles/global-styles";

export default function CalculatorApp() {
  return (
    <View style={globalStyles.calculatorContainer}>
      <ThemeText variant="h1">50 x 50</ThemeText>
      <ThemeText variant="h2">100</ThemeText>
    </View>
  );
}
