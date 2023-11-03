import { Linking, Text, TouchableOpacity, View } from "react-native";
import { commonStyles, headerStyles, infoStyles } from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

function Info(){
  const handlePress = ((url: string)=>{
    Linking.openURL(url)
  })
  return(
    <View style={infoStyles.container}>
      <View style={headerStyles.buttonsContainer}>
        <TouchableOpacity style={headerStyles.buttonMail} onPress={()=>handlePress('https://pedco.uncoma.edu.ar/login/index.php')}>
          <FontAwesomeIcon icon={faEnvelope} />
          <Text style={headerStyles.buttonMailText}>Email</Text>
        </TouchableOpacity>
        <TouchableOpacity style={headerStyles.buttonLinkedin} onPress={()=>handlePress('https://pedco.uncoma.edu.ar/login/index.php')}>
          <FontAwesomeIcon icon={faLinkedin} style={{color:'white'}}/>
          <Text style={headerStyles.buttonLinkedinText}>Linkedin</Text>
        </TouchableOpacity>
      </View>
      <View style={infoStyles.textContainer}>
        <Text style={commonStyles.h2}>Informacion personal</Text>
        <Text style={commonStyles.p}>aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</Text>
      </View>
      <View style={infoStyles.textContainer}>
        <Text style={commonStyles.h2}>Intereses</Text>
        <Text style={commonStyles.p}>lalallalalalallalalalallalalalallalalalallalalalallalalalallalalalallalalalallalalalallalalalallalalalallalalalallalalalallalalalallalalalallalalalallalalalallalalalallalalalallalalalallalalalallalalalallalalalallalalalallalalalallalalalallalalalallalalalallalalalallalalalallalalalallalalalallalalalallalalalallalalalallalalalallalalalallalalalallalalalallalalalallalalalallalalalallalalalallalalalallalalalallalalalallalalalallalalalallalalalallalalalallalalalallalalalallalalalallalalalallalalalallalalalallalalalallalalalallalalalallalalalallalalalallalalalallalalalallalalalallalalalallalalalallalalalallalalalallalalalallalalalallalalalallala</Text>
      </View>
    </View>
  )
}

export { Info }
