import {Text, TouchableOpacity, View} from "react-native";
import { estadosStyle } from "./styles";
import { useState } from "react";

function Estados(){
  const cosas= ["Cosa 1","Cosa 2"]
  const cosasItems= cosas.map((cosa)=><Text style={estadosStyle.pItem}>{cosa}</Text>)
  function handlePress(){
    console.log("Holi")
    /*cosas.push("Cosa"+(cosas.length+1))
    console.log(cosas)
    console.log(cosasItems)*/
  }
  return(
    <View style={estadosStyle.container}>
      <TouchableOpacity style={estadosStyle.button} onPress={handlePress}>
        <Text style={estadosStyle.p}>Add Item</Text>
      </TouchableOpacity>
      <View style={estadosStyle.containerItems}>
        {cosasItems}
      </View>
    </View>
  )
}

export { Estados }
