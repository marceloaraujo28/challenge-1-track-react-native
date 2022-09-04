import {
  TextInput,
  View,
  TouchableOpacity,
  FlatList,
  Alert,
} from "react-native";
import { styles } from "./style";
import Plus from "../../../assets/plus.svg";
import React, { useState } from "react";
import { Counter } from "../../components/Counter";
import { List } from "../../components/List";
import { Empty } from "../../components/Empty";

type itemsList = {
  id: number;
  textList: string;
};

export type CounterFinish = {
  value: number;
  ids: string[];
};

export function Home() {
  const [borderColor, setBorderColor] = useState("");
  const [counterFinish, setCounterFinish] = useState<CounterFinish>({
    value: 0,
    ids: [],
  });
  const [textList, setTextList] = useState("");
  const [itemsList, setItemsList] = useState<itemsList[]>([]);

  const [counterCreated, setCounterCreated] = useState(itemsList.length);

  function handleAddList() {
    const sanitizeNameList = textList.trim();

    if (!sanitizeNameList.length) {
      return Alert.alert("Campo vazio", "Por favor preencha esse campo!");
    }

    const filterItem = itemsList.filter((item) => item.textList === textList);

    if (filterItem.length) {
      return Alert.alert(
        "Item ja existente",
        "Esse item já existe em sua lista"
      );
    }

    const newItem = {
      id: itemsList.length + 1,
      textList: textList,
    };

    setItemsList((prevState) => [...prevState, newItem]);
    setCounterCreated((prevState) => prevState + 1);
    setTextList("");
  }

  function handleRemoveList(id: number) {
    const verifyFinish = counterFinish.ids.filter(
      (item) => item === id.toString()
    );

    Alert.alert("Remover", `Remover Item da Lista ${textList}?`, [
      {
        text: "Sim",
        onPress: () => {
          setItemsList((prevState) =>
            prevState.filter((item) => item.id !== id)
          );
          setCounterCreated((prevState) => prevState - 1);
          if (verifyFinish.length) {
            setCounterFinish((prevState) => ({
              ...prevState,
              value: prevState.value - 1,
            }));
          }
        },
      },
      {
        text: "Não",
        style: "cancel",
      },
    ]);
  }

  return (
    <View style={[styles.container]}>
      <View style={styles.form}>
        <TextInput
          style={[{ borderColor: borderColor }, styles.textInput]}
          placeholder="Adicione uma nova tarefa"
          placeholderTextColor="#808080"
          selectionColor="white"
          value={textList}
          onChangeText={setTextList}
          onFocus={() => setBorderColor("#5E60CE")}
          onBlur={() => setBorderColor("#000")}
        />

        <TouchableOpacity style={styles.button} onPress={handleAddList}>
          <Plus />
        </TouchableOpacity>
      </View>
      <View style={styles.content}>
        <View style={styles.header}>
          <Counter text="Criadas" number={counterCreated} colorText="#4EA8DE" />
          <Counter
            text="Concluídas"
            number={counterFinish.value}
            colorText="#8284FA"
          />
        </View>
        <FlatList
          data={itemsList}
          keyExtractor={(item, index) => item.id.toString()}
          renderItem={({ item }) => (
            <List
              key={item.id}
              text={item.textList}
              onRemove={() => handleRemoveList(item.id)}
              setCounter={setCounterFinish}
              id={item.id}
            />
          )}
          showsVerticalScrollIndicator={false}
          ListEmptyComponent={() => <Empty />}
        />
      </View>
    </View>
  );
}
