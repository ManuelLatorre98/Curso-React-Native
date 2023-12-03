import { Text, TouchableOpacity, View } from "react-native";
import { counterStyles } from "./style";

function Counter(){
  /*todo Usar estados para incrementar y decrementar el contador*/
  /*todo cuando se incremente tiene que imprimir el mensaje "INCREMENTA A: valor"*/
  /*todo cuando se decremente tiene que imprimir el mensaje "DECREMENTA A: valor"*/
  return (
    <View style={counterStyles.container}>
      <View style={counterStyles.counterContainer}>
        <TouchableOpacity style={counterStyles.button}>
          <Text style={counterStyles.buttonText}>-</Text>
        </TouchableOpacity>
        <View style={counterStyles.count}>
          <Text style={counterStyles.countText}>0</Text>
        </View>
        <TouchableOpacity style={counterStyles.button}>
          <Text style={counterStyles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export {Counter}
