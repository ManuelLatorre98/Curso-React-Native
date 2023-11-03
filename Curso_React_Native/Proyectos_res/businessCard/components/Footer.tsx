import { Linking, Text, TouchableOpacity, View } from "react-native";
import { footerStyles, headerStyles } from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faSquareTwitter, faSquareFacebook, faSquareInstagram, faGithub } from "@fortawesome/free-brands-svg-icons";

function Footer(){
  const handlePress = ((url: string)=>{
    Linking.openURL(url)
  })
  return(
    <View style={footerStyles.container}>
      <View style={footerStyles.iconContainer}>
        <TouchableOpacity onPress={()=>handlePress('https://pedco.uncoma.edu.ar/login/index.php')}>
          <FontAwesomeIcon icon={faSquareTwitter} style={footerStyles.icon} size={45}/>
        </TouchableOpacity>

        <TouchableOpacity onPress={()=>handlePress('https://pedco.uncoma.edu.ar/login/index.php')}>
          <FontAwesomeIcon icon={faSquareFacebook} style={footerStyles.icon} size={45}/>
        </TouchableOpacity>

        <TouchableOpacity onPress={()=>handlePress('https://pedco.uncoma.edu.ar/login/index.php')}>
          <FontAwesomeIcon icon={faSquareInstagram} style={footerStyles.icon} size={45}/>
        </TouchableOpacity>

        <TouchableOpacity onPress={()=>handlePress('https://pedco.uncoma.edu.ar/login/index.php')}>
          <FontAwesomeIcon icon={faGithub} style={footerStyles.icon} size={45}/>
        </TouchableOpacity>
      </View>

    </View>
  )
}

export {Footer}
