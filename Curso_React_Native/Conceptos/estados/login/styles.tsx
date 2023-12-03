import { StyleSheet } from "react-native";

const loginStyles= StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    padding:30
  },
  card:{
    borderWidth:0.5,
    borderColor:'gray',
    padding:30,
    width:'100%',
  },
  text:{
    fontSize:18,
    fontWeight:'bold',
    color:'black'
  },
  textInput:{
    borderWidth:0.5,
    borderColor:'gray',
    borderRadius:10,
    padding:10,
    marginBottom:30
  },
  button:{
    alignSelf:'center',
    backgroundColor:'#187cec',
    width:'100%',
    height:40,
    justifyContent:'center',
    alignItems:'center',
    borderWidth:0.5,
    borderRadius:10

  },
  buttonText:{
    fontSize:21,
    fontWeight:'bold',
    color:'white',
  }
})

export {loginStyles}
