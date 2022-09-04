import { Text, StatusBar } from "react-native";
import { Header } from "./src/components/Header";
import { Home } from "./src/screens/Home";

export default function App() {
  return (
    <>
      <StatusBar
        backgroundColor="transparent"
        translucent
        barStyle="light-content"
      />
      <Header />
      <Home />
    </>
  );
}
