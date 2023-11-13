import { View } from "react-native";
import { navBarStyles } from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faAirbnb } from "@fortawesome/free-brands-svg-icons";

function NavBar(){
  return(
    <View style={navBarStyles.container}>
      <FontAwesomeIcon icon={faAirbnb} size={50} style={navBarStyles.icon}></FontAwesomeIcon>
    </View>
  )
}

export { NavBar }
