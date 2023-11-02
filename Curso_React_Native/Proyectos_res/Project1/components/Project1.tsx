// eslint-disable-next-line prettier/prettier
import { FlatList, Image, Text, View } from "react-native";
import { Nav } from "./Nav";
import { navStyles, projectStyles } from "./styles";
import { Body } from "./Body";

function Project1 (){
  return (
    <View >
      <Nav></Nav>
      <Body></Body>

    </View>
  )
}

export { Project1 }
