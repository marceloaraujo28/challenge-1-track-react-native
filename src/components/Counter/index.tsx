import { View, Text } from "react-native";
import { styles } from "./style";

type CounterProps = {
  colorText: string;
  text: string;
  number: number;
};

export function Counter({ colorText, text, number }: CounterProps) {
  return (
    <View style={styles.container}>
      <Text style={[{ color: `${colorText}` }, styles.counterText]}>
        {text}
      </Text> 
      <View style={styles.boxNumber}>
        <Text style={styles.counterNumber}>{number}</Text>
      </View>
    </View>
  );
}
