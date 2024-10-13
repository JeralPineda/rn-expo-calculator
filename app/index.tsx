import { View, Text } from "react-native";
import { globalStyles } from "@/styles/global-styles";

export default function CalculatorApp() {
  return (
    <View style={globalStyles.calculatorContainer}>
      <Text style={globalStyles.mainResult}>50 x 50</Text>
      <Text style={globalStyles.subResult}>100</Text>
    </View>
  );
}
