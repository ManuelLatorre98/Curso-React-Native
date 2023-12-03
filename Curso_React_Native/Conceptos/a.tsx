import { Text, View } from "react-native";

function EjemploTsx(){
  const date = new Date()
  const horas= date.getHours() %12
  return (
    <View>
      <Text>La hora es {horas}</Text>
    </View>
  )
}

export { EjemploTsx }
