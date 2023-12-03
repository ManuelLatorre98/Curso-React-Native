import { Text, View } from "react-native";
import { useEffect, useState } from "react";

function Effect(){

  const [starWarsData, setStarWarsData] = useState({})
  fetch("https://swapi.dev/api/people/1")
    .then(res => res.json())
    .then(data => setStarWarsData(data))

  console.log("RENDER!")
  //Esto es equivalente a lo de arriba
  /*const holi= async ()=>{
    const data= await fetch("https://swapi.dev/api/people/1")
    setStarWarsData(data)
  }
  holi()*/
  return(
    <View>
      <Text>{JSON.stringify(starWarsData,null,2)}</Text>
    </View>
  )
}

export {Effect}
