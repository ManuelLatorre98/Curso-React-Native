import { Button, Text, View } from "react-native";
import { useEffect, useState } from "react";

function Effect2(){
  const [count, setCount] = useState(0)

  useEffect(() => {
    console.log("EFFECT RUNnn")
  },[count]);
  return(
    <View>
      <Text>El contador es {count}</Text>
      <Button
        title={'holi'}
        onPress={()=>setCount(prevState => prevState+1)}
      />
    </View>
  )
}

export {Effect2}
