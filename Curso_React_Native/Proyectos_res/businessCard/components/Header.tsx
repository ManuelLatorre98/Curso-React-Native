import { Image, Text, TouchableOpacity, View } from "react-native";
import { commonStyles, headerStyles } from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";


function Header(){
  return(
    <View style={headerStyles.container}>
      <Image source={require('../images/Laura-Cecchi.jpg')} style={headerStyles.image}></Image>
      <Text style={commonStyles.h1}>Laura Cecchi</Text>
      <Text style={headerStyles.jobText}>Investigadora - Docente</Text>
    </View>
  )
}

export {Header}
