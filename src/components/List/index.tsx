import { Text, View, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import Trash from "../../../assets/trash.svg";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { useState } from "react";
import { CounterFinish } from "../../screens/Home";

type ListProps = {
  checkedFirst?: boolean;
  text?: string;
  onRemove?: () => void;
  setCounter: React.Dispatch<React.SetStateAction<CounterFinish>>;
  id: number;
};

export function List({
  checkedFirst,
  onRemove,
  text,
  setCounter,
  id,
}: ListProps) {
  const [checked, setChecked] = useState(false);

  function onPress() {
    setChecked(!checked);
    setCounter((prevState) => ({
      ...prevState,
      value: checked ? prevState.value - 1 : prevState.value + 1,
      ids: checked
        ? prevState.ids.filter((item) => item != id.toString())
        : [...prevState.ids, id.toString()],
    }));
  }

  return (
    <View
      style={[
        { borderColor: `${checked ? "#262626" : "#333333"}` },
        styles.container,
      ]}
    >
      <View style={styles.checkboxContainer}>
        <BouncyCheckbox
          style={{ marginRight: -16 }}
          fillColor={`${checked ? "#5E60CE" : "#4EA8DE"}`}
          size={18}
          isChecked={checked}
          onPress={onPress}
        />
      </View>
      <View style={styles.textListContainer}>
        <Text
          style={[
            {
              color: `${checked ? "#808080" : "#fff"}`,
            },
            { textDecorationLine: `${checked ? "line-through" : "none"}` },
            styles.textList,
          ]}
        >
          {text}
        </Text>
      </View>
      <View style={styles.iconContainer}>
        <TouchableOpacity onPress={onRemove}>
          <Trash />
        </TouchableOpacity>
      </View>
    </View>
  );
}
