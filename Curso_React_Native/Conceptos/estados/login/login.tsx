import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { loginStyles } from "./styles";
import { useState } from "react";

function Login(){
  const [loginData, setLoginData] = useState({userName: '',password:''})

  function handleChangeText(field: string, value:string){
    setLoginData(prevData=>{
      return {
        ...prevData,
        [field]:value
      }
    })
  }

  return(
    <View style={loginStyles.container}>
      <View style={loginStyles.card}>
        <Text style={loginStyles.text}>UserName</Text>

        <TextInput
          style={loginStyles.textInput}
          onChangeText={(text)=>handleChangeText('userName',text)}
          value={loginData.userName}
          placeholder={"Ingrese nombre de usuario"}
        />
        <Text style={loginStyles.text}>Password</Text>
        <TextInput
          style={loginStyles.textInput}
          onChangeText={(text)=>handleChangeText('password',text)}
          value={loginData.password}
          placeholder={"Ingrese contraseña"}
        />

        <TouchableOpacity style={loginStyles.button}>
          <Text style={loginStyles.buttonText}>LOGIN</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export {Login}
