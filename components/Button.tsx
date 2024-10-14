import { Pressable, Text, View } from "react-native";
import { globalStyles } from "@/styles/global-styles";
import { Colors } from "@/constants/Colors";

// Definimos el tipo Background para incluir solo las claves que queremos
type Background = keyof Pick<
  typeof Colors,
  "darkGray" | "lightGray" | "colorOrange"
>;

interface ButtonProps {
  label: string;
  background?: Background;
  blackText?: boolean;
  onPress: () => void;
}

export function Button({
  label,
  background = "darkGray",
  blackText = false,
  onPress,
}: ButtonProps) {
  return (
    <Pressable
      style={[globalStyles.button, { backgroundColor: Colors[background] }]}
      onPress={onPress}
    >
      <Text
        style={{
          ...globalStyles.buttonText,
          color: blackText ? "black" : "white",
        }}
      >
        {label}
      </Text>
    </Pressable>
  );
}
