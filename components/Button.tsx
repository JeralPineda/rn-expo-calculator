import { Pressable, Text } from "react-native";
import { Colors } from "@/constants/Colors";
import { globalStyles } from "@/styles/global-styles";

// Definimos el tipo Background para incluir solo las claves que queremos
type Background = keyof Pick<
  typeof Colors,
  "darkGray" | "lightGray" | "colorOrange"
>;

interface ButtonProps {
  label: string;
  background?: Background;
  blackText?: boolean;
  dobleSize?: boolean;
  onPress: () => void;
}

export function Button({
  label,
  background = "darkGray",
  blackText = false,
  dobleSize = false,
  onPress,
}: ButtonProps) {
  return (
    <Pressable
      style={({ pressed }) => ({
        ...globalStyles.button,
        backgroundColor: Colors[background],
        opacity: pressed ? 0.8 : 1,
        width: dobleSize ? 180 : 80,
      })}
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
