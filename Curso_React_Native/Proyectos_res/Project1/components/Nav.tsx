import { Image, View } from "react-native";
import { navStyles } from "./styles";

function Nav(){
  return(
    <View style={navStyles.container}>
      <Image style={navStyles.image} source={require('../Images/React-icon.png')} />
    </View>
  )
}

export { Nav }
