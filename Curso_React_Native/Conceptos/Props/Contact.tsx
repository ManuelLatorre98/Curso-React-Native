import { Image, ImageSourcePropType, Text, View } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { contactStyles } from "./styles";
interface Props{
  img: ImageSourcePropType,
  name: string,
  phone: string,
  email:string
}
function Contact(props: Props){
  const {img}=props
  return (
    <View style={contactStyles.shadowContainer}>
      <View style={contactStyles.cardContainer}>
        <Image source={img} style={contactStyles.image}></Image>
        <View style={contactStyles.dataContainer}>
          <Text style={contactStyles.H1}>{props.name}</Text>
          <View style={contactStyles.info}>
            <FontAwesomeIcon icon={faPhone} style={{color:'black'}}/>
            <Text style={contactStyles.p}>{props.phone}</Text>
          </View>
          <View style={contactStyles.info}>
            <FontAwesomeIcon icon={faEnvelope} style={{color:'black'}}></FontAwesomeIcon>
            <Text style={contactStyles.p}>{props.email}</Text>
          </View>
        </View>
      </View>
    </View>
  )
}

export { Contact }
