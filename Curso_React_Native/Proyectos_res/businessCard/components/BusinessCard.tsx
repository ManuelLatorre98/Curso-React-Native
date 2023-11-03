import { Animated, View } from "react-native";
import { Header } from "./Header";
import { cardStyles } from "./styles";
import { Info } from "./Info";
import { Footer } from "./Footer";
import ScrollView = Animated.ScrollView;

function BusinessCard(){
  return(
      <ScrollView style={cardStyles.container}>
        <Header></Header>
        <Info></Info>
        <Footer></Footer>
      </ScrollView>
  )
}

export { BusinessCard }
