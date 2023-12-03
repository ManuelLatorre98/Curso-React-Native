import { Text, View } from "react-native";

function ArrayMap(){
  const colores= ["Rojo","Azul","Amarillo","Verde","Rosa","Vioelta"]

  const coloresComp = [
    <Text>Rojo</Text>,
    <Text>Azul</Text>,
    <Text>Amarillo</Text>,
    <Text>Verde</Text>,
    <Text>Rosa</Text>,
    <Text>Vioelta</Text>
  ]

  const coloresArray= colores.map((color)=><Text>{color}</Text>)
  return(
    <View>
      {/*<Text>{colores}</Text>*/}
      {coloresComp}
      {/*{coloresArray}*/}
    </View>
  )
}

export { ArrayMap }
