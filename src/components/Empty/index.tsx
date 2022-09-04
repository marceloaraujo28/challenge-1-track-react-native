import { View, Text } from "react-native";
import { styles } from "./styles";
import Clipboard from "../../../assets/clipboard.svg";

export function Empty() {
  return (
    <View style={styles.empty}>
      <Clipboard />
      <View style={styles.emptyContainer}>
        <Text style={[{ fontWeight: "700" }, styles.emptyText]}>
          Você ainda não tem tarefas cadastradas
        </Text>
        <Text style={styles.emptyText}>
          Crie tarefas e organize seus itens a fazer
        </Text>
      </View>
    </View>
  );
}
