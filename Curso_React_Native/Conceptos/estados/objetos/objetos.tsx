import { Image, Text, TouchableOpacity, View } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { objetosStyles } from "./styles";

function Objetos(){
  const [contact, setContact] = useState({
    firstName: "Davis",
    lastName: "Palmer",
    phone: "+1 (719) 555-1212",
    email: "itsmyrealname@example.com",
    isFavourite: false
  })

  let iconStyle = {
    ...objetosStyles.icon,
    color: contact.isFavourite ? 'gold': 'gray'
  }

  function toggleFavourite(){
    setContact(prevState => {
      return {
        ...prevState,
        isFavourite: !prevState.isFavourite,
      }
    })
  }
  return(
    <View style={objetosStyles.container}>
      <View style={objetosStyles.card}>
        <Image source={require("./images/dogo.jpg")} style={objetosStyles.img}/>
        <TouchableOpacity onPress={toggleFavourite}>
          <FontAwesomeIcon icon={faStar} style={iconStyle} size={30}/>
        </TouchableOpacity>
        <View style={objetosStyles.infoContainer}>
          <Text style={objetosStyles.name}>{contact.firstName} {contact.lastName}</Text>
          <Text>{contact.phone}</Text>
          <Text>{contact.email}</Text>
        </View>

      </View>
    </View>
  )
}

export { Objetos}
