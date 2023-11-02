import { View } from "react-native";
import { Header } from "./Header";
import { cardStyles } from "./styles";

function BusinessCard(){
  return(
    <View style={cardStyles.container}>
      <Header></Header>
    </View>
  )
}

export { BusinessCard }
