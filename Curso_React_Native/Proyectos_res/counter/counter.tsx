import { Text, TouchableOpacity, View } from "react-native";
import { counterStyles } from "./style";

function Counter(){
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
