import { TouchableOpacity, View } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faHeart, faStar } from "@fortawesome/free-solid-svg-icons";
import { estrellaStyles } from "./styles";

function Estrella(){
  const showStar = true
  const showHeart = true
  return(
    <View style={estrellaStyles.container}>
    <TouchableOpacity >
      <FontAwesomeIcon icon={faStar} style={estrellaStyles.star} size={90} />
      <FontAwesomeIcon icon={faHeart} style={estrellaStyles.heart} size={90} />
    </TouchableOpacity>
    </View>
  )
}

export { Estrella }
