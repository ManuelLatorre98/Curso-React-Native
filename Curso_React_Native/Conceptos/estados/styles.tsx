import { StyleSheet } from "react-native";

const estadosStyle= StyleSheet.create({
  container:{
    flex:1,
    padding:50,
    backgroundColor:'#70B85D',

  },
  button:{
    width:300,
    height:50,
    borderWidth:3,
    borderColor:'white',
    borderRadius:40,
    justifyContent:'center',
    alignItems:'center',
    marginBottom:30
  },
  p:{
    fontSize:20,
    color:'white',
  },
  pItem:{
    fontSize:20,
    color:'white',
    fontWeight:'bold'
  },
  containerItems:{
    gap:10
  }
})

export { estadosStyle }
